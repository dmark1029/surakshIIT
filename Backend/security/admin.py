from http.client import ImproperConnectionState
from telnetlib import SE
from django.contrib import admin

from .models import Security

admin.site.register(Security)

# Register your models here.
