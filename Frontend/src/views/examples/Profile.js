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
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";


// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useEffect, useState } from "react";
import axios from "axios";


const BACKEND_URL = "http://127.0.0.1:8000/profile/";

const Profile = () => {

  const [userData, setUserData] = useState([]);

  const fetchData = async() => {

    axios.defaults.withCredentials = true;
    await axios 
    .get(BACKEND_URL)
    .then((result) => {
      setUserData(result.data);
      const myUserData = result.data;
      
    })
    .catch((err)=>console.log(err));
  }

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <>
      <UserHeader name={userData.name}/>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          "http://127.0.0.1:8000"+userData.dp                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  
                </Row>
                <br></br><br></br><br></br>
                <div className="text-center">
                  <h3>
                    {userData.name}
                    <span className="font-weight-light"></span>
                  </h3>
                  
                  
                  <hr className="my-4" />
                  
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              
              <CardBody>
              <Row>
                <Col>Name</Col>
                <Col>{userData.name}</Col>
              </Row>
              <Row>
                <Col>UID</Col>
                <Col>{userData.uid}</Col>
              </Row>
              <Row>
                <Col>Address</Col>
                <Col>{userData.room_no},{userData.address}</Col>
              </Row>
              <Row>
                <Col>E-mail</Col>
                <Col>{userData.email}</Col>
              </Row>
              <Row>
                <Col>Phone</Col>
                <Col>{userData.phone}</Col>
              </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
