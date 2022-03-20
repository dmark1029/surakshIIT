# from django import http
from http.client import HTTPResponse
from django.http.response import HttpResponse
# from django.shortcuts import render
# from datetime import datetime
# from lost_lost.models import Lost_item
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status

# class AddLostItemView(APIView):
#     def post(self, request):
#         if request.method == "POST":
#             name = request.data["name"]
#             print(name)
#             #owner = request.data["owner"]
#             item_color= request.data["item_color"]
#             details = request.data["details"]
#             last_seen = request.data["last_seen"]
#             image= request.data["image"]
#             lost_time = request.data["lost_time"]
#             lost_item = Lost_item(name=name,item_color=item_color,details=details,last_seen=last_seen,image=image,lost_time=lost_time,if_lost=False)
#             lost_item.save()
#             return Response(status=status.HTTP_201_CREATED)
#         else:
#             return Response(status=status.HTTP_404_BAD_REQUEST)

# Create your views here.
# import uuid
# from django.db import models
  

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django import http
from rest_framework import status
from lost_found.models import Lost_item
from user.utils import IsloggedIN
from user.models import CampusJunta

# Create your views here.
class AddLostItemView(APIView):
    def post(self,request):
        user = IsloggedIN(request)
        if(user):
            try:
        
                lost_item= Lost_item(
                name = request.data["name"],
                details=request.data["details"],
                last_seen = request.data["last_seen"],
                image= request.data["image"],
                lost_time = request.data["lost_time"],
                item_color = request.data["item_color"],
                owner = CampusJunta.objects.get(uid=request.data["owner"]),
                if_found= False

                )
                lost_item.save()
                return Response(status=status.HTTP_201_CREATED)
            except:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
             return Response(status=status.HTTP_401_UNAUTHORIZED)

class DeleteLostItemView(APIView):
    def delete(self,request):
        user = IsloggedIN(request)
        if(user):
            try:

                found = Lost_item.objects.get(id=request.data["id"])
                found.delete()
                return Response(status=status.HTTP_200_OK)
            except:   
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
