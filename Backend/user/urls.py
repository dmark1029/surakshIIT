from unicodedata import name
from django.urls import path,include
from . import views
from rest_framework import urlpatterns,routers
from django.conf.urls import include


urlpatterns = [
    path('',views.main, name = 'main'),
    path('profile/',views.UserDataView.as_view()),
    path('login/', views.Login.as_view()),
    path('logout/', views.Logout.as_view()),
    path('register/', views.Register.as_view()),
    path('signup/',views.SignUp.as_view())
    #path('signup', views.handleSignup, name = 'signup'),
    #path('login',views.handleLogin, name="login"),
    #path('logout',views.handleLogout, name = "logout"),
    #path('signup', views.signup, name = 'signUp')
]
