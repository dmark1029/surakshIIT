import { sessionService } from "redux-react-session";



export const login = (uid) => async ()=>{
    try {
        const response = {
            uid:uid
        };
      

        sessionService.saveSession();
        sessionService.saveUser(response);
        
    }
    catch (err) {
        console.log("error");
    }
    

};

