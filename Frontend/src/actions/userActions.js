import { sessionService } from "redux-react-session";
import axios from "axios";


export const login = (uid) => async ()=>{
    try {
        const response = {
            uid:uid
        };
        console.log("wowowowowowowowowowowowo");

        sessionService.saveSession();
        sessionService.saveUser(response);
        
    }
    catch (err) {
        console.log("error");
    }
    

};

export const logout =async()=>{
    axios.defaults.withCredentials = true;
    axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    await axios
    .post("http://127.0.0.1:8000/logout/",{})
    .then((response)=>{
        sessionService.deleteSession();
        sessionService.deleteUser();
    })
    .catch((err)=>{console.log("error");

    });
}