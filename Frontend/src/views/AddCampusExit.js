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
  import axios from "axios";

  const BACKEND_URL = "http://127.0.0.1:8000/security/add_campusexit/"
  
  const CampusExit = () => {
    
    const [uid, setUID] = useState("");
    const [destination, setDestination] = useState("");

  const handleSubmit = async() => {
      const data = {
          person: uid,
          destination: destination,
          
      }

      if(uid=="" | destination=="") {
        alert(("Fill in the required details"))
      }
      else{
      axios.defaults.withCredentials = true;
      axios.defaults.xsrfCookieName = 'csrftoken'
      axios.defaults.xsrfHeaderName = 'X-CSRFToken'
      
      await axios 
      .post(BACKEND_URL,data)
      .then(()=>{
        alert("Exit Data Submitted")
        ;
      })
      .catch(()=>alert("Misleading UID given"))
      console.log("kjdb")
      setUID("");
        setDestination("")
  }
}



    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Add Campus Exit</small>
              </div>
              
             
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              
              <Form >
              <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="Roll-no"
                              >
                                Roll No
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                
                                placeholder="Roll-No"
                                onChange={(event) => {
                                  event.preventDefault();
                                  setUID(event.target.value);
                                }}
                                id="uid"
                                type="text"
                              />
                            </FormGroup>
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="Destination"
                              >
                                Destination
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                
                                placeholder="Destination"
                                onChange={(event) => {
                                  event.preventDefault();
                                  setDestination(event.target.value);
                                }}
                                id="destination"
                                type="text"
                              />
                            </FormGroup>
                
                
                
                            <Button color="primary" onClick={handleSubmit} size="normal">
                Submit
              </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        
      </>
    );
  };
  
  export default CampusExit;
  