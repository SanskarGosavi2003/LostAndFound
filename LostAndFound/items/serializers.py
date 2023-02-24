from rest_framework import serializers
from items.models import item


class itemSerializer(serializers.ModelSerializer):
    class Meta:
        model = item
        fields = '__all__'
