from django.shortcuts import render

# Create your views here.
def login(request):
    return render(request, "login.html", {})

def profesor(request):
    return render(request, "profesor.html", {})

def profesor_id(request,id):
    return render(request, "przedmiot.html", {'id': id})