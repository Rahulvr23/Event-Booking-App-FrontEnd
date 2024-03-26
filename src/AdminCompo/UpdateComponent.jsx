import React, { useContext, useEffect } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
  import { useState } from 'react';
import { UpdateEventAPI } from '../services/allAPI';
import { baseUrl } from '../services/baseUrl';




import { editEventResponseContext } from '../ContextAPI/ContextShare';
function UpdateComponent({event}) {
  const {editEventRes,setEditEventRes}=useContext(editEventResponseContext)
    console.log(event);
    const img="https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg"
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);

  
const[eventDetails,setEventDetails]=useState({
    id:event._id,
    eventName:event.eventName,
    eventCategory:event.eventCategory,
    date:event.date,
    eventLocation:event.eventLocation,
    eventDiscription:event.eventDiscription,
    eventLimit:event.limit,
    eventAmount:event.amount,
    
    eventImage:""
})
const[preview,setPreview]=useState("")

console.log(preview);
console.log(eventDetails);
useEffect(()=>{
    if(eventDetails.eventImage){
      setPreview(URL.createObjectURL(eventDetails.eventImage))
    }
    },[eventDetails.eventImage])
console.log(eventDetails);
const{id,eventName,eventCategory,date,eventLocation,eventDiscription,eventLimit,eventAmount,eventImage}=eventDetails

const token= sessionStorage.getItem("token")
console.log(token);
console.log(preview);
const updateEvent= async()=>{
   
        const reqBody=new FormData()
   
        reqBody.append("eventName",eventName);
        reqBody.append("eventCategory",eventCategory);
        reqBody.append("date",date);
        reqBody.append("eventLocation",eventLocation);
        reqBody.append("eventDiscription",eventDiscription);
        reqBody.append("limit",eventLimit)
        reqBody.append("amount",eventAmount)
        preview?reqBody.append("eventImage",eventImage):reqBody.append("EventImage", event.eventImage);


 if (preview) {
    const reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
  
          }
          //api call
          const result= await UpdateEventAPI(id,reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            console.log(result.data);
        setEditEventRes(result.data)
            alert("update success")
      
          }
          else{
         
            console.log(result.response.data);

          }
    
 } else {
    const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
  
          }
          //api call
          const result= await UpdateEventAPI(id,reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            console.log(result.data);
            setEditEventRes(result.data)
            alert("update success")
           
     
          }
          else{
            console.log(result.response.data);

          }
    
 }
    
}
// AdminId:



  return (
    <div>
          <MDBBtn className='  bg-white p-2' rounded size='sm' onClick={toggleOpen}> 
           <i class=" fs-5 text-primary fa-sharp fa-solid fa-pen-fancy"></i></MDBBtn>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog  	size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle></MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

                <div className="row">
                    <div className="col-lg-6 p-5">
 < label className='mt-5' >
  <input style={{display:"none"}} onChange={(e)=>{setEventDetails({...eventDetails,eventImage:e.target.files[0]})}}  type='file'></input>
  <img style={{height:"200px"}}  src={preview?preview:`${baseUrl}/uploads/${event.eventImage}`}alt="" srcset="" />
  </label>
                    </div>
                    <div className="col-lg-6 p-5">
                         <input type="text" value={eventDetails.eventName} onChange={(e)=>{setEventDetails({...eventDetails,eventName:e.target.value})}} className='form-control' ></input>
                        <input type="text" value={eventDetails.eventLimit} onChange={(e)=>{setEventDetails({...eventDetails,eventLimit:e.target.value})}} className='form-control mt-3' />
                        <input type="text" value={eventDetails.eventAmount} onChange={(e)=>{setEventDetails({...eventDetails,eventAmount:e.target.value})}} className='form-control mt-3' />
                        <div className='form-group  '>

        <select className='form-control mt-3' onChange={(e)=>{setEventDetails({...eventDetails,eventCategory:e.target.value})}} id='eventCategory'>
          <option value={eventDetails.eventCategory}>{eventDetails.eventCategory}</option>
          <option value='Arts'>Arts </option>
          <option value='Music'>Music</option>
          <option value='Tech'>Tech</option>
          
        </select>
      </div>
                        <input value={eventDetails.date} onChange={(e)=>{setEventDetails({...eventDetails,date:e.target.value})}} type="date" className='form-control mt-3' />
                        <input value={eventDetails.eventLocation} type="text" onChange={(e)=>{setEventDetails({...eventDetails,eventLocation:e.target.value})}} className='form-control mt-3' />
                        <input value={eventDetails.eventDiscription} type="text" onChange={(e)=>{setEventDetails({...eventDetails,eventDiscription:e.target.value})}} className='form-control mt-3' />
                    </div>
                </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn className='bg-success' onClick={updateEvent}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
  

}

export default UpdateComponent