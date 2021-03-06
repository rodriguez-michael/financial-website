from django.db import models
from django.conf import settings
from django.core import validators
from django.utils import timezone

class NewsList(models.Model):
    name = models.CharField(max_length=100, validators=[validators.MinLengthValidator(1, message='This field cannot be blank')])
    created_at = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='newslist')

    def __str__(self):
        return f"{self.name}"


class NewsArticle(models.Model):
    title = models.CharField(max_length=255, validators=[validators.MinLengthValidator(1, message='This field cannot be blank')])
    author = models.CharField(max_length=255, validators=[validators.MinLengthValidator(1, message='This field cannot be blank')])
    description = models.CharField(max_length=255, validators=[validators.MinLengthValidator(1, message='This field cannot be blank')])
    url = models.CharField(max_length=255, validators=[validators.MinLengthValidator(1, message='This field cannot be blank')])
    created_at = models.DateTimeField(default=timezone.now)
    newslist = models.ForeignKey(NewsList, on_delete=models.CASCADE, related_name='newsarticle')

    def __str__(self):
        return f"{self.title}"


class PlaidAuth(models.Model):
    access_token = models.CharField(max_length=100)
    item_id = models.CharField(max_length=100)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='plaid')


class StockList(models.Model):
    name = models.CharField(max_length=100, validators=[validators.MinLengthValidator(1, message='This field cannot be blank')])
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='stocklist')

    def __str__(self):
        return f"{self.name}"