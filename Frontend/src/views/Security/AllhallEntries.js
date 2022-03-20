import React,{useState,useEffect} from "react";
import axios from "axios";
import CampusExit from "views/AddCampusExit";
import ReactTable from "react-table-6";
import { Link } from "react-router-dom";
import { Row,Col } from "reactstrap";

const BACKEND_URL = "http://127.0.0.1:8000/security/";

const AllHallEntryTable =()=>{
    const [entryData,setEntryData]=useState([]);

    

    const fetchData = async()=>{
        await axios
        .get(BACKEND_URL+"all_hall_entries/")
        .then((result)=>{
            setEntryData(result.data.data);
               
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
         <Link to="/security/addHallEntry" className="btn btn-primary">Add Hall Entry</Link>
         </Col>
         <Col>
         <Link to="/security/all_hallEntries" className="btn btn-primary">See all records</Link>
         </Col>

       </Row>
       <br></br>


        Record of Non Hall Residents who have not yet left the hall
       <ReactTable 
       data={entryData}
       columns = {[
        {
          Header: "Hall",
          accessor: "hall"
        },
        {
            Header: "Name",
            accessor: "person1"
        },
        {
            Header: "To meet",
            accessor: "person2"
        },
        {
          Header: "Destination",
          accessor: "destination"
        },

        {
          Header: "Entry Time",
          accessor: "entry_time"
        },
        {
            Header: "Exit Time",
            accessor: "exit_time"
          },
        
      
    ]}
    defaultPageSize={10}
          className="-striped -highlight"
    ></ReactTable>








        
        </>
      );

}

export default AllHallEntryTable 

