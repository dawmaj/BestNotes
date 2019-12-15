from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    #path('/',  views.login),
    path('accounts/', include("django.contrib.auth.urls")),
    path('subject/', views.subject, name="subject"),
    path('subject/<id>', views.subject_id, name="subjectid"),
    path('note/<id>', views.note_id, name="note"),
    path('notes_by_topic/<topic_id>', views.notes_by_topic_id, name="notes"),
    path('topics_by_subject_id/<subject_id>', views.topics_by_subject_id, name="topics"),

    path('notes/', views.notes_all, name="notes"),
    path('notes/<subject_id>', views.notes_name, name="notes_id")
]
