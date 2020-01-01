from django.shortcuts import render
from bestnotes.models import Note, Topic, Subject
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


def notes_by_topic_id(request,topic_id):
    all_notes = Note.objects.all()
    topic_notes = all_notes.filter(topic__id=topic_id) #Get all notes with given topic id
    context = {
        'notes' : topic_notes
    }
    #Change website here
    return render(request, "notes.html", context)

def topics_by_subject_id(request,subject_id):
    all_topics = Topic.objects.all()
    topics_under_subject = all_topics.filter(subject__id=subject_id) #get topics under given subject

    if len(topics_under_subject) > 0:
        subject_name = all_topics[0].subject.name  # Get note with given id

        context = {
            'subject_name': subject_name,
            'topics': topics_under_subject
        }
        return render(request, "topics.html", context)
    else:
        return HttpResponse("Topics not found.")


def notes_all(request):
    all_notes = Note.objects.all()
    context = {
        'notes' : all_notes
    }
    return render(request, "test.html", context)

def subjects_all(request):
    all_subjects = Subject.objects.all()
    student_notes = Note.objects.all().filter(user__user__id=request.user.id)
    student_subjects = []
    for note in student_notes:
        student_subjects.append(note.topic.subject)
    context = {
        'subjects' : all_subjects,
        'student_subjects': student_subjects
    }
    return render(request, "subjects.html", context)