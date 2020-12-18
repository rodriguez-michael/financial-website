from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from .models import NewsList, NewsArticle

# ----- NewsArticle -----


class NewsArticleSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    created_at = serializers.ReadOnlyField()

    class Meta:
        model = NewsArticle
        fields = ['id', 'title', 'author', 'description', 'url', 'created_at', 'newslist']


# ----- NewsList -----


class NewsListSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    created_at = serializers.ReadOnlyField()
    articles = NewsArticleSerializer(source='newsarticle', many=True, read_only=True)
    
    class Meta:
        model = NewsList
        fields = ['id', 'name', 'created_at', 'user', 'articles']


# ----- User -----


class UserSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    newslists = NewsListSerializer(source='newslist', many=True, read_only=True)


    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'newslists']


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        print('payload', payload)
        token = jwt_encode_handler(payload)
        print('token', token)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')