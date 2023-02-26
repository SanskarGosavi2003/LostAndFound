from django.urls import path
from . import views

urlpatterns = [
    path('lost/', views.item_lost),
    path('found/',views.items_found),
    path('signup/', views.signup_view),
]
