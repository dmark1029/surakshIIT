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

const FoundItemList = () =>{
    const[FoundItems, setFoundItems] = useState([]);

    const handleClick = async(key) =>{
        console.log(key);
        console.log(FoundItems[key].id);

        await axios
        .delete(Backend_URL+"delete_found/", {data:{
            id: FoundItems[key].id
        }})
        .then(()=>alert("Found Item Returned"))
        .catch(()=>alert("Some Error ocurred"))
        fetchData();
    }

    const fetchData = async() =>{

        await axios
        .get(Backend_URL+"found_item/")
        .then((result)=>{
            setFoundItems(result.data.data);
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
         <Link to="/security/add_foundItem" className="btn btn-primary">Add Found Record</Link>
         </Col>
         

       </Row>
       <br></br>
            <h1>Found Items</h1>
            <div className="mt-5">
                <CardGroup>
                    {FoundItems.map((item, key)=>{
                        return (
                            <Card className="mx-3 my-3" key={key}>
                            <CardImg variant="top" src={"http://127.0.0.1:8000"+ item.image} alt="item pic"></CardImg>
                                <CardBody>
                                <CardTitle><h2>{item.name}</h2></CardTitle>
                                <CardText>
                                    Item color: {item.item_color}
                                    <h3>Found by: {item.who_found}</h3>
                                    {item.details}
                                </CardText>
                                </CardBody>
                                <CardFooter>
                                <small>Found location : {item.where_found}</small><br></br>
                                <small>Found time : {item.found_time}</small>
                                <Button className="float-right" bsStyle="success" bsSize="small" onClick={(e)=>(handleClick(key))}>
                                    Returned
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
export default FoundItemList;
