
from .models import CampusJunta
from rest_framework.parsers import JSONParser
import bcrypt
import re



def IsloggedIN(request):
    # print(request.session["uid"])
    try:
        user = CampusJunta.objects.get(uid=request.session["uid"])
        return user
    except:
        return None
    # if 'uid' in request.session:
    #     try:
    #        # user = CampusJunta.objects.get(uid=request.session["uid"])
    #         user = CampusJunta.objects.get(uid="201055")
    #         print()

    #         return user
    #     except:
    #         return None
    # else:
    #     print("leafkbsef")
    #     return None

def MAKE_PASSWORD(password):
    password = password.encode()
    hash = bcrypt.hashpw(password, bcrypt.gensalt())
    return hash.decode()


def CHECK_PASSWORD(password, hash):
    return bcrypt.checkpw(password.encode(), hash.encode())
