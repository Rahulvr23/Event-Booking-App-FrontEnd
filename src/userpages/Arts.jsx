import React, { useEffect,useState } from 'react'
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
import { getArtAPI } from '../services/allAPI';
import { baseUrl } from '../services/baseUrl';
import TicketModal from '../UserComponents/TicketModal';
import Header from '../Common/Header';
function Arts() {
  const [allArt, setAllArt] = useState([]);

  useEffect(() => {
      const musicEvents = async () => {
          try {
              const music = await getArtAPI();
              console.log(music);
              console.log(music?.data);
              setAllArt(music?.data)
              
           
          } catch (error) {
              console.error('Error fetching music:', error);
          }
      };

  

      musicEvents();
  }, []);


  return (
    <div>
      <Header/>
<div className='m-5'>
< h3 className='text-danger '>Discover the Diversity: Our Arts Event Lineup Unveiled <i class="fa-solid fa-palette"></i></h3>
<p className='text-dark'>Ready to secure your spot at one of our arts events? Booking is quick and easy!</p>
</div>
  <div className="row">

    {
      allArt?.map((item)=>(
        <div className="col-lg-6 p-5">         <MDBCard>
        <MDBCardImage className='p-5' position='top' alt='...' style={{height:"500px"}} src={`${baseUrl}/uploads/${item?.eventImage}`} />
        <MDBCardBody>
          <MDBCardTitle>{item?.eventName}</MDBCardTitle>
          <MDBCardText>
          {item?.eventDiscription}
          </MDBCardText>
        </MDBCardBody>
        <MDBListGroup flush>
          <MDBListGroupItem>Location: {item?.eventLocation} <i class="fa-solid fa-location-dot"></i></MDBListGroupItem>
          <MDBListGroupItem>Date: {item?.date} <i class="fa-solid fa-calendar-days"></i></MDBListGroupItem>
          <MDBListGroupItem className=''>Fair:  <b className='text-dark'>${item?.amount}</b> 
</MDBListGroupItem>
<MDBListGroupItem>Available Tickets: {item?.limit} </MDBListGroupItem> 
        </MDBListGroup>
        <MDBCardBody>
        {/* <MDBBtn className='bg-danger'>Book Now </MDBBtn> */}
  <TicketModal event={item}/>
        </MDBCardBody>
      </MDBCard></div>
    
      ))
    }
  
  </div>
    </div>
  )
}

export default Arts