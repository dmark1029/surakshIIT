import axios from "axios";
import { useState,useEffect} from "react";

import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardGroup,
  CardFooter,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  Row,
  Col,
  InputGroupButtonDropdown,
} from "reactstrap";

const Backend_URL='http://127.0.0.1:8000/security/add_found/'

const AddFoundItem = () =>{
  const [Name, setName] = useState("");
  const [Color, setColor] = useState("");
  const [FoundLocation, setFoundLocation] = useState("");
  const [PersonFound, setPersonFound] = useState("");
  const [Details, setDetails] = useState("");
  const [Image, setImage] = useState(null);

  const handleSubmit = async() =>{
    

    let form_data = new FormData();
    form_data.append('name',Name);
    form_data.append('item_color',Color);
    form_data.append('where_found',FoundLocation);
    form_data.append('who_found',PersonFound);
    form_data.append('details',Details);
    form_data.append('image',Image)
    const item = {
      name : Name,
      item_color : Color,
      where_found : FoundLocation,
      who_found : PersonFound,
      image : Image,
      details : Details
    }

    if(Name=="" | PersonFound=="") {
      alert(("Fill in the required details"))
    }
    else{

    axios.defaults.withCredentials = true;
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'

    await axios 
      .post(Backend_URL,form_data,{headers: {
        'content-type': 'multipart/form-data'
      }})
      .then(()=>alert("item Added"))
      .catch(()=>alert("An error ocurred"))
    }
  }

  return (
    <>
      <div>
        <Row>
          <div>
            <Card style={{ width: '45rem', cursor : 'pointer' }} className="my-8 mx-5">
              <CardBody>
                <CardTitle>Add Found Item</CardTitle>
                  <CardText>
                    <h3>Give some details-</h3>
                  </CardText>
                  
                    <Col className="order-xl-1" xl="10">
                      <Card className="bg-secondary shadow">
                          <CardHeader className="bg-white border-0">
                              <Row className="align-items-center">
                                <Col xs="10">
                                  <h3 className="mb-0">Add Found Item</h3>
                                </Col>                              
                              </Row>
                          </CardHeader>
                        <CardBody>
                          <Form>
                            <h4 className="heading-small text-muted mb-4">Item Details</h4>
                            <div className="pl-lg-4">
                              <Row>
                                <Col lg="6">
                                    <FormGroup>
                                      <label className="form-control-label" htmlFor="input-username">Item Name</label>
                                      <Input
                                        required
                                        className="form-control-alternative"
                                        placeholder="Found Item Name"
                                        onChange={(event) => {
                                          event.preventDefault();
                                            setName(event.target.value);
                                            }}
                                            id="name"
                                            type="text"
                                          />
                                    </FormGroup>
                                  </Col>
                                  <Col lg="6">
                                    <FormGroup>
                                      <label className="form-control-label" htmlFor="input-username">color</label>
                                      <Input
                                        required
                                        className="form-control-alternative"
                                        placeholder="Found Item Color"
                                        onChange={(event) => {
                                          event.preventDefault();
                                            setColor(event.target.value);
                                            }}
                                            id="item_color"
                                            type="text"
                                          />
                                    </FormGroup>
                                  </Col>
                                  <Col lg="6">
                                    <FormGroup>
                                      <label className="form-control-label" htmlFor="input-username">Found location</label>
                                      <Input
                                        required
                                        className="form-control-alternative"
                                        placeholder="where found"
                                        onChange={(event) => {
                                          event.preventDefault();
                                            setFoundLocation(event.target.value);
                                            }}
                                            id="where_found"
                                            type="text"
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col lg="6">
                                    <FormGroup>
                                      <label className="form-control-label" htmlFor="input-username">UID of Person who found</label>
                                      <Input
                                        required
                                        className="form-control-alternative"
                                        placeholder="uid of person"
                                        onChange={(event) => {
                                          event.preventDefault();
                                            setPersonFound(event.target.value);
                                            }}
                                            id="uid"
                                            type="text"
                                      />
                                    </FormGroup>
                                  </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <FormGroup>
                                    <label className="form-control-label" htmlFor="input-username">Extra Details</label>
                                    <Input
                                      className="form-control-alternative"
                                      placeholder="like brand naame, size etc"
                                      onChange={(event) => {
                                      event.preventDefault();
                                        setDetails(event.target.value);
                                     
                                        }}
                                      id="details"
                                      type="text"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <FormGroup>
                                    <label className="form-control-label" >Image</label>
                                    <Input
                                      className="form-control-alternative"
                                      onChange={(event) => {
                                      event.preventDefault();
                                      console.log(event.target.files[0]);
                                        setImage(event.target.files[0]);
                                        
                                        }}
                                      id="image"
                                      type="file"
                                      accept="image/png, image/jpeg"
                                      
                                    />
                                  </FormGroup>
                                  

                                </Col>
                              </Row>    
                            </div>
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>    
                 
                  <Button color="primary" onClick={handleSubmit} size="normal" className="mx-3 my-3">Submit</Button>
                </CardBody>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
};

export default AddFoundItem;