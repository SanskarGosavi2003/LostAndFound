from django.urls import path
from . import views

urlpatterns = [
    path('lost/', views.items_lost),
    path('found/',views.items_found),
    path('signup/', views.signup_view),
    path('login/', views.login_view),
    path('logout/', views.logout_view),
    path('add/', views.add_items),
    path('user/', views.user_profile),
]
