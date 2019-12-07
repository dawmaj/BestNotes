from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

def homepage(request):
    #return HttpResponse("BestNotes' index will be here.")
    return render(request, "homepage.html", {})


def subject(request):
    return render(request, "subjects.html", {})

def subject_id(request,id):
    return render(request, "subject.html", {'id': id})