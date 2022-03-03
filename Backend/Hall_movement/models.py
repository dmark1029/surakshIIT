from django.db import models

# Create your models here.
class Entry(models.Model):
    name1 = models.CharField(max_length = 125)
    roll1 = models.CharField(max_length = 12)
    phone = models.CharField(max_length = 12)
    name2 = models.CharField(max_length = 125)
    roll2 = models.CharField(max_length = 12)
    room = models.CharField(max_length = 10)
    entrytime = models.TimeField(auto_now=False, auto_now_add=False)

