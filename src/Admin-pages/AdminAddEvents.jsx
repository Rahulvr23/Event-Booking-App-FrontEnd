import React, { useContext, useEffect } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import  { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit'
import { MDBTextArea } from 'mdb-react-ui-kit';
import { addEventAPI } from '../services/allAPI';
import { addEventResponseContext } from '../ContextAPI/ContextShare';
function AdminAddEvents() {

  const {addEventRes,setAddEventRes}=useContext(addEventResponseContext)

  const[token,setToken]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
setToken(sessionStorage.getItem("token"))
    }
  },[])
  console.log(token);
 const [event,setEvent]=useState({
  eventName:"",
  eventCategory:"",
  date:"",
  eventLocation:"",
  eventDiscription:"",
  eventImage:"",
  limit:"",
  amount:""
 
 }) 
console.log(event);
const img="https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg"
const[preview,setPreview]=useState("")
console.log(preview);
useEffect(()=>{
if(event.eventImage){
  setPreview(URL.createObjectURL(event.eventImage))
}
},[event.eventImage])

const{eventName,eventCategory,date,eventLocation,eventDiscription,eventImage,limit,amount}=event
const evetAdd= async()=>{
  if(!eventName||!eventCategory||!date||!eventLocation||!eventDiscription||!eventImage||!limit||!amount){
    alert("enter all details")
  }
  else{
  
     const reqBody=new FormData()
     reqBody.append("eventName",eventName);
     reqBody.append("eventCategory",eventCategory);
     reqBody.append("date",date);
     reqBody.append("eventLocation",eventLocation);
     reqBody.append("eventDiscription",eventDiscription);
     reqBody.append("eventImage",eventImage);
     reqBody.append("limit",limit)
     reqBody.append("amount",amount)
     
     const reqHeader={
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${token}`
  
    }
     //api call
     const result=await addEventAPI(reqBody,reqHeader)
     console.log(result);
     if(result.status==200){
      console.log(result.data);
setAddEventRes(result.data)
      alert("Event Added")

      setEvent({
        eventName: '',
        eventCategory: '',
        date: '',
        eventLocation: '',
        eventDiscription: '',
        eventImage: '',
        limit:"",
        amount:""
      });
      setPreview("")
    
     }
     else{
      console.log(result.response.data);
     }
  }

   
}
  return (
    <div>

<MDBCard>

      <MDBCardBody className='text-center'>
        <MDBCardTitle></MDBCardTitle>
        <MDBCardText>
<div className="row">
  <div className="col-lg-6 text-center">
  < label className='mt-5' >
  <input style={{display:"none"}}   onChange={(e)=>{setEvent({...event,eventImage:e.target.files[0]})}} type='file'></input>
  <img style={{height:"200px"}}  src={preview?preview:img}alt="" srcset="" />
  </label>
  
  </div>
  <div className="col-lg-6 p-3 text-center">
  <MDBInput label='Event Name' value={event.eventName} onChange={(e)=>{setEvent({...event,eventName:e.target.value})}}   className='m-3' id='formControlLg' type='text' />

  <div className='form-group  '>

        <select value={event.eventCategory} className='form-control mt-3'onChange={(e)=>{setEvent({...event,eventCategory:e.target.value})}}  id='eventCategory'>
          <option value=''>Select category</option>
          <option value='Arts'>Arts </option>
          <option value='Music'>Music</option>
          <option value='Tech'>Tech</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <input type="number" onChange={(e)=>{setEvent({...event,limit:e.target.value})}} className='form-control mt-3' placeholder='Enter Ticket Limits' />
      <MDBInput label='Amount' value={event.amount} onChange={(e)=>{setEvent({...event,amount:e.target.value})}} className='m-3' id='formControlLg' type='text' />

  <input className='form-control mt-3' value={event.date} onChange={(e)=>{setEvent({...event,date:e.target.value})}} type='date'></input>
  <MDBInput label='Event Location' value={event.eventLocation} onChange={(e)=>{setEvent({...event,eventLocation:e.target.value})}} className='m-3' id='formControlLg' type='text' />
  <MDBTextArea label='Event discription'  value={event.eventDiscription} onChange={(e)=>setEvent({...event,eventDiscription:e.target.value})} className='m-3' id='textAreaExample' rows={4} />

  <MDBBtn href='#' className='bg-dark m-3 ' onClick={evetAdd}>Add-Event</MDBBtn>
  </div>
</div>
        </MDBCardText>
      
      </MDBCardBody>
    </MDBCard>

    </div>
  )
}

export default AdminAddEvents