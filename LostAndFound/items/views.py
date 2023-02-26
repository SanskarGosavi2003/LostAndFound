from django.shortcuts import render
from django.http import JsonResponse
from .models import item
from .serializers import itemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.


@api_view(['GET'])
def item_lost(request):
   
    items = item.objects.filter(category="lost")
    serializer = itemSerializer(items, many=True)
    item_lost = serializer.data
    return Response({"lost_items":item_lost})


@api_view(['GET'])
def items_found(request):
    items = item.objects.filter(category="found")
    serializer = itemSerializer(items, many=True)
    item_found = serializer.data
    return Response({"found_items":item_found})
