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
  import Select from 'react-select'

  const BACKEND_URL = "http://127.0.0.1:8000/security/add_nonresident_campusentry/"
  
  const NonResidentCampusEntry = () => {
    const [name, setName] = useState("");
    const [concerned, setConcerned] = useState("");
    const [reason, setReason] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [vehicle_no, setVehicleNo] = useState("");
    const [id_document, setIdDocument] = useState(0);
    const [id_number, setIdNumber] = useState("")




  const handleSubmit = async() => {
      const data = {
          name: name,
          concerned_person : concerned,
          reason: reason,
          vehicle: vehicle,
          vehicle_number: vehicle_no,
          id_document: id_document,
          id_number: id_number
      }
      axios.defaults.withCredentials = true;
      axios.defaults.xsrfCookieName = 'csrftoken'
      axios.defaults.xsrfHeaderName = 'X-CSRFToken'
      
      await axios 
      .post(BACKEND_URL,data)
      .then(()=>alert("Entry Data Submitted"))
      .catch(()=>alert("Misleading UID given"))
  }

    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Add Non Residents Campus Entry </small>
              </div>
              
             
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              
              <Form >
              <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="name"
                              >
                               Name
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                
                                placeholder="Name"
                                onChange={(event) => {
                                  event.preventDefault();
                                  setName(event.target.value);
                                }}
                                id="name"
                                type="text"
                              />
                            </FormGroup>
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="Concerned Person"
                              >
                                Concerned Person
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                
                                placeholder="Concerned Person's UID/Roll"
                                onChange={(event) => {
                                  event.preventDefault();
                                  setConcerned(event.target.value);
                                }}
                                id="concerned"
                                type="text"
                              />
                            </FormGroup>

                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="Vehicle"
                              >
                                Vehicle
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                
                                placeholder="Vehicle Name"
                                onChange={(event) => {
                                  event.preventDefault();
                                  setVehicle(event.target.value);
                                }}
                                id="vehicle"
                                type="text"
                              />
                            </FormGroup>

                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="Vehicle No."
                              >
                                Vehicle Number
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                
                                placeholder="Vehicle No."
                                onChange={(event) => {
                                  event.preventDefault();
                                  setVehicleNo(event.target.value);
                                }}
                                id="vehicle_no"
                                type="text"
                              />
                            </FormGroup>

                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="Reason"
                              >
                                Reason to visit
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                
                                placeholder="Reason"
                                onChange={(event) => {
                                  event.preventDefault();
                                  setReason(event.target.value);
                                }}
                                id="reason"
                                type="text"
                              />
                            </FormGroup>

                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="ID_doc"
                              >
                                ID Document
                              </label><br></br>
                              <select value={id_document} onChange={(e)=>{
                                  e.preventDefault();
                                  console.log(e.target.value);
                                  setIdDocument(e.target.value);
                              }}>
                              <option value= "1">Aadhar Card</option>
                              <option value= "2">Driving License</option>
                              <option value= "3">Passport</option>
                              <option value= "4">Voter Card</option>
                              <option value= "5">Other</option>
                             
                           

                              </select>
                            </FormGroup>

                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="ID_Num"
                              >
                                ID Number
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                
                                placeholder="ID Number"
                                onChange={(event) => {
                                  event.preventDefault();
                                  setIdNumber(event.target.value);
                                }}
                                id="id_number"
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
  
  export default NonResidentCampusEntry;
  