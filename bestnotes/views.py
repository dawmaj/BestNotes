from django.shortcuts import render
from bestnotes.models import Note
# Create your views here.

from django.http import HttpResponse

def homepage(request):
    #return HttpResponse("BestNotes' index will be here.")
    return render(request, "homepage.html", {})


def subject(request):
    return render(request, "subjects.html", {})

def subject_id(request,id):
    return render(request, "subject.html", {'id': id})

def note_id(request,id):
    all_notes = Note.objects.all()
    notes = all_notes.filter(id=id)
    if len(notes) > 0:
        single_note = Note.objects.get(pk=id)  # Get note with given id
        context = {
            'note': single_note
        }
        return render(request, "note.html", context)
    else:
        return HttpResponse("Note not found.")


#Give all notes connected with subject name and pass it to html
def notes_name(request,subject_id):
    all_notes = Note.objects.all()
    subject_notes = all_notes.filter(topic__subject__id=subject_id) #Get all notes with subject name
    context = {
        'notes' : subject_notes
    }
    #Change website here
    return render(request, "notes.html", context)

def notes_all(request):
    all_notes = Note.objects.all()
    context = {
        'notes' : all_notes
    }
    return render(request, "test.html", context)