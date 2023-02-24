from django.shortcuts import render
from django.http import JsonResponse
from .models import item
from .serializers import itemSerializer


# Create your views here.



def item_list(request):
 
    items = item.objects.all()
    serializer = itemSerializer(items, many=True)
    return JsonResponse(serializer.data, safe=False)
  
