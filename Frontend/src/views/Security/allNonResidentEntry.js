import React,{useState,useEffect} from "react";
import { render } from "react-dom";

import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';

import axios from "axios";
import { Link } from "react-router-dom";

import { Container, Row } from "reactstrap";

const BACKEND_URL = "http://127.0.0.1:8000/security/";

const AllNonResidentCampusEntryTable =()=>{
    const [entryData,setEntryData]=useState([]);

    const id_documents= [
        "Aadhar Card",
        "Driving license",
        "Passport", 
        "Voter Card", 
        "Other"
    ]

    

    const fetchData = async()=>{
        await axios
        .get(BACKEND_URL+"all_nonresident_campusentries/")
        .then((result)=>{
            console.log(result.data.data)
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

       <Link to="/security/addNonResidentcampusEntry" className="btn btn-primary">Add Entry</Link>
        <Container>
         <ReactTable 
         data = {entryData}
         columns = {[
             {
                 Header: "Name",
                 accessor: "name"
             },
             {
                 Header: "To meet",
                 accessor: "concerned_person"
             },
             {
                Header: "Vehicle",
                accessor: "vehicle"
            },
             {
                 Header: "Entry Time",
                 accessor: "entry_time"
             },
             {
                Header: "Exit Time",
                accessor: "exit_time"
            },
             
             {
                 Header: "Expand",
                 expander : true,
                 Expander : ({
                     isExpanded,...rest
                 })=><div>
                 {isExpanded
                   ? <span>&#x2299;</span>
                   : <span>&#x2295;</span>}
               </div>,
               style: {
                cursor: "pointer",
                fontSize: 25,
                padding: "0",
                textAlign: "center",
                userSelect: "none"
              },
             }
             
         ]} 
         defaultPageSize={10}
          className="-striped -highlight"
         SubComponent={(v)=> 
         <Container>
             <Row>
                 Reason : {entryData[v.row._index].reason }
            </Row>
            <Row>
                 Proof of Identification : {id_documents[entryData[v.row._index].id_document ]} 
            </Row>
            <Row>
                 ID Number : {entryData[v.row._index].id_number } 
            </Row>
            <Row>
                 Vehicle No. : {entryData[v.row._index].vehicle_number } 
            </Row>
            </Container>}
         
          >

         </ReactTable>
        </Container>
        </>
      );

}
export default AllNonResidentCampusEntryTable

