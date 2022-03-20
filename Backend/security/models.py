from django.db import models


class Security(models.Model):
    uid = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

# Create your models here.
