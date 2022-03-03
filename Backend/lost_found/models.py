from django.db import models

from user.models import Residents,Security

color_Choices= (
    ("1","Black"),
    ("2","Red"),
    ("3","Blue"),
    ("4","Green"),
    ("5","White"),
    
)

class Lost_item(models.Model):
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(Residents,on_delete=models.CASCADE)
    item_color= models.CharField(max_length=50,choices=color_Choices)
    details = models.CharField(max_length=2000)
    last_seen = models.CharField(max_length=100)
    image= models.ImageField()
    lost_time = models.DateTimeField("losttime")
    if_found = models.BooleanField(default=False,editable=True)

class Found_item(models.Model):
    name = models.CharField(max_length=100)
    who_found = models.ForeignKey(Residents,on_delete=models.CASCADE)
    item_color= models.CharField(max_length=50,choices=color_Choices)
    details = models.CharField(max_length=2000)
    where_found = models.CharField(max_length=100)
    image= models.ImageField()
    found_time = models.DateTimeField("losttime")
    if_returned = models.BooleanField(default=False,editable=True)

# Create your models here.
