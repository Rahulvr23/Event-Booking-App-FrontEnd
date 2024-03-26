import React, { useEffect ,useContext} from 'react'
import { useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { deleteAPI, getAllEventAPI } from '../services/allAPI';
import { addEventResponseContext } from '../ContextAPI/ContextShare';
import UpdateComponent from '../AdminCompo/UpdateComponent';
import { editEventResponseContext } from '../ContextAPI/ContextShare';
import { deleteEventResponseContext } from '../ContextAPI/ContextShare';

function AdminUpdateEvents() {
  const {editEventRes,setEditEventRes}=useContext(editEventResponseContext)

  const {addEventRes,setAddEventRes}=useContext(addEventResponseContext)
  const{deleteEventRes,setDeleteEventRes}=useContext(deleteEventResponseContext)

  const[allEvents,setAllEvents]=useState([])
  useEffect(()=>{
    const getEvents=async()=>{
      const response= await getAllEventAPI()
      if(response.status==200){
        console.log(response.data);
        setAllEvents(response.data)
      }
      else{
        console.log("error");
      }
      
    }
    getEvents()
   
  },[addEventRes,editEventRes,deleteEventRes])
  console.log(allEvents);

  const deleteEvent = async (eid) => {
    const token = sessionStorage.getItem("token")

    if(token){
      const reqHeader = {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await deleteAPI(eid,reqHeader)
      console.log(result.data);
      setDeleteEventRes(result.data)
      

      alert("User project deleted successfully")
    }
}






  return (
    <div>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Event Name</th>
          <th scope='col'> Event-Category</th>
       
          <th scope='col'>Edit-Event</th>
          <th scope='col'>Delete-Event</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          allEvents.length>0?(
          allEvents.map((item,index)=>(
            <tr>
            <td>
              <div className='d-flex align-items-center'>
               
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{item.eventName}</p>
                  <p className='text-muted mb-0'></p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>{item.eventCategory}</p>
              <p className='text-muted mb-0'></p>
            </td>
           
            <td>  
                {/* <MDBBtn color='red' rounded size='sm'> */}
          <UpdateComponent event={item}/>

            {/* </MDBBtn> */}
            </td>
            <td>
          <button className='btn btn-white' onClick={()=>deleteEvent(item?._id)} >
          <i class="fa-solid fa-trash text-danger"></i>
          </button>
           
           
            </td>
          </tr>
          ))
          ):<div>no data</div>
        }
      
      
        
         
      </MDBTableBody>
    </MDBTable>

    </div>
  )
}

export default AdminUpdateEvents