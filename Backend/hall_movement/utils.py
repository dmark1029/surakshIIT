from security.models import Security

def IsloggedIN(request):
    try:
        user = Security.objects.get(uid="201055")
        return user
    except:
        return None