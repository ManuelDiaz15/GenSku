from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('history/', views.history, name="history"),
    path('services/', views.services, name="services"),
    path('create_sku/', views.create_sku, name="create_sku"),
    path('update_sku/', views.update_sku, name="update_sku"),
    
]
