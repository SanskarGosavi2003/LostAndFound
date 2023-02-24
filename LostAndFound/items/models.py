from django.db import models

# Create your models here.


class item(models.Model):
    # name or type of the product
    product_tag = models.CharField(max_length=15)
    # place where lost or found
    place = models.TextField()
    # date when lost or found
    date = models.DateField()
    # time when lost or found
    time = models.TimeField()
    # description of the item lost or found
    description = models.TextField()
    # whether the item is lost or found
    category = models.CharField(max_length=25)


class User(models.Model):
    name = models.TextField()
    contact_number = models.IntegerField()
