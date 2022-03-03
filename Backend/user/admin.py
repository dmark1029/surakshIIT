from django.contrib import admin

# Register your models here.
from .models import Residents,Security

admin.site.register(Residents)
admin.site.register(Security)
