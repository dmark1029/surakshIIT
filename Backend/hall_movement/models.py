from random import choices
from secrets import choice
import uuid
from django.db import models

from user.models import CampusJunta

hall_choices = (
    ("1","Hall1"),
    ("2","Hall2"),
    ("3","Hall3"),
    ("4","Hall4"),
    ("5","Hall5"),
    ("6","Hall6"),
    ("7","Hall7"),
    ("8","Hall8"),
    ("9","Hall9"),
    ("10","Hall10"),
    ("11","Hall11"),
    ("12","Hall12"),
    ("13","Hall13"),
    ("14","GH1")



)


class Entry(models.Model):
    person1 = models.ForeignKey(CampusJunta,on_delete=models.CASCADE,related_name='person1', null=True)
    person2 = models.ForeignKey(CampusJunta,on_delete=models.CASCADE,related_name='person2', null=True)
    destination = models.CharField(default='',max_length= 80)
    hall = models.CharField(max_length = 20, default="1", choices= hall_choices )
    entry_time = models.DateTimeField("Entry_time", null=True)
    exit_time = models.DateTimeField("Exit_time",blank=True,null=True,editable=True)
    id= models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    if_exited = models.BooleanField(default= False,editable=True)
   
