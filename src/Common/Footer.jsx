import React from 'react'
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
    <MDBFooter className='text-center text-white  ' >
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3 bg-muted'>
        © 2024 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          EventPluse.com
        </a>
      </div>
    </MDBFooter>


    </div>
  )
}

export default Footer