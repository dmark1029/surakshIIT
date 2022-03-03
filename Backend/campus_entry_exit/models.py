
import uuid
from django.db import models

from user.models import Security,Residents

class Entry(models.Model):
    person = models.ForeignKey(Residents,on_delete=models.CASCADE)
    entry_time = models.DateTimeField("Entry_time")
    id= models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
   
class Exit(models.Model):
    person = models.ForeignKey(Residents,on_delete=models.CASCADE)
    exit_time = models.DateTimeField("Exit_time")
    if_entered = models.BooleanField(default= False,editable=True)
    id= models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    destination = models.CharField(max_length= 80)

ID_paper_choices= (
    ("1", "Aadhar Card"),
    ("2", "Driving license"),
    ("3", "Passport"),
    ("4", "Voter Card"),
    ("5", "Other")
    
)

class Non_Resident_Entry(models.Model) :
    name = models.CharField(max_length=100)
    vehicle = models.CharField(max_length=100)
    vehicle_number = models.CharField(max_length=100)
    concerned_person = models.ForeignKey(Residents,on_delete=models.CASCADE)
    reason = models.CharField(max_length=1000)
    entry_time = models.DateTimeField("Entry_time")
    if_exited = models.BooleanField(default=False,editable=True)
    id_document = models.CharField(max_length=50,choices=ID_paper_choices,default=2)
    id_detail = models.CharField(max_length=100)
    id= models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)

class Non_Resident_Exit(models.Model) :
    name = models.CharField(max_length=100)
    data = models.ForeignKey(Non_Resident_Entry,on_delete=models.CASCADE)
    exit_time = models.DateTimeField("Exit_time")
    id= models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    




# Create your models here.
