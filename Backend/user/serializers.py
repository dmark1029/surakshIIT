from rest_framework import serializers

from .models import CampusJunta

class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CampusJunta
        fields=("name","email","phone","room_no","uid","address","gender","dp")

