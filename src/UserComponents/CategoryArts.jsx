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
function CategoryArts() {

  return (
    <div>

<MDBCard className='p-2 mt-5'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://static.vecteezy.com/system/resources/previews/024/002/354/large_2x/theyyam-face-traditional-makeup-art-from-kerala-india-wallpapers-ai-generated-photo.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Arts and Culture</MDBCardTitle>
        <MDBCardText>
        Art exhibitions, museum tours, theater performances, cultural festivals, etc.
        </MDBCardText>
      
      </MDBCardBody>
    </MDBCard>


    </div>
  )
}

export default CategoryArts