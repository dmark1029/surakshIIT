# surakshIIT_backend

## API Endpoints

### Register
```
URL: /register

Method :  POST 

Data : {  
             name ,
             uid,
             email ,
             phone,             
             room_no ,            
             address,           
             gender,           
             password,       
             re_password,   
             dp
        } 
             
              

Status : {
             If successfull : 200_OK 
             Else : 400_Bad Request(Already Registered / some required data is missing)
         }
           
```
### Login
```
URL: /login

Method :  POST 

Data : {  
           uid,
           password
       } 
             
              

Status : {
            If successfull : 200 OK 
            Else : {
                     400_Bad Request(Already Loggedin)
                     401_Unauthorized(Wrong Password/ Not registered)
                   }
         }
           
```
### Logout
```
URL: /logout

Method :  POST 

Data : {  
           uid
       } 
             
Status : {
            If successfull : 200_OK 
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                   }
         }
           
```
### Profile
```
URL: /profile

Method :  GET

Response : USER DATA
             
Status : {
            If successfull : 200_OK 
            Else : 
                   {
                     404_NOT_Found
                     400_Bad_Request
                   }
         }
           
```
### Report Lost Query 
```
URL: /lost_found/add_lost
     /security/add_lost

Method :  POST 

Data : {  
           name ,
           details,
           last_seen ,
           image,
           lost_time,
           item_color ,
           owner
       } 
             
Status : {
            If successfull : 201_Created 
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                     400_BAd Request(Missing required data or other error)
                   }
         }
           
```
### View Lost Items
```
URL: /security/lost_item

Method :  GET

Response : Lost items Data
             
Status : {
            If successfull : 200_OK 
            Else : 
                   {
                     401_Unauthorized(If it is not security)
                   }
         }
           
```
### View Found Items
```
URL: /security/found_item
Method :  GET

Response : Found items Data
             
Status : {
            If successfull : 200_OK 
            Else : 
                   {
                     401_Unauthorized(If it is not security)
                   }
         }
           
```
### Report Found query
```
URL: /security/add_found
     

Method :  POST 

Data : {  
           name ,
           details,
           item_color,
           where_found,
           if_returned,
           who_found,
           found_time,
           image
       } 
             
Status : {
            If successfull : 201_Created 
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                     400_BAd Request(Missing required data or other error)
                   }
         }
           
```
### Delete Lost Query 
```
URL: /lost_found/delete_lost
     /security/delete_lost

Method :  DELETE

Response : Lost item Deleted
             
Status : {
            If successfull : 200_OK 
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                     400_BAd Request(Lost Item not present in Database)
                   }
         }
           
```
### Delete Found Query 
```
URL: /security/delete_found

Method :  DELETE

Reponse : Found item deleted
             
Status : {
            If successfull : 200_OK 
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                     400_BAd Request(Found Item not present in Database)
                   }
         }
           
```
### Add Hall entry
```
URL: /security/add_hallentry
     

Method :  POST 

Data : {  
           person1,
           person2,
           destination,
           entry_time,
           hall,
           if_exited = False
       } 
             
Status : {
            If successfull : 201_Created 
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                     400_BAd Request(Missing required data or other error)
                   }
         }
           
```
### View Hall entries
```
URL: /security/hall_entries
     

Method :  GET

Response : Hall Entries Data (For which if_exited is false)
             
Status : {
            If successfull : 200_ok
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                   }
         }
           
```
### View all Hall entries
```
URL: /security/all_hall_entries
     

Method :  GET

Response : All Hall Entries Data 
             
Status : {
            If successfull : 200_ok
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                   }
         }
           
```
### Add Hall exit
```
URL: /security/add_hallexit
     

Method :  PUT 

Data : {
           exit_time,
           if_exited = True
       } 
             
Status : {
            If successfull : 200_OK 
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                     400_BAd Request(Missing required data or other error)
                   }
         }
           
```
### Add Campus entry
```
URL: /security/add_campusentry
     

Method :  PUT

Data : {  
           entry_time,
           if_entered = True
       } 
             
Status : {
            If successfull : 200_OK
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                     400_BAd Request(Missing required data or other error)
                   }
         }
           
```
### View Campus exit
```
URL: /security/campus_exits
     

Method :  GET

Response: Campus Exits ( for which if_entered = false)
             
Status : {
            If successfull : 200_OK 
            Else : 
                   {
                     404_NOT_FOUND
                   }
         }
           
```
### View all Campus exits
```
URL: /security/all_campus_exits
     

Method :  GET

Response : All Campus Exits Data 
             
Status : {
            If successfull : 200_ok
            Else : 
                   {
                     404_NOT_FOUND
                   }
         }
           
```
### Add Campus exit
```
URL: /security/add_campusexit
     

Method :  POST

Data : {  
           person,
           if_entered = False,
           destination,
           exit_time
           
       } 
             
Status : {
            If successfull : 201_CREATED
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                     400_BAd Request(Missing required data or other error)
                   }
         }
           
```
### Add Non resident Campus entry
```
URL: /security/add_nonresident_campusentry
     

Method :  POST

Data : {  
           name,
           vehicle,
           vehicle_number,
           concerned_person,
           reason,
           entry_time,
           if_exited = false,
           id_document,
           id_number
       } 
             
Status : {
            If successfull : 201_CREATED
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                     400_BAd Request(Missing required data or other error)
                   }
         }
           
```
### Add Non resident Campus exit
```
URL: /security/add_nonresident_campusexit
     

Method :  PUT

Data : {  
           exit_time,
           if_exited = true
       } 
             
Status : {
            If successfull : 200_OK
            Else : 
                   {
                     401_Unauthorized(Not logged in)
                     400_BAd Request(Missing entry)
                   }
         }
           
```
### See Non resident Campus entries
```
URL: /security/nonresident_campusentries
     

Method :  GET

Response : Non Resisdent Campus Entries ( For which if_exited = false)
             
Status : {
            If successfull : 200_OK
            Else : 
                   {
                     404_NOT_FOUND
                   }
         }
           
```
### See All Non-resident Campus entries
```
URL: /security/all_nonresident_campusentries
     

Method :  GET

Response : Non Resisdent Campus Entries

Status : {
            If successfull : 200_OK
            Else : 
                   {
                     404_NOT_FOUND
                   }
         }
           
```









