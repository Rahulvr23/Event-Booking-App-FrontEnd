import React, { useContext } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useEffect,useState } from 'react';
import {  getTicketAPI } from '../services/allAPI';

function EventTicket() {
 
  const[allBooking,setAllbooking]=useState([])
  useEffect(()=>{
    const getBooking=async()=>{
      const response= await getTicketAPI()
  
      if(response.status==200){
        console.log(response.data);
        setAllbooking(response.data)
  
      }
      else{
        console.log("error");
      }
      
    }
    getBooking()
   
  },[])
  
  return (
    <div>
            <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th scope='col'>sl.No</th>
          <th scope='col'>Event Name</th>
          <th scope='col'>Participant-Name</th>
          <th scope='col'>Number</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
     {
      allBooking.map((item,index)=>(
        <tr>
        <th scope='row'>{index+1}</th>
        <td>{item.eventName}</td>
        <td>{item.personName}</td>
        <td>{item.number}</td>
      </tr>
      ))
     }
        
         
       
      </MDBTableBody>
    </MDBTable>

    </div>
  )
}

export default EventTicket