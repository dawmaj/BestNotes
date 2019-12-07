from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    #path('/',  views.login),
    path('accounts/', include("django.contrib.auth.urls")),
    path('subject/', views.subject, name="subject"),
    path('subject/<id>', views.subject_id, name="subjectid"),
]
