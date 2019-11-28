from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('accounts/', include("django.contrib.auth.urls")),
    path('subject/', views.subject, name="subject"),
    path('subject/<id>', views.subject_id, name="subjectid"),
]