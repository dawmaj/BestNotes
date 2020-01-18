from django.shortcuts import render
from bestnotes.models import Note, Topic, Subject, StudentProfile
from datetime import date
from .forms import EditorForm
from django.urls import reverse
from django.http import HttpResponse
from django.http import HttpResponseRedirect

def homepage(request):
    #return HttpResponse("BestNotes' index will be here.")
    return render(request, "homepage.html", {})

def add(request):
    form = EditorForm()
    return render(request, "add.html", {"form": form})


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
        subject_name = topics_under_subject[0].subject.name  # Get note with given id

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
        'student_subjects': set(student_subjects)
    }
    return render(request, "subjects.html", context)

def create_note(request):
    form = EditorForm(request.POST)
    if request.method == 'POST':
        #Get actual user as Student
        student = StudentProfile.objects.get(user=request.user.id)

        #Check if subject exist, if not create it
        subject = Subject()
        if Subject.objects.filter(name=form.data['subject']):
            subject = Subject.objects.filter(name=form.data['subject'])[0]
        else:
            subject = Subject(name=form.data['subject'], student=student)
            subject.save()
        #Now topic, in addition check if exist in subject
        topic = Topic()
        if Topic.objects.filter(name=form.data['topic'], subject=subject):
            topic = Topic.objects.filter(name=form.data['topic'], subject=subject)[0]
        else:
            topic = Topic(name=form.data['topic'], 
            subject=subject,
            add_date=date.today())
            topic.save()
            
        #Create note
        note = Note(name=form.data['name'],
        content=form.data['content'],
        text="Empty", 
        topic=topic, 
        user=student, 
        add_date=date.today())
        note.save()
    url = reverse('subject')
    return HttpResponseRedirect(url)

def delete_note(request, note_id):
    #Get values
    note = Note.objects.get(pk=note_id)
    student = StudentProfile.objects.get(user=request.user.id)
    #Check if student has possibility do delete this note
    if note.user.id == student.id:
        note.delete()
    delete_empty_categories()
    #Redirect
    url = reverse('subject')
    return HttpResponseRedirect(url)



#Update note view html
def update_note(request, note_id):
    
    note = Note.objects.get(pk=note_id)
    form = EditorForm(initial={'content': note.content,
    'subject':note.topic.subject.name,
    'topic':note.topic.name,
    'name':note.name})
    
    context = {
        'note':note,
        'form':form
    }
    return render(request, "update.html", context)

def update_note_id(request, note_id):
    note = Note.objects.get(pk=note_id)
    form = EditorForm(request.POST)
    student = StudentProfile.objects.get(user=request.user.id)

    if request.method == 'POST':
        subject = Subject()
        if Subject.objects.filter(name=form.data['subject']):
            subject = Subject.objects.filter(name=form.data['subject'])[0]
        else:
            subject = Subject(name=form.data['subject'], student=student)
            subject.save()
        #Now topic, in addition check if exist in subject
        topic = Topic()
        if Topic.objects.filter(name=form.data['topic'], subject=subject):
            topic = Topic.objects.filter(name=form.data['topic'], subject=subject)[0]
        else:
            topic = Topic(name=form.data['topic'], 
            subject=subject,
            add_date=date.today())
            topic.save()
            
        #Update note
        note.content = form.data['content']
        note.name = form.data['name']
        note.topic = topic
        note.save(force_update=True)

    delete_empty_categories()
    url = reverse('note', args=[note_id])
    return HttpResponseRedirect(url)

def delete_empty_categories():
    #Get all topics
    topics = Topic.objects.all()
    for topic in topics:
        if not topic.note_set.all().exists():
            topic.delete()
    #Same for subjects
    subjects = Subject.objects.all()
    for subject in subjects:
        if not subject.topic_set.all().exists():
            subject.delete()