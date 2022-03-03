import uuid
from django.db import models

from user.models import Security,Residents

class Entry(models.Model):
    person1 = models.ForeignKey(Residents,on_delete=models.CASCADE,related_name='person1', null=True)
    person2 = models.ForeignKey(Residents,on_delete=models.CASCADE,related_name='person2', null=True)
    destination = models.CharField(default='',max_length= 80)
    entry_time = models.DateTimeField("Entry_time", null=True)
    id= models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
   
class Exit(models.Model):
    person = models.ForeignKey(Residents,on_delete=models.CASCADE,related_name='person')
    exit_time = models.DateTimeField("Exit_time", null=True)
    if_exited = models.BooleanField(default= False,editable=True)
    id= models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    
# Create your models here.
