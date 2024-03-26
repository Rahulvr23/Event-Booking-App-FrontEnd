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
import {getMusicAPI} from '../services/allAPI'
import { useEffect,useState } from 'react';
import { baseUrl } from '../services/baseUrl';
import TicketModal from '../UserComponents/TicketModal';
import Header from '../Common/Header';

function Music() {
  <Header/>
  const [allMusic, setAllMusic] = useState([]);

    useEffect(() => {
        const musicEvents = async () => {
            try {
                const music = await getMusicAPI();
                console.log(music);
                setAllMusic(music.data);
            } catch (error) {
                console.error('Error fetching music:', error);
            }
        };

        musicEvents();
    }, []);

    console.log(allMusic);
  return (

    <div>
    
    <div className="row">
      <div className="col-lg-6 p-5 ">< h3 className='text-danger '>Discover the Diversity: Our Music Event Lineup Unveiled <i class="fa-solid fa-music"></i></h3>
<p className='text-dark'>Ready to secure your spot at one of our arts events? Booking is quick and easy!  
</p></div>
      <div className="col-lg-6"></div>
    </div>
<div className="row ">
{         
     allMusic?   allMusic.map((item)=>(
     
          <div className="col-lg-6 p-5 ">       <MDBCard>
    
          <MDBCardImage
  className='p-5' 
  position='top' 
  alt='' 

  style={{height:"500px"}} 
  src={`${baseUrl}/uploads/${item?.eventImage}`} 
/>


            <MDBCardBody>

              <MDBCardTitle className='text-dark'>{item?.eventName}</MDBCardTitle>
              <MDBCardText className=''>
     {item?.eventDiscription}
              </MDBCardText>
            </MDBCardBody>
            <MDBListGroup flush>
              <MDBListGroupItem>Location: {item?.eventLocation} <i class="fa-solid fa-location-dot"></i></MDBListGroupItem>
              <MDBListGroupItem>Date: {item?.date} <i class="fa-solid fa-calendar-days"></i></MDBListGroupItem>
              <MDBListGroupItem>Available Tickets: {item?.limit} </MDBListGroupItem>
            </MDBListGroup>
            <MDBCardBody>
        <TicketModal event={item}/>
      
            </MDBCardBody>
          </MDBCard>   </div>

    
        )):<div className='text-center'>No Events Listed</div>
      }
      </div>
    </div>
  )
}

export default Music