from django.urls import path,include
from . import views
from rest_framework import urlpatterns,routers
from django.conf.urls import include


urlpatterns = [
    path('add_lost/',views.AddLostItemView.as_view()),
    path('delete_lost/',views.DeleteLostItemView.as_view())
]