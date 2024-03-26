import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  
function CategoryBooking() {
  return (
    <div>  <MDBCard>
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <MDBCardImage src='https://static.vecteezy.com/system/resources/previews/011/736/611/original/ticket-travel-online-booking-service-app-on-smartphone-template-hand-drawn-cartoon-flat-illustration-for-trip-planning-vector.jpg' fluid alt='...' />
      <a>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </a>
    </MDBRipple>
    <MDBCardBody>
      <MDBCardTitle>Check Out Your Booking</MDBCardTitle>
    
    </MDBCardBody>
  </MDBCard></div>
  )
}

export default CategoryBooking