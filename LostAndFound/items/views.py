from django.shortcuts import render
from .models import item,User
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


@api_view(['GET'])
def user_profile(requset):
    user=User.objects.all()
    
    user_serializer=UserSerializer(user,many=True)
    user_profile=user_serializer.data
    return Response({"User-Profile":user_profile})
    
    