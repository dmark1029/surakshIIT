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

  const BACKEND_URL = "http://127.0.0.1:8000/security/add_hallentry/"
  
  const AddHallEntry = () => {
    
    const [UID1, setUID1] = useState("");
    const [UID2, setUID2] = useState("");
    const [Destination, setDestination] = useState("");
    const [Hall, setHall] = useState(1);
    
  const handleSubmit = async() => {
      const data = {
          person1: UID1,
          person2: UID2,
          destination: Destination,
          hall: Hall,
      }
      axios.defaults.withCredentials = true;
      axios.defaults.xsrfCookieName = 'csrftoken'
      axios.defaults.xsrfHeaderName = 'X-CSRFToken'

      await axios 
      .post(BACKEND_URL,data)
      .then(()=>alert("Entry Data Submitted"))
      .catch((err)=>alert(err))
  }



    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Add Hall Entry</small>
              </div>
              
             
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              
              <Form >
              <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="Roll-no1"
                              >
                                Person
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                
                                placeholder="Roll-No of person"
                                onChange={(event) => {
                                  event.preventDefault();
                                  setUID1(event.target.value);
                                }}
                                id="uid"
                                type="text"
                              />
                            </FormGroup>
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="Roll-no2"
                              >
                                To meet
                              </label>
                              <Input

                                className="form-control-alternative"
                                
                                placeholder="Roll-No of host"
                                onChange={(event) => {
                                  event.preventDefault();
                                  setUID2(event.target.value);
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
                            
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="Hall"
                              >
                                Hall
                              </label>
                              <br></br>
                              <select value={Hall} onChange={(e)=>{
                                  e.preventDefault();
                                  console.log(e.target.value);
                                  setHall(e.target.value);
                              }}>
                              <option value= "1">Hall 1</option>
                              <option value= "2">Hall 2</option>
                              <option value= "3">Hall 3</option>
                              <option value= "4">Hall 4</option>
                              <option value= "5">Hall 5</option>
                              <option value= "6">Hall 6</option>
                              <option value= "7">Hall 7</option>
                              <option value= "8">Hall 8</option>
                              <option value= "9">Hall 9</option>
                              <option value= "10">Hall 10</option>
                              <option value= "11">Hall 11</option>
                              <option value= "12">Hall 12</option>
                              <option value= "13">Hall 13</option>
                              <option value= "14">GH 1</option>
                              
                             
                           

                              </select>
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
  
  export default AddHallEntry;