import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AdminAddEvents from './AdminAddEvents'
import AdminUpdateEvents from './AdminUpdateEvents'
import EventTicket from './EventTicket';
function AdminDash() {
  const admin= JSON.parse(sessionStorage.getItem("admin"))
  console.log(admin);

  return (
    <div>

<h1 className='p-4'>Welcome {admin.adminname} </h1>

<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 p-5 "
    >
      <Tab eventKey="home" title="Add Events" >
     <AdminAddEvents/>
      </Tab>
      <Tab eventKey="profile" title="Update Events">
 <AdminUpdateEvents/>
      </Tab>
      <Tab eventKey="tickets" title="Event Tickets">
<EventTicket/>
      </Tab>
  
    </Tabs>














    </div>
  )
}

export default AdminDash