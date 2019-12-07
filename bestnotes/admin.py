from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import StudentProfile, Subject, Topic, Note

admin.site.register(StudentProfile)
admin.site.register(Subject)
admin.site.register(Topic)
admin.site.register(Note)