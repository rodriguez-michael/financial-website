from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken, NewsListSerializer, NewsArticleSerializer, StockListSerializer
from rest_framework import viewsets
from . import models
from django_filters.rest_framework import DjangoFilterBackend
from plaid import Client
from .utils import plaidclient, plaidLinkTokenDict
import json
from django.views.decorators.csrf import csrf_exempt
import datetime


# ----- User -----


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ----- NewsList -----


class NewsListViewSet(viewsets.ModelViewSet):
    queryset = models.NewsList.objects.all()
    serializer_class = NewsListSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('user',)

# ----- NewsArticle -----


class NewsArticleViewSet(viewsets.ModelViewSet):
    queryset = models.NewsArticle.objects.all()
    serializer_class = NewsArticleSerializer


# ----- StockList -----


class StockListViewSet(viewsets.ModelViewSet):
    queryset = models.StockList.objects.all()
    serializer_class = StockListSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('user',)

    # http://127.0.0.1:8000/api/stocklist/?user=1

# ----- Plaid -----


client = plaidclient()

@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated,))
def get_link_token(request):
    data = plaidLinkTokenDict(str(request.user.username))
    response = client.LinkToken.create(data)
    link_token = response['link_token']
    # print(models.PlaidAuth.objects.filter(user=request.user).last().access_token)
   
    return JsonResponse(response)


@api_view(['POST'])
@permission_classes((permissions.IsAuthenticated,))
def get_public_token_and_exchange_for_access_token(request):
    data = json.load(request)
    response = client.Item.public_token.exchange(data['public_token'])
    access_token = response['access_token']
    item_id = response['item_id']
    print('accessToken: ', access_token)
    print('item_id: ', item_id)
    print('try to get user info: ', request.user)
    models.PlaidAuth.objects.create(access_token=access_token, item_id=item_id, user=request.user)
    return JsonResponse(data)



@api_view(['POST'])
@permission_classes((permissions.IsAuthenticated,))
def get_account_info(request):
    print('who is using account info -> ', request.user)
    access_token = models.PlaidAuth.objects.filter(user=request.user).last().access_token
    print(access_token)
    response = client.Accounts.get(access_token)
    accounts = response['accounts']
    return JsonResponse(accounts, safe=False)


@api_view(['POST'])
@permission_classes((permissions.IsAuthenticated,))
def get_transactions(request):
    print('who is using transactions -> ', request.user)
    access_token = models.PlaidAuth.objects.filter(user=request.user).last().access_token
    start_date = "{:%Y-%m-%d}".format(datetime.datetime.now() + datetime.timedelta(-30))
    end_date = "{:%Y-%m-%d}".format(datetime.datetime.now())
    response = client.Transactions.get(access_token, start_date, end_date)
    transactions = response['transactions']
    return JsonResponse(transactions, safe=False)