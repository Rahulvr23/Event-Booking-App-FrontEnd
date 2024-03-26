import React, { useState } from 'react'

import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../services/allAPI';

function Log() {
 const [user,setUser]=useState({
  username:"",
  password:""
 })

const location=useNavigate()
 const login= async()=>{
 const{username,password}=user
 
 if(!username||!password){
  alert("Enter details")
 }
 else{
   const result= await loginAPI(user)
console.log(result.data);
   if(result.status==200){
    sessionStorage.setItem("token", result.data.token);
    sessionStorage.setItem("user", JSON.stringify(result.data.validuser)); // Assuming result.data.validuser is an object
    console.log(JSON.parse(sessionStorage.getItem("user")));
    
location("/UserHome")
   }
   else{
    alert("enter valid details")
   }
 }
 }
  return (
    <div>
           <MDBCard className='m-5 p-5'>
      <MDBCardBody>
        <div className="row"><div className="col-lg-12 text-center">
            
        <h3 className='text-center p-5'>Log In</h3>

<MDBInput className='m-3' onChange={(e)=>{setUser({...user,username:e.target.value})}} label='Enter Username' id='form1' type='text' />
<MDBInput className='m-3' onChange={(e)=>{setUser({...user,password:e.target.value})}} label='Enter Password' id='form1' type='text' />

<MDBBtn onClick={login} className='me-1 bg-danger' >
        Log in
      </MDBBtn>

      <Link to={"/register"} style={{textDecoration:"none"}}>
      <p className='mt-4 text-dark'>Not Yet Registered ? Click here to Resgister</p>
      </Link>

            </div></div>

      </MDBCardBody>
    </MDBCard>

    </div>
  )
}

export default Log