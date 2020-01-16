from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    #path('/',  views.login),
    path('accounts/', include("django.contrib.auth.urls")),
    path('subject/', views.subjects_all, name="subject"),
    path('subject/<id>', views.subject_id, name="subjectid"),
    path('note/<id>', views.note_id, name="note"),
    path('notes_by_topic/<topic_id>', views.notes_by_topic_id, name="notes"),
    path('topics_by_subject_id/<subject_id>', views.topics_by_subject_id, name="topics"),
    path('addnote/', views.add, name="add"),
    path('notes/', views.notes_all, name="notes"),
    path('notes/<subject_id>', views.notes_name, name="notes_id"),
    path('create/', views.create_note, name="create_note"),
    path('delete_note/<note_id>', views.delete_note, name="delete_note"),
    path('update_note/<note_id>', views.update_note, name="update_note"),
    path('update_note_id/<note_id>', views.update_note_id, name="update_note_id")
]
