import React, { useState } from 'react';
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
import Log from '../User/Log';
import { bookAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js';


function TicketModal({event}) {

const paylocation=useNavigate()
  console.log(event);
  const id=event._id


  const [ticket,setTicket]=useState({
    eventName:event.eventName,
    personName:"",
    number:1,
    amount:event.amount
    

  })

  const total=event.amount*ticket.number
  
  console.log(ticket);
  const token=sessionStorage.getItem("token")
  console.log(token);
  const reqHeader={
    "Authorization":`Bearer ${token}`
  }

const BookTicket=async()=>{
  const stripe = await loadStripe("pk_test_51OoJOESHEJiRQ9v9AdMM9FdSSvIDwtmbsM7YqtaXO95T2AIPDvF4zxqoqlUVsRUOWjOgPeJzgooCcA6SOanLVyip00I5lc53lQ");

  const { eventName, personName, number } = ticket;

  if (!eventName || !personName || !number) {
    alert("Please enter all details");
  } else {
    try {
      const session = await bookAPI(id, ticket, reqHeader);
      if(session.status==202){
        alert("Tickets Unavailable")
      }
  
      else if (session.status === 200) {
        // Extract session ID and additional data from the response
        const { id: sessionId, eventName, personName, number, userId, eid } = session.data;
        sessionStorage.setItem("details", JSON.stringify({ eventName, personName, number, userId, eid }));
  
        const result = await stripe.redirectToCheckout({
          sessionId: sessionId
        });
  
        if (result.error) {
          // Handle any errors during checkout redirection
          console.error("Error redirecting to checkout:", result.error);
        }
      } else {
        alert("Failed to create session for checkout");
      }
    } catch (error) {
      console.error("Error booking tickets:", error);
    }
  }
}

    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);
  return (
    <div>

<MDBBtn className='bg-danger' onClick={toggleOpen}>BOOK NOW  <i class=" p-1 fs-5 fa-solid fa-ticket"></i></MDBBtn>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle></MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <h3 className='text-center p-3'>{event.eventName}</h3>
                <input type="text" onChange={(e)=>{setTicket({...ticket,personName:e.target.value})}} placeholder='Name' className='form-control ' />
                <input type="number"  value={ticket.number} // Use 'value' instead of 'defaultValue' to make it controlled
  onChange={(e) => { 
    const newValue = parseInt(e.target.value); // Parse the input value as an integer
    const validValue = newValue > 0 ? newValue : 1; // Ensure the value is at least 1
    setTicket({...ticket, number: validValue}); // Update the state with the valid value
  }}  className='form-control mt-3' placeholder='Number of People' name="" id="" />
            {
              <div className='text-center p-4'>Total Amount:{total} </div>
            }
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn className='text-danger' color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn className='bg-danger' onClick={BookTicket}> Proceed to Pay</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default TicketModal