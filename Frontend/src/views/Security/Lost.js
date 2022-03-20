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
import { Link } from "react-router-dom";

const Backend_URL = "http://127.0.0.1:8000/security/"

const LostItemList = () =>{
    const[LostItems, setLostItems] = useState([]);

    const handleClick = async(key) =>{
        console.log(key);
        console.log(LostItems[key].id);

        await axios
        .delete(Backend_URL+"delete_lost/", {data:{
            id: LostItems[key].id
        }})
        .then(()=>alert("Found Item Deleted"))
        .catch(()=>alert("Some Error ocurred"))
        fetchData();
    }

    const fetchData = async() =>{

        await axios
        .get(Backend_URL+"lost_item/")
        .then((result)=>{
            setLostItems(result.data.data);
        })
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        fetchData();
    },[])

    return(
        <>
        <br></br><br></br><br></br>
        <Row>
         <Col>
         <Link to="/security/add_lostItem" className="btn btn-primary">Add Lost Query</Link>
         </Col>
         

       </Row>
       <br></br>
            <h1>Lost Items</h1>
            <div className="mt-5">
                <CardGroup>
                    {LostItems.map((item, key)=>{
                        return (
                            <Card className="mx-3 my-3" key={key}>
                            <CardImg variant="top" src={"http://127.0.0.1:8000"+item.image} alt="item pic"></CardImg>
                                <CardBody>
                                <CardTitle><h2>{item.name}</h2></CardTitle>
                                <CardText>
                                    Item color: {item.item_color}
                                    <h3>Owner: {item.owner}</h3>
                                    {item.details}
                                </CardText>
                                </CardBody>
                                <CardFooter>
                                <small>Last seen location : {item.last_seen}</small><br></br>
                                <small>Lost time : {item.lost_time}</small>
                                <Button className="float-right" bsStyle="success" bsSize="small" onClick={(e)=>(handleClick(key),console.log(key))}>
                                    Found
                                </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                    
                </CardGroup>
            </div>
        </>
    );
};
export default LostItemList;