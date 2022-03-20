/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import {Provider} from "react-redux";
import store from "store";
import { sessionService } from "redux-react-session";
import {useSelector} from 'react-redux'

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

const validateSession = (session) => {
 
  return true;
}
const options = { refreshOnCheckAuth: true, redirectPath: '/auth/login', driver: 'COOKIES', validateSession };

sessionService.initSessionService(store, options)
  .then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
  .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));


  const App = () => {
    const session = useSelector((state) => state.session);
    const [iflogged,setiflogged]=useState(false);
    
    
    console.log(session.user.uid);
    return (
      <BrowserRouter>
        <Switch>
          
         
          <Route path={session.authenticated?"/":"/user"} render={(props) => <AdminLayout {...props} />} />
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Redirect from="*" to="/auth/login" />
        </Switch>
      </BrowserRouter>
    )
  }
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
