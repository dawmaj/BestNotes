from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

def index(request):
    return HttpResponse("BestNotes' index will be here.")

def login(request):
    return render(request, "login.html", {})

def subject(request):
    return render(request, "subjects.html", {})

def subject_id(request,id):
    return render(request, "subject.html", {'id': id})