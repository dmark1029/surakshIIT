from django.db import models

gender_choices=(
    ("1","Male"),
    ("2","Female"),
    ("3","Others")
)


class CampusJunta(models.Model):
    name= models.CharField(max_length=100,null=True)
    uid = models.CharField(max_length=100)
    email = models.EmailField(max_length=256)
    phone = models.CharField(max_length=15)
    room_no = models.CharField(max_length=256)
    address = models.CharField(max_length=256)
    gender = models.CharField(max_length=20,choices=gender_choices)
    password = models.CharField(max_length=100)
    dp = models.ImageField(upload_to = "media/",blank=True)

    def __str__(self):
        return self.uid
# Create your models here.