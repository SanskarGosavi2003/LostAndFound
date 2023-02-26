from django.urls import path
from . import views

urlpatterns = [
    path('', views.item_list),
    path('signup/', views.signup_view),
    path('login/', views.login_view),
]
