import React from 'react'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import Header from '../Common/Header';
function Tech() {
  return (
    <div>
      <Header/>
            <div className='m-5'>
< h3 className='text-dark '>Discover the Diversity: Our Arts Event Lineup Unveiled</h3>
</div>
  <div className="row">
    <div className="col-lg-6 p-5">         <MDBCard>
      <MDBCardImage className='p-5' position='top' alt='...' style={{height:"500px"}} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tech-event-poster-motion-design-template-8336d288fcc0d6ff912c8b88b4b5c420_screen.jpg?ts=1567082380 ' />
      <MDBCardBody>
        <MDBCardTitle>Event title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Location: Kochi <i class="fa-solid fa-location-dot"></i></MDBListGroupItem>
        <MDBListGroupItem>Date: 23/4/24 <i class="fa-solid fa-calendar-days"></i></MDBListGroupItem>
        <MDBListGroupItem>Time: 7:30 pm <i class="fa-regular fa-clock"></i> </MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
      <MDBBtn className='bg-danger'>Book Now  <i class=" p-1 fs-5 fa-solid fa-ticket"></i></MDBBtn>

      </MDBCardBody>
    </MDBCard></div>
    <div className="col-lg-6 p-5">   </div>
  </div>
    </div>
  )
}

export default Tech