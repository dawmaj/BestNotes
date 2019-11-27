from django.db import models

class Przedmiot(models.Model):
    nazwa = models.CharField(max_length=30)
    #uzytkownik_id = models.ForeignKey(User, on_delete=models.CASCADE)