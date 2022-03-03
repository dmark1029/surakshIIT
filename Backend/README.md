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

### Structure of project:

* Surakshit_backend - Just like main() function or src directory which is landing page kinda
* User - Deals with user related things like user profile and contains models of all the users.
* Lost_Found - Deals with lost and found issues and contains models of Lost_Item and Found_Item
* Campus_entry_exit - Deals with campus level movements and contains models of Entry, Exit, Non-Resident Entry, Non-Resident exit
* Hall_entry_exit - Deals with hall movements and contains models of Entry and Exit. 
