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
    serializer=UserSerializer(user, many=True)
    if user:
        serializer.data.status=True
        return Response(serializer.data.status)
        #return Response("Login Successful.")
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


@api_view(['GET'])
def user_profile(request):
    serializer=NewSerializer(data= request.data)
    if serializer.is_valid():
        serializer.save()
    s=serializer.data
    user=User.objects.get(id=s.get('id'))
    user_serializer=NewSerializer(user)
    user_profile=user_serializer.data
    return Response({"User-Profile":user_profile})

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
    serializer=UserSerializer(user)
    s=serializer.data.get('status')
    if user:
        #s=False
        #return Response("Logout Successful.")
        return Response(s)
    else:
        return Response("Logout Failed.")
        
# def logout_view(request):
    #serializer=UserSerializer(data=request.data)
    #if serializer.is_valid():
        #serializer.save()
    #user=User.objects.get(id=serializer.data.get('id'))
    #user_serializer=UserSerializer(user)
    #if user and user_serializer.status==True:
        #user_serializer.status=False
        #return("Logout Successful.")
    #else:
        #return("Logout Failed.")
    

    