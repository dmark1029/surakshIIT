from http.client import HTTPResponse
""" from msilib.schema import Class """
from unicodedata import name
from django.shortcuts import redirect, render, reverse
from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .utils import *
from user.serializers import UserDataSerializer
from django import http
from rest_framework import status
from django.contrib.auth.models import User
from user.models import CampusJunta
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout


class UserDataView(APIView):
    def get(self,request):
        try:
            user= IsloggedIN(request)
            if user:
                userdata= UserDataSerializer(user)
                return Response(userdata.data,status=status.HTTP_200_OK)
            else:
                return Response(status= status.HTTP_404_NOT_FOUND)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


def main(request):
    return render(request, "main.html")

class SignUp(APIView):
    def post(self, request, *args, **kwargs):
        try:
            uid = request.data.get("uid", "")
            password = request.data.get("password","")
            myuser = User.objects.create_user(username = uid, password=password)
            myuser.first_name = "fname"
            myuser.last_name = "lname"
            myuser.save()
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

# Create your views here.
class Register(APIView):
    def post(self,request,*args, **kwargs):
        try:
            name = request.data.get("name","")
            uid = request.data.get("uid","")
            email = request.data.get("email","")
            phone = request.data.get("phone","")
            room_no = request.data.get("room_no","")
            address = request.data.get("address","")
            gender = request.data.get("gender","")
            password = request.data.get("password","")
            re_password = request.data.get("re_password","")
            dp = request.data.get("dp","")
            register = CampusJunta(name=name,uid=uid,email=email,phone=phone,room_no=room_no,address=address,gender=gender,password=password,dp=dp)
            register.save()
            if password == re_password:
                myuser = User.objects.create_user(username = name,email = email, password=password)
                myuser.save()
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

""" def register(request):
    if request.method == "POST":
        try:
            name = request.POST.get('name')
            uid = request.POST.get('uid')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            room_no = request.POST.get('room_no')
            address = request.POST.get('address')
            gender = request.POST.get('gender')
            password = request.POST.get('password')
            re_password = request.POST.get('re_password')
            dp = request.POST.get('dp')
            register = CampusJunta(name=name,uid=uid,email=email,phone=phone,room_no=room_no,address=address,gender=gender,password=password,dp=dp)
            register.save()
            if password == re_password:
                myuser = User.objects.create_user(username = name,email = email, password=password)
                myuser.save()
            else:
                messages.success(request, "Password did not match Please try again")
            messages.success(request, 'You are successfully Registered!')
            return redirect('login')
        except:
            messages.success(request, "Password did not match Please try again")
    return render(request,'register.html')
 """

""" def handleSignup(request):
    if request.method == "POST":
        signupusername = request.POST['signupusername']
        signupemail = request.POST['signupemail']
        signuppassword = request.POST['signuppassword']

        myuser = User.objects.create_user(username = signupusername,email = signupemail, password=signuppassword)
        myuser.save()

        messages.success(request, "Successfully created")
        return redirect('login')
    return render(request,'signup.html')
 """


class Login(APIView):
    def post(self, request, *args, **kwargs):
        user = IsloggedIN(request)
        if user:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        uid = request.data.get("uid","")
        password = request.data.get("password","")
        try:
            user = CampusJunta.objects.get(uid = uid)
            if user is not None:
                if password == user.password:
                #if CHECK_PASSWORD(password, user.password) :
                    request.session["uid"] = uid
                    request.session.modified = True
                    return Response(status=status.HTTP_200_OK)
                else:
                    return Response(status=status.HTTP_401_UNAUTHORIZED)

        except:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


""" def handleLogin(request):
    if request.method == 'POST':
        loginusername = request.POST['loginusername']
        loginpassword = request.POST['loginpassword']
        
        myuser = authenticate(username= loginusername, password =loginpassword)
        if myuser is not None:
            login(request, myuser)
            messages.success(request, "Successfully Logged In")
            return redirect('register')
        else:
            messages.success(request, "Invalid Credentials Please try again")
            return redirect('login')
    return render(request,'login.html')
 """




""" def handleLogout(request):
    if request.method == "POST":
        logout(request)
        messages.success(request,"Successfully Loged Out")
        return redirect('login')
    else:
        logout(request)
        messages.success(request,"Successfully Loged Out")
        return redirect('login')
    return redirect(request,'login')
  """   
class Logout(APIView):
    def post(self, request):
        if IsloggedIN(request) is not None:
            del request.session["uid"]
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_401_UNAUTHORIZED)

    
    
