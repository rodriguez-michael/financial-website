from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import current_user, UserList, NewsListViewSet, NewsArticleViewSet

router = DefaultRouter()
router.register(r'newslist', NewsListViewSet, basename='newslist')
router.register(r'newsarticle', NewsArticleViewSet, basename='newsarticle')

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
]

urlpatterns += router.urls