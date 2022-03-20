import React,{useState,useEffect} from "react";
import axios from "axios";
import CampusExit from "views/AddCampusExit";
import ReactTable from "react-table-6";
import { Link } from "react-router-dom";
import { Row,Col } from "reactstrap";

const BACKEND_URL = "http://127.0.0.1:8000/security/";

const CampusExitTable =()=>{
    const [exitData,setExitData]=useState([]);

    const handleClick = async(key) =>{
        console.log(key);
        

        await axios
        .put(BACKEND_URL+"add_campusentry/", {
            id: exitData[key].id
        })
        .then(()=>alert("Entry Recorded"))
        .catch(()=>alert("Some Error ocurred"))
        fetchData();
    }

    const fetchData = async()=>{
        await axios
        .get(BACKEND_URL+"campus_exits/")
        .then((result)=>{
            setExitData(result.data.data);
               
        })
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        < >
       <br></br> <br></br> <br></br> <br></br>
       <Row>
         <Col>
         <Link to="/security/addcampusMovement" className="btn btn-primary">Add Campus Exit</Link>
         </Col>
         <Col>
         <Link to="/security/all_CampusMovement" className="btn btn-primary">See all records</Link>
         </Col>

       </Row>
       <br></br>


        Record of Residents who have not yet returned to campus
       <ReactTable 
       data={exitData}
       columns = {[
        {
            Header: "Name",
            accessor: "person"
        },
        {
            Header: "Destination",
            accessor: "destination"
        },
        {
          Header: "Exit Time",
          accessor: "exit_time"
        },
        {
          Header: "Update",
          Cell: ({row})=> <div><button onClick={(e)=>handleClick(row._index)}>Returned</button></div>
      },
      
    ]}
    defaultPageSize={10}
          className="-striped -highlight"
    ></ReactTable>








        
        </>
      );

}

export default CampusExitTable

