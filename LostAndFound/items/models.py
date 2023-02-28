from django.db import models

# Create your models here.


class item(models.Model):
    # name or type of the product
    product_tag = models.CharField(max_length=15)
    # description of the item lost or found
    description = models.TextField()
    # place where lost or found
    place = models.TextField()
    # time when lost or found
    time = models.DateTimeField(blank=True, null=True)
    # description of the item lost or found
    description = models.TextField()
    #image of the item
    image_url=models.TimeField(blank=True,null=True)
    # whether the item is lost or found
    category = models.CharField(max_length=25)

    def __str__(self):
        return self.product_tag

class User(models.Model):
    name = models.TextField(blank=True)
    email = models.EmailField(blank=True)
    password = models.TextField(blank=True)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.name
