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
function CategoryTech() {
  return (
    <div>
  <MDBCard className='p-2 mt-5'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://www.mtu.edu/it/images/student-resources-card800.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Tech & Business</MDBCardTitle>
        <MDBCardText>
        Tech conferences, business seminars, entrepreneurship workshops, etc
        </MDBCardText>
     
      </MDBCardBody>
    </MDBCard>

    </div>
  )
}

export default CategoryTech