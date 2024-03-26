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
function CategoryMusic() {
  return (
    <div>

<MDBCard className='p-2 mt-5'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://newsroom.churchofjesuschrist.org/media/640x480/youth_music_and_arts_festival_artwork.jpeg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Music Concerts</MDBCardTitle>
        <MDBCardText>
        Pop, rock, classical, jazz, electronic, etc
        </MDBCardText>
        </MDBCardBody>
    </MDBCard>

    </div>
  )
}

export default CategoryMusic