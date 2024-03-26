import React from 'react'
import AdminLogin from './AdminLogin'

function AdminHome() {
  return (
    <div>

<div className="row">
    <div className="col-lg-6 p-5"><h3 className=' '>
        <b className='text-dark ' >Welcome Admin</b></h3>

        <div className="row"><div className="col-lg-12 m-5 d-flex allign-items-center p-5">      
          <img className='p-1' src="https://sales.webtel.in/images/Login-page-character1.png" style={{height:"300px"}} alt="" srcset="" /></div></div>

        </div>
    <div className="col-lg-6">
      <AdminLogin/>
    </div>
</div>












    </div>
  )
}

export default AdminHome