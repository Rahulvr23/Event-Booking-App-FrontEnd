import React from 'react'
import Log from './Log'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Home() {
  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer>
<h1 className='' ><b className='text-dark'>Event</b><b className='text-danger'>Pluse <i class="fa-sharp fa-solid fa-business-time"></i></b></h1>
        </MDBContainer>



      </MDBNavbar>
<div className="row">
    <div className="col-lg-6 p-5"><h3 className=' '>
        <b className='text-dark ' >Empowering Your Events, One Experience at a Time</b></h3>

        <div className="row"><div className="col-lg-12 m-5 d-flex allign-items-center p-5">      
          <img className='p-1' src="https://eventplus.gr/wp-content/uploads/2022/09/500x500-gl.png" style={{height:"400px"}} alt="" srcset="" /></div></div>

        </div>
    <div className="col-lg-6">
      <Log/>
    </div>
</div>


    </div>
  )
}

export default Home