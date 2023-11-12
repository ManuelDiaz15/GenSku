from django.shortcuts import render, HttpResponse

# Create your views here.

def home(request):    
    return render (request, "core/home.html")

def services(request):
    return render (request, "core/services.html")

def history(request):
    return render (request, "core/history.html")

def create_sku(request):
    return render (request, "core/create_sku.html")

