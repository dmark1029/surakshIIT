import React,{useState,useEffect} from "react";
import axios from "axios";
import CampusExit from "views/AddCampusExit";
import ReactTable from "react-table-6";
import { Link } from "react-router-dom";

const BACKEND_URL = "http://127.0.0.1:8000/security/";

const AllCampusExitTable =()=>{
    const [exitData,setExitData]=useState([]);

    
    const fetchData = async()=>{
        await axios
        .get(BACKEND_URL+"all_campus_exits/")
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
       <Link to="/admin/addcampusMovement" className="btn btn-primary">Add Campus Exit</Link>
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
            Header: "Entry Time",
            accessor: "entry_time"
          },
        
    ]}
    defaultPageSize={10}
          className="-striped -highlight"
    ></ReactTable>








        
        </>
      );

}

export default AllCampusExitTable

