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
  import { useState } from "react";

  
  
  const BACKEND_URL = "http://127.0.0.1:8000/signup/"
  
  const SignUp = () => {
  
    const [uid, setUID] = useState("");
    const [password, setPASSWORD] = useState("");
    
  
    const handleSubmit = async () => {
      const data = {
        uid: uid,
        password: password,
      }
  
      await axios
        .post(BACKEND_URL, data)
        .then(() => alert("Exit Data Submitted"))
        .catch(() => alert("Some Error occured"))
      console.log("kjdb")
    }
  
  
  
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/icons/common/github.svg")
                          .default
                      }
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/icons/common/google.svg")
                          .default
                      }
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader> */}
            <CardBody className="px-lg-5 py-lg-5">
          
              <Form role="form">
            
              <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="UID"
  
                      onChange={(event) => {
                        event.preventDefault();
                        setUID(event.target.value);
                      }}
                      id="uid"
                      type="text"
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
                      placeholder="Password"
                      type="password"
                     
  
                      onChange={(event) => {
                        event.preventDefault();
                        setPASSWORD(event.target.value);
                      }}
                      id="password"
                    />
                  </InputGroup>
                </FormGroup>
  
                
                <div className="text-center">
                  <Button className="mt-4" color="primary" onClick={handleSubmit} type="button">
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };
  
  export default SignUp;
  