from django.db import models

class Security(models.Model):
    name= models.CharField(max_length=100)
    uid = models.CharField(max_length=100)
    email = models.EmailField(max_length=256)
    phone = models.CharField(max_length=15)
    dp = models.ImageField(upload_to='pic', blank=True)

class Residents(models.Model):
    name= models.CharField(max_length=100)
    uid = models.CharField(max_length=100)
    email = models.EmailField(max_length=256)
    phone = models.CharField(max_length=15)
    room_no = models.CharField(max_length=256)
    address = models.CharField(max_length=256)
    gender = models.CharField(max_length=20)
    role = models.CharField(max_length=256)
    dp = models.ImageField(upload_to='pic', blank=True)


# Create your models here.
