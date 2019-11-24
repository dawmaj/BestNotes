from django.urls import path, include
from . import views

urlpatterns = [

    path('/',  views.login),
    path('accounts/', include("django.contrib.auth.urls")),
    path('profesor/', views.profesor, name="profesor"),
    path('profesor/<id>', views.profesor_id),
]
