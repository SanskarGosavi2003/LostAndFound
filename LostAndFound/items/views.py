from django.shortcuts import render
from .models import item
from .serializers import itemSerializer,UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['POST'])
def signup_view(request):
    serializer=UserSerializer(data=request.data)
    if serializer.is_valid():
        print("hello")
        serializer.save()
        return Response("Signup Successful")
    return Response("Signup Failed. Try Again.")

def item_list(request):
   
    items = item.objects.filter(category="LOst")
    serializer = itemSerializer(items, many=True)
    item_lost = serializer.data
    return Response({"lost_items":item_lost})
