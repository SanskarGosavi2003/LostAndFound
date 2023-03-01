from django.shortcuts import render
from .models import item,User
from .models import item,User
from .models import item,User
from .serializers import itemSerializer,UserSerializer,NewSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['POST'])
def signup_view(request):
    serializer=UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response("Signup Successful")
    return Response("Signup Failed. Try Again.")

@api_view(['PUT'])
def login_view(request):
    user=User.objects.get(name=request.data.get('name'), password=request.data.get('password'))
    if user:
        user.status = True
        user.save(update_fields=['status'])
        return Response("Login Successful.")
    else:
        return Response("Login Failed. Try Again.")

@api_view(['GET'])
def items_lost(request):
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


@api_view(['PUT'])
def user_profile(request):
    user=User.objects.get(name=request.data.get('name'))
    if user:
        print(user, "user")
        user_serializer=NewSerializer(user)
        # print(user_serializer,"user serializer")
        user_profile=user_serializer.data
        print(user_profile,"user profile")
        return Response({"User-Profile":user_profile})
    return Response("sorry rahega")
    
    

@api_view(['POST'])
def add_items(request):
    serializer=itemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response("Try Again.")

@api_view(['PUT'])
def logout_view(request):
    user=User.objects.get(id=request.data.get('id'))
    if user:
        user.status = False
        user.save(update_fields=['status'])
        return Response("Logout Successful.")
    else:
        return Response("Logout Failed.")