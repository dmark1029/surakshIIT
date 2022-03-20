from hall_movement.models import Entry
from lost_found.models import Lost_item, Found_item
from rest_framework import serializers
from hall_movement.models import Entry
from campus_movement.models import Exit,Non_Resident_Entry
from user.models import CampusJunta



from lost_found.models import Lost_item,Found_item

class LostItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lost_item
        fields=('__all__')

class FoundItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Found_item
        fields=('__all__')


class AddFoundItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Found_item
        fields=("name","item_color","details","where_found","if_returned")

class AddHallEntrySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Entry
        fields=("person1","person2","destination","entrytime","if_exited")

class AddLostItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lost_item
        fields=("name","item_color","details","location","if_found")
        # fields=("name","item_color","details","where_found","if_returned")

class HallEntrySerializer(serializers.ModelSerializer):
    person1= serializers.SlugRelatedField(
        slug_field='name',
        queryset=CampusJunta.objects.all()
        )
    person2= serializers.SlugRelatedField(
        slug_field='name',
        queryset=CampusJunta.objects.all()
        )
    class Meta:
        model = Entry
        fields=('__all__')

class CampusExitSerializer(serializers.ModelSerializer):
    person = serializers.SlugRelatedField(
        slug_field='name',
        queryset=CampusJunta.objects.all()
        )
    class Meta:
        model = Exit
        fields=('person','destination','if_entered','entry_time','exit_time','id')

class NonResidentEntrySerializer(serializers.ModelSerializer):
    concerned_person = serializers.SlugRelatedField(
        slug_field='name',
        queryset=CampusJunta.objects.all()
        )
    class Meta:
        model = Non_Resident_Entry
        fields=('__all__')
