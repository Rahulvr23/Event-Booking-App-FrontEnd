import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
  
function Header() {
  const location=useNavigate()
  return (
    <div>

<MDBNavbar light bgColor='light'>
        <MDBContainer>
<h1 className='' ><b className='text-dark'>Event</b><b className='text-danger'>Pluse <i class="fa-sharp fa-solid fa-business-time"></i></b></h1>
        </MDBContainer>

        <div className='text-right p-3'>
<Link to={'/'}>  <button className='btn '><i class=" fs-5 fa-solid fa-right-from-bracket text-danger"></i></button></Link>
{/* <Link to={'/book'}> */}
{/* <button className='btn '><i class="fa-solid fa-ticket text-danger  fs-5"></i></button></Link> */}
</div>



      </MDBNavbar>


    </div>
  )
}

export default Header