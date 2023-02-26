from rest_framework import serializers
from items.models import item, User


class itemSerializer(serializers.ModelSerializer):
    class Meta:
        model = item
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        #def login():
            #fields = {'name','password'}
            #return
        #def profile():
            #fields = {'name','email'}
            #return
