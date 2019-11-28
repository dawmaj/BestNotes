from django.db import models
from django.contrib.auth.models import User


def add_student(username, email=None, password=None, **kwargs):
    new_student = User.objects.create_user(username, email, password)

    if kwargs.get('first_name', 0) != 0 :
        new_student.first_name = kwargs.get('first_name', 0)
    if kwargs.get('last_name', 0) != 0:
        new_student.last_name = kwargs.get('last_name', 0)
    if kwargs.get('bio', 0) != 0:
        new_student.studentprofile.bio = kwargs.get('bio', 0)
    if kwargs.get('birth_date', 0) != 0:
        new_student.studentprofile.birth_date = kwargs.get('birth_date', 0)
    if kwargs.get('location', 0) != 0:
        new_student.studentprofile.location = kwargs.get('location', 0)

    new_student.save()

def delete_student(id):
    s = User.objects.get(id=id)
    s.delete()

"""
id - id of object to be updated
kwargs - new values for object
"""
def update_student(id, **kwargs):
    student = User.objects.get(id=id)
    if kwargs.get('email', 0) != 0 :
        student.email = kwargs.get('email', 0)
    if kwargs.get('first_name', 0) != 0 :
        student.first_name = kwargs.get('first_name', 0)
    if kwargs.get('last_name', 0) != 0:
        student.last_name = kwargs.get('last_name', 0)
    if kwargs.get('bio', 0) != 0:
        student.studentprofile.bio = kwargs.get('bio', 0)
    if kwargs.get('birth_date', 0) != 0:
        student.studentprofile.birth_date = kwargs.get('birth_date', 0)
    if kwargs.get('location', 0) != 0:
        student.studentprofile.location = kwargs.get('location', 0)

    student.save()
