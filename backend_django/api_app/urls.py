from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import current_user, UserList, NewsListViewSet, NewsArticleViewSet, StockListViewSet, get_link_token, get_public_token_and_exchange_for_access_token, get_transactions, get_account_info

router = DefaultRouter()
router.register(r'newslist', NewsListViewSet, basename='newslist')
router.register(r'newsarticle', NewsArticleViewSet, basename='newsarticle')
router.register(r'stocklist', StockListViewSet, basename='stocklist')

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('getlinktokenfromplaid/', get_link_token),
    path('senddjangothepublictoken/', get_public_token_and_exchange_for_access_token),
    path('transactions/', get_transactions),
    path('accountinfo/', get_account_info),
]

urlpatterns += router.urls