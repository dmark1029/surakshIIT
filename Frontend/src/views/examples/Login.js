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

// reactstrap components
import { useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

import {useDispatch} from "react-redux"
import { login } from "actions/userActions";

const BACKEND_URL = "http://127.0.0.1:8000/login/"

const Login = () => {

  const [UID,setUID]=useState("");
  const [pass,setPass]=useState("");

  const handleSubmit = async() => {
    const data = {
        uid: UID,
        password: pass,
        
    }
    
    if(UID=="" | pass=="") {
      alert(("Fill in the required details"))
    }
    else{
      axios.defaults.withCredentials = true;
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'

    await axios 
    .post(BACKEND_URL,data)
    .then((res)=>{
      if(res.status==200){
        dispatch(login(UID));
      }
      
    })
    .catch((err)=>alert((err.response.data.message)))
    
}



    }
    
const dispatch = useDispatch();


  



  return (
    <>
      
      <Col lg="5" md="7" >
        <div>
        <img  width={390}
                      alt="..."
                      src={
                        require("../../assets/img/brand/argon-react-white.png")
                          .default
                      }
                    />
        </div>
        <Card >
          
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-circle-08" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    required
                    placeholder="UID"
                    type="test"
                    autoComplete="new-UID"
                    onChange={(event) => {
                      event.preventDefault();
                        setUID(event.target.value);
                        }}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    required
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={(event) => {
                      event.preventDefault();
                        setPass(event.target.value);
                        }}
                  />
                </InputGroup>
              </FormGroup>
              
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={handleSubmit}>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        
      </Col>
    </>
  );
};

export default Login;
