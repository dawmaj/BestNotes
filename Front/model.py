from django.db import models

class Zagadnienie(models.Model):
    nazwa = models.CharField(max_length=30)
    przedmiot_id = models.ForeignKey(Przedmiot, on_delete=models.CASCADE)