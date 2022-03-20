from datetime import datetime
from urllib import response
from django.shortcuts import render
from http.client import HTTPResponse
from django import http
from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import security
from .serializers import CampusExitSerializer, HallEntrySerializer, LostItemSerializer,AddFoundItemSerializer,FoundItemSerializer, NonResidentEntrySerializer
from lost_found.models import Lost_item,Found_item
from hall_movement.models import Entry
from campus_movement.models import Exit, Non_Resident_Entry
from user.models import CampusJunta
from .utils import *
from rest_framework.fields import UUIDField

# Create your views here.

class LostitemView(APIView):
    def get(self, request):
        security = IsloggedIN(request)
        if security:
            items = Lost_item.objects.all()
            serializer = LostItemSerializer(items, many=True)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response(status= status.HTTP_401_UNAUTHORIZED)


class AddLostItemView(APIView):
    def post(self,request):
        security = IsloggedIN(request)
        if security:
            try:
        
                lost_item= Lost_item(
                name = request.data["name"],
                details=request.data["details"],
                last_seen = request.data["last_seen"],
                image= request.data["image"],
                lost_time = datetime.now(),
                item_color = request.data["item_color"],
                owner = CampusJunta.objects.get(uid=request.data["owner"]),
                if_found= False

                )
                lost_item.save()
                return Response(status=status.HTTP_201_CREATED)
            except:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status= status.HTTP_401_UNAUTHORIZED) 

class FounditemView(APIView):
    def get(self, request):
        security = IsloggedIN(request)
        if security:
            items = Found_item.objects.all()
            serializer = FoundItemSerializer(items, many=True)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response(status= status.HTTP_401_UNAUTHORIZED)

    
class AddFoundItemView(APIView):
    def post(self,request,*args,**kwargs):
        
        security = IsloggedIN(request)

        if security:
            serializer = AddFoundItemSerializer
            serializer_data = serializer(data=request.data)
            if serializer_data.is_valid():
                found_item= Found_item(
                name = request.data["name"],
                details=request.data["details"],
                item_color = request.data["item_color"],
                where_found=request.data["where_found"],
                if_returned= False,
                who_found= CampusJunta.objects.get(uid=request.data["who_found"]),
                found_time = datetime.now(),
                image = request.data["image"],
                )
                found_item.save()
                return Response(status=status.HTTP_201_CREATED)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status= status.HTTP_401_UNAUTHORIZED)


class DeleteLostItemView(APIView):
    def delete(self,request):
        security = IsloggedIN(request)
        print(request.data)
        if(security):
            try:

                found = Lost_item.objects.get(id=request.data["id"])
                found.delete()
                return Response(status=status.HTTP_200_OK)
            except:   
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)



class DeleteFoundItemView(APIView):
    def delete(self,request):
        security = IsloggedIN(request)
        if(security):
            try:
                returned = Found_item.objects.get(id=request.data["id"])
                returned.delete()
                return Response(status=status.HTTP_200_OK)
            except:   
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


class AddHallEntryView(APIView):
    def post(self,request):
        security = IsloggedIN(request)
        if(security):
            try:
                entry = Entry(
                    person1 = CampusJunta.objects.get(uid=request.data["person1"]),
                    person2 = CampusJunta.objects.get(uid=request.data["person2"]),
                    destination = request.data["destination"],
                    entry_time = datetime.now(),
                    hall = request.data["hall"],
                    if_exited = False
                )
                entry.save()
                return Response(status=status.HTTP_201_CREATED)
            except:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


class AddHallExitView(APIView):
    def put(self,request):
        security = IsloggedIN(request)
        if(security):
            try:

                data = Entry.objects.get(id=request.data["id"])
                data.exit_time = datetime.now()
                data.if_exited = True
                data.save(update_fields=['exit_time','if_exited'])
                return Response(status=status.HTTP_200_OK)
            except:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


class GetHallEntriesView(APIView):
    def get(self, request):
        security = IsloggedIN(request)
        if security:
            hall_entries = Entry.objects.filter(if_exited= False)
            serializer = HallEntrySerializer(hall_entries, many=True)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response(status= status.HTTP_401_UNAUTHORIZED)

class GetAllHallEntriesView(APIView):
    def get(self, request):
        security = IsloggedIN(request)
        if security:
            hall_entries = Entry.objects.all()
            serializer = HallEntrySerializer(hall_entries, many=True)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response(status= status.HTTP_401_UNAUTHORIZED)
    
class AddCampusExitView(APIView):
    def post(self,request):
        security= IsloggedIN(request)
        if(security):
            try:
                exit = Exit(
                    person = CampusJunta.objects.get(uid=request.data["person"]),
                    if_entered = False,
                    destination = request.data["destination"],
                    exit_time= datetime.now(),

                )
                exit.save()
                return Response(status=status.HTTP_201_CREATED)
            except:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status= status.HTTP_401_UNAUTHORIZED)


class AddCampusEntryView(APIView):
    def put(self,request):
        security= IsloggedIN(request)
        if(security):
            try:
                data = Exit.objects.get(id=request.data["id"])
                data.entry_time = datetime.now()
                data.if_entered = True
                data.save(update_fields=['entry_time','if_entered'])
                return Response(status=status.HTTP_200_OK)
            except:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status= status.HTTP_401_UNAUTHORIZED)


class GetCampusExitsView(APIView):
    def get(self, request):
        security = IsloggedIN(request)
        if security:
            campus_exits = Exit.objects.filter(if_entered= False)
            serializer = CampusExitSerializer(campus_exits, many=True)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response(status= status.HTTP_404_NOT_FOUND)

class GetAllCampusExitsView(APIView):
    def get(self, request):
        security = IsloggedIN(request)
        if security:
            campus_exits = Exit.objects.all()
            serializer = CampusExitSerializer(campus_exits, many=True)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response(status= status.HTTP_404_NOT_FOUND)
    
class GetNonResidentsCampusEntriesView(APIView):
    def get(self, request):
        security = IsloggedIN(request)
        if security:
            non_residents_campus_entries = Non_Resident_Entry.objects.filter(if_exited= False)
            serializer = NonResidentEntrySerializer(non_residents_campus_entries, many=True)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response(status= status.HTTP_404_NOT_FOUND)

class GetallNonResidentsCampusEntriesView(APIView):
    def get(self, request):
        security = IsloggedIN(request)
        if security:
            non_residents_campus_entries = Non_Resident_Entry.objects.all()
            serializer = NonResidentEntrySerializer(non_residents_campus_entries, many=True)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response(status= status.HTTP_404_NOT_FOUND)


    
                
class AddNonResidentCampusEntryView(APIView):
    def post(self,request):
        security= IsloggedIN(request)
        if(security):
            try:
                entry = Non_Resident_Entry(
                   name = request.data["name"],
                   vehicle = request.data["vehicle"],
                   vehicle_number = request.data["vehicle_number"],
                   concerned_person = CampusJunta.objects.get(uid= request.data["concerned_person"]),
                   reason= request.data["reason"],
                   entry_time = datetime.now(),
                   if_exited = False,
                   id_document = request.data["id_document"],
                   id_number= request.data["id_number"]

                )
                entry.save()
                return Response(status=status.HTTP_201_CREATED)
            except:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status= status.HTTP_401_UNAUTHORIZED)  

class AddNonResidentCampusExitView(APIView):
    def put(self,request):
        security= IsloggedIN(request)
        if(security):
            try:
                data = Non_Resident_Entry.objects.get(id=request.data["id"])
                data.exit_time = datetime.now()
                data.if_exited = True
                data.save(update_fields=['exit_time','if_exited'])
                return Response(status=status.HTTP_200_OK)
            except:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status= status.HTTP_401_UNAUTHORIZED)



