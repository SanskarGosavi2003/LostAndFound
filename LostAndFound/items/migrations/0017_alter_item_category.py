# Generated by Django 4.1.7 on 2023-03-09 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0016_alter_user_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.BooleanField(),
        ),
    ]
