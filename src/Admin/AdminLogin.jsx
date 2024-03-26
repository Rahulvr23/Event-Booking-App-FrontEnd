import React from 'react'
import { useState } from 'react'

import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link, json, useNavigate } from 'react-router-dom';
import { AdminloginAPI } from '../services/allAPI';
function AdminLogin() {
  const location=useNavigate()
  const [admin,setAdmin]=useState({
    adminname:"",
    password:""
  })
  
  console.log(admin);
  const log =async()=>{
    const {adminname,password}=admin
    if(!adminname||!password){
   
      alert("enter details")
    }
    else{
      const result= await AdminloginAPI(admin)
      console.log(result);
      if(result.status==200){
        alert("Login Success")
        sessionStorage.setItem("admin",JSON.stringify(result.data.valid))
        sessionStorage.setItem("token",result.data.token)
   location("/admin-dashboard")
      }
      else{
       alert("enter valid details")
      }
    }


  }
  return (
    <div>
    <div>
           <MDBCard className='m-5 p-5'>
      <MDBCardBody>
        <div className="row"><div className="col-lg-12 text-center">
            
        <h3 className='text-center p-5'>Log In</h3>

<MDBInput className='m-3' onChange={(e)=>{setAdmin({...admin,adminname:e.target.value})}} label='Enter Admin-name' id='form1' type='text' />
<MDBInput className='m-3' onChange={(e)=>{setAdmin({...admin,password:e.target.value})}} label='Enter Password' id='form1' type='text' />

<MDBBtn onClick={log} className='me-1'style={{background:" 	#702963 	 	"}} >
        Log in
      </MDBBtn>

      {/* <Link to={"/adminRegister"} style={{textDecoration:"none"}}>
      <p className='mt-4 text-dark'>New Admin ? Click here to Resgister</p>
      </Link> */}

            </div></div>

      </MDBCardBody>
    </MDBCard>

    </div>









    </div>
  )
}

export default AdminLogin