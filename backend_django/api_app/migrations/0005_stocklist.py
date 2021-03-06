# Generated by Django 3.1.3 on 2020-12-20 01:11

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api_app', '0004_auto_20201217_2331'),
    ]

    operations = [
        migrations.CreateModel(
            name='StockList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, validators=[django.core.validators.MinLengthValidator(1, message='This field cannot be blank')])),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stocklist', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
