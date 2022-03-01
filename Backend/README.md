### Instructions to run Backend
* Install Django <br>
```pip3 install django djangorestframework django-cors-headers```
* Project Name = **surakshIIT_backend**
* App name = **main_app**
* Then cd into directory that contains **manage.py**. that’s where you will run all of your main commands (runserver, migrate, etc)
* Run these commands <br>
```python3 manage.py migrate``` <br>
```python3 manage.py runserver```
* **Superuser** 
  * Add '/admin' to url in browser. eg.  ```http://127.0.0.1:8000/admin```
  * username = surakshIIT_superuser
  * Password = surakshIIT123
