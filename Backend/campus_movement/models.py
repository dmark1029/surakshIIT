import uuid
from django.db import models

from user.models import CampusJunta

   
class Exit(models.Model):
    person = models.ForeignKey(CampusJunta,on_delete=models.CASCADE)
    exit_time = models.DateTimeField("Exit_time")
    entry_time = models.DateTimeField("Entry_time",null=True,blank=True,editable=True)
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
    concerned_person = models.ForeignKey(CampusJunta,on_delete=models.CASCADE)
    reason = models.CharField(max_length=1000)
    entry_time = models.DateTimeField("Entry_time")
    exit_time = models.DateTimeField("Exit_time",null=True,blank=True,editable=True)
    if_exited = models.BooleanField(default=False,editable=True)
    id_document = models.CharField(max_length=50,choices=ID_paper_choices,default=2)
    id_number = models.CharField(max_length=100)
    id= models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)


    

