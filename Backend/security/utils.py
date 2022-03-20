from .models import Security

def IsloggedIN(request):
    try:
        user = Security.objects.get(uid="201055")
        # print("xyz")
        return user
    except:
        return None
    # if 'uid' in request.session:
    #     try:
    #        # user = User.objects.get(uid=request.session["uid"])
    #         user = User.objects.get(uid="201055")
    #         print()

    #         return user
    #     except:
    #         return None
    # else:
    #     print("leafkbsef")
    #     return None