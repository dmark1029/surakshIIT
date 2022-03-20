from django.urls import path,include
from . import views
from rest_framework import urlpatterns,routers
from django.conf.urls import include


urlpatterns = [
    path('lost_item/',views.LostitemView.as_view()),
    path('found_item/',views.FounditemView.as_view()),
    path('add_lost/',views.AddLostItemView.as_view()),
    path('add_found/',views.AddFoundItemView.as_view()),
    path('delete_found/',views.DeleteFoundItemView.as_view()),
    path('delete_lost/',views.DeleteLostItemView.as_view()),
    path('add_hallentry/',views.AddHallEntryView.as_view()),
    path('hall_entries/',views.GetHallEntriesView.as_view()),
    path('all_hall_entries/',views.GetAllHallEntriesView.as_view()),
    path('add_hallexit/',views.AddHallExitView.as_view()),
    path('add_campusentry/',views.AddCampusEntryView.as_view()),
    path('campus_exits/',views.GetCampusExitsView.as_view()),
    path('all_campus_exits/',views.GetAllCampusExitsView.as_view()),
    path('add_campusexit/',views.AddCampusExitView.as_view()),
    path('add_nonresident_campusentry/',views.AddNonResidentCampusEntryView.as_view()),
    path('add_nonresident_campusexit/',views.AddNonResidentCampusExitView.as_view()),
    path('nonresident_campusentries/',views.GetNonResidentsCampusEntriesView.as_view()),
    path('all_nonresident_campusentries/',views.GetallNonResidentsCampusEntriesView.as_view())
    

    # path('founditem/',views.FounditemView.as_view())
]