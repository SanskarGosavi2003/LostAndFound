# Generated by Django 4.1.7 on 2023-02-28 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0006_merge_20230228_2241'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='logged_in',
        ),
        migrations.AddField(
            model_name='item',
            name='time',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
