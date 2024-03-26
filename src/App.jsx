
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Common/Footer';
import Header from './Common/Header';

import Home from './User/Home';
import Register from './User/Register';
import UserHome from './userpages/UserHome';
import AdminReg from './Admin/AdminReg';
import AdminHome from './Admin/AdminHome';
import AdminDash from './Admin-pages/AdminDash';
import Arts from './userpages/Arts';
import Music from './userpages/Music';
import Tech from './userpages/Tech';
import Payment from './userpages/Payment';

import Cancel from './userpages/Cancel';
import BookingList from './userpages/BookingList';


function App() {
  return (
    <div className="App">


<Routes>
  <Route path="/" element={  <Home />}/>
<Route path='/register' element={<Register/>}/>
<Route path='/UserHome' element={<UserHome/>}/>
<Route path='/admin' element={<AdminHome/>}/>
<Route path='/adminRegister'element={<AdminReg/>}/>
<Route path='/admin-dashboard' element={<AdminDash/>}/>
<Route path='/arts' element={<Arts/>}/>
<Route path='/music' element={<Music/>}/>
<Route path='/Tech' element={<Tech/>}/>
<Route path='/payment' element={<Payment/>}/>
<Route path='/cancel' element={<Cancel/>}/>

<Route path='/bookinglist' element={<BookingList/>}/>

</Routes>

<Footer/>
    </div>
  );
}

export default App;
