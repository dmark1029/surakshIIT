
from django.contrib import admin

# Register your models here.
from .models import Entry,Exit,Non_Resident_Entry,Non_Resident_Exit

admin.site.register(Entry)
admin.site.register(Exit)
admin.site.register(Non_Resident_Entry)
admin.site.register(Non_Resident_Exit)