import React from 'react'
import { useState } from 'react';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import{Link, useNavigate} from 'react-router-dom'
import { registerAPI } from '../services/allAPI';

function Register() {
  const location=useNavigate()
   //state creation
   const [users,setUser]=useState({
    username:"",
    email:"",
    password:""
  })

  //Register function
  const registerData=async()=>{
const {username,email,password}=users
if(!username||!email||!password)
{
alert("Enter details")
}
else{
  //api call
  const result=await registerAPI(users)
  console.log(result.data);
  alert(result.data)
  location('/')

}
  }
  console.log(users);
  return (
    <div><div className="row">
        <div className="col-lg-12 text-center mt-5 text-dark "><h3><b>Welcome to EventPluse</b></h3></div></div>
        
        <div className="row">
            <div className="col-lg-6">
            <div className="col-lg-6">
            <img className='p-4 mt-4' style={{height:"500px"}} src="https://media.licdn.com/dms/image/D5612AQGDjW9-2egqgg/article-cover_image-shrink_600_2000/0/1675233513507?e=2147483647&v=beta&t=ssd26VEEG6p2N69PDzFwZ2koN73iH_kmthvVQ8O6nvw" alt="" srcset="" />
            </div>
            </div>
            <div className="col-lg-6 mt-3">




            <MDBCard className='m-5 p-5'>
      <MDBCardBody>
        <div className="row">
           
            
            <div className="col-lg-12 text-center">
            
        <h3 className='text-center p-5'>Register</h3>

<MDBInput className='m-3' value={users.username}onChange={(e)=>setUser({...users,username:e.target.value})} label='Enter Username' id='form1' type='text' />
<MDBInput className='m-3' value={users.email} onChange={(e)=>setUser({...users,email:e.target.value})} label='Enter E-mail' id='form1' type='text' />
<MDBInput className='m-3' value={users.password} onChange={(e)=>setUser({...users,password:e.target.value})} label='Enter Password' id='form1' type='text' />
<MDBBtn className='me-1 bg-danger' onClick={registerData} color='warning' style={{background:" 	#702963 	 	"}}>
        Register
      </MDBBtn>
      <Link to={"/"}  style={{textDecoration:"none"}}>
      <p className='mt-4 text-dark'>Have an account ? Click here to Login</p>
      </Link>
     

            </div>

            </div>

      </MDBCardBody>
    </MDBCard>
            </div>
        </div>
        
        </div>
  )
}

export default Register