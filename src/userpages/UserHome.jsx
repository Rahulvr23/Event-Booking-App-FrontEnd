import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import CategoryArts from '../UserComponents/CategoryArts';
import CategoryMusic from '../UserComponents/CategoryMusic';
import CategoryTech from '../UserComponents/CategoryTech';
import { Link } from 'react-router-dom';
import Header from '../Common/Header';
import CategoryBooking from '../UserComponents/CategoryBooking';

function UserHome() {

  
  return (
    <div>
<Header/>
<MDBCarousel className='p-2'   showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img style={{height:"650px"}} src='https://www.mtu.edu/business/undergraduate/images/cob-students-banner2400.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Experience Innovation: Where Artistry Meets Technology and Music</h5>
          <p>Dive into a world where creativity knows no bounds, where art, technology, and music intersect to ignite your imagination</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img style={{height:"650px"}} src='https://media.istockphoto.com/id/1461816749/photo/a-crowd-of-people-with-raised-arms-during-a-music-concert-with-an-amazing-light-show-black.jpg?s=612x612&w=0&k=20&c=-hdWCLDP5AI9A3mjq3JPMPKhXxJ2P1iItPDFktQHxX8=' className='d-block w-100' alt='...' />

        <MDBCarouselCaption>
          <h5>Discover the Fusion: Where Arts, Technology, and Music Collide</h5>
          <p>Embark on an immersive journey where arts, technology, and music converge, offering an unforgettable blend of innovation and expression</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img style={{height:"650px"}} src='https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2019/09/Kathakali-Kerala-2.jpg?fit=1200%2C777&ssl=1' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Unleash Your Creativity: Exploring the Nexus of Arts, Tech, and Music</h5>
          <p>Step into a realm of boundless possibilities, where the synergy of art, technology, and music fuels moments of inspiration and discovery</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
<h1 className='mt-5 p-2 text-danger'>Browse Events by Category  <i class="fa-solid fa-earth-americas"></i></h1>
<p className=' p-2 text-dark'>Live events for all your entertainment needs</p>
<div className="row">

  <div className="col-lg-4"><Link to={'/arts'}><CategoryArts/></Link></div>


    <div className="col-lg-4"><Link to={'/music'}><CategoryMusic/></Link></div>
    <div className="col-lg-4"><Link to={'/Tech'}><CategoryTech/></Link></div>
</div>

<h1 className='mt-5 p-2 text-danger'>Check Out Your Booking </h1>
<p className=' p-2 text-dark'>Live events for all your entertainment needs</p>
<div className="row">
  <div className="col-lg-4">
    <Link to={'/bookinglist'}>
    <CategoryBooking />
    </Link>
  
    </div>
  <div className="col-lg-4"></div>
  <div className="col-lg-4"></div>
</div>

    </div>
  )
}

export default UserHome