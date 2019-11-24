from django.db import models

#Klasa opisująca zagadnienie dla danego przedmiotu
class Zagadnienie(models.Model):
    nazwa = models.CharField(max_length=30)
    przedmiot = models.ForeignKey(Przedmiot, on_delete=models.CASCADE)
    data_dodania = models.DateField()