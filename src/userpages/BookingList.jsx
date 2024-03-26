// UserDetails.js

import React, { useEffect, useState } from 'react';
import { userBookingAPI } from '../services/allAPI';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Header from '../Common/Header';
function UserDetails() {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const hi=sessionStorage.getItem("user")
                console.log(hi);
                const userId = JSON.parse(sessionStorage.getItem("user"))._id;
                console.log(userId);
                const userDetails = await userBookingAPI(userId);
                setUserDetails(userDetails.data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchUserDetails();
    }, []);
console.log(userDetails);
    return (
        <div>
   
             <Header/>
             <h3 className='mt-5 p-2'>Booking History</h3>
                    <MDBTable>
                    <MDBTableHead >
                      <tr>
                        <th scope='col'>SL</th>
                        <th scope='col'>Event</th>
                        <th scope='col'>Tickets</th>
                        <th scope='col'>Name</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                    {
                        userDetails?.map((item,index)=>(
                            <tr>
                            <th scope='row'>{index+1}</th>
                            <td>{item.eventName}</td>
                            <td>{item.number}</td>
                            <td>{item.personName}</td>
                          </tr>
                        ))
                    }
                    
                    </MDBTableBody>
                  </MDBTable>
               
        
        </div>
    );
}

export default UserDetails;
