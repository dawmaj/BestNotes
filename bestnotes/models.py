from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    #Custom filds extending default user table:
    bio = models.TextField(max_length=500, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    #student_name = models.TextField(max_length=50, blank=True) #User table has first_name fild
    #student_surname = models.TextField(max_length=50, blank=True) #User table has last_name field
    location = models.CharField(max_length=100, blank=True)#can contain info about country, city, school etc.
    """
    to add as foreign key, when coresponding table is added:
    CourseId
    """


class Subject(models.Model):
    name = models.CharField(max_length=30)
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)

class Topic(models.Model):
    name = models.CharField(max_length=30)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    add_date = models.DateField()





@receiver(post_save, sender=User)
def create_studentprofile(sender, instance, created, **kwargs):
    if created:
        StudentProfile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_studentprofile(sender, instance, **kwargs):
    instance.studentprofile.save()