from django.db import models

class Security(models.Model):
    name= models.CharField(max_length=100)
    uid = models.CharField(max_length=100)

class Residents(models.Model):
    name= models.CharField(max_length=100)
    uid = models.CharField(max_length=100)


# Create your models here.
