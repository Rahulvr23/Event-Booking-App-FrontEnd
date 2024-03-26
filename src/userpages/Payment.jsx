
import React, { useEffect, useState } from 'react';
import { paymentsuccessAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
function Payment() {
  const location = useNavigate();

  // Retrieve stored data from session storage
  const storedDetails = sessionStorage.getItem("details");

  // Define the success function
  const success = async () => {
    if (storedDetails) {
      // Parse the stored JSON string back into an object
      const details = JSON.parse(storedDetails);
      const { eventName, personName, number, userId, eid } = details;

      try {
        const result = await paymentsuccessAPI(details);
        console.log(result);
        sessionStorage.removeItem("details");
        location('/UserHome'); // Navigate to UserHome after successful payment
      } catch (error) {
        console.error('Error', error);
      }
    } else {
      console.log("No data stored in session storage.");
    }
  };

  return (
    <div className='text-center p-5'>
      <MDBBtn className='bg-white' onClick={success}>
      <MDBCard>
      <MDBCardImage style={{height:"200px"}} src='https://thumbs.dreamstime.com/b/payment-successful-template-vector-art-success-ful-206586442.jpg' alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
       <h4>Click here to go back</h4>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
      </MDBBtn>
    </div>
  );
}

export default Payment;
