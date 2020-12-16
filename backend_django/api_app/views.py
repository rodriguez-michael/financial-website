from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken, NewsListSerializer, NewsArticleSerializer
from rest_framework import viewsets
from . import models
from django_filters.rest_framework import DjangoFilterBackend


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

# class ProductFilter(django_filters.FilterSet):
#     class Meta:
#         model = Product
#         fields = ['category', 'in_stock', 'manufacturer__name']

class NewsArticleViewSet(viewsets.ModelViewSet):
    queryset = models.NewsArticle.objects.all()
    serializer_class = NewsArticleSerializer
    # filter_backends = (DjangoFilterBackend,)
    # filter_fields = ('newslist',)


# class NewsListFilterSet(django_filters.FilterSet):
#     list = django_filters.