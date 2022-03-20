from django.db import models
# from sqlalchemy import null

import uuid

from user.models import CampusJunta

color_Choices= (
    ("1","Black"),
    ("2","Red"),
    ("3","Blue"),
    ("4","Green"),
    ("5","White"),
    
)

class Lost_item(models.Model):
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(CampusJunta,on_delete=models.CASCADE,null=True)
    item_color= models.CharField(max_length=50)
    details = models.CharField(max_length=2000)
    last_seen = models.CharField(max_length=100)
    image= models.ImageField(null=True)
    lost_time = models.DateTimeField("losttime",null=True)
    if_found = models.BooleanField(default=False,editable=True)
    id = models.UUIDField(
         primary_key = True,
         default = uuid.uuid4,
         editable = False)

class Found_item(models.Model):
    name = models.CharField(max_length=100)
    who_found = models.ForeignKey(CampusJunta,on_delete=models.CASCADE,null=True)
    item_color= models.CharField(max_length=50)
    details = models.CharField(max_length=2000)
    where_found = models.CharField(max_length=100)
    image= models.ImageField(upload_to='found_item_images/',null=True)
    found_time = models.DateTimeField("found_time",null=True)
    if_returned = models.BooleanField(default=False,editable=True)
    id = models.UUIDField(
         primary_key = True,
         default = uuid.uuid4,
         editable = False)
 