import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Componenets/Home'
import MainHome from './MainHome';
import AdminCourse from './Admin/AdminCourse';

import UserApply from './Componenets/UserApply'
import Events from './Componenets/Events';
import AdminDetails from './Admin/AdminDetails'
import AdminAccept  from './Admin/AdminAccept'
import NavBar from './NavBar';
import Booking from './Componenets/Booking';
import Payment from './Componenets/Payment';
import Login from './Componenets/Login';

import SignUp from './Componenets/SignUp';

import AdminHome from './Admin/AdminHome';
import AdminLogin from './Admin/AdminLogin';
import SchemeDetails from './Admin/SchemeDetails';
import AdminProfile from './Admin/AdminProfile'
import AllEvents from './Componenets/AllEvents'
import AdminCustomer from './Admin/AdminCustomer'
function App() {
  

  return (
    <BrowserRouter>
      <div>
          
          {/* <Login/> */}
          {/* <Signup/> */}
          
        <Routes>
          
        
          <Route path="/" element={<Home/>}/>
         

          <Route path="/nav" element={<NavBar/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/AllEvents" element={<AllEvents/>}/>
          <Route path="/loan" element={<UserApply/>}/>
        
          <Route path="/Payment" element={<Payment/>}/>
          <Route path='/adminHome'element={<AdminHome/>}></Route>
          <Route path="/details" element={<AdminDetails/>}/>
          <Route path="/accept" element={<AdminAccept/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Booking" element={<Booking/>}/>
          <Route path="/schemes" element={<SchemeDetails/>}/>
          <Route path="/adminProfile" element={<AdminProfile/>}/>
          <Route path="/MainHome" element={<MainHome/>}/>        
            <Route path="/customers" element={<AdminCustomer/>}/>
            <Route path="/admincourse" element={<AdminCourse/>}/>
            <Route path="/AdminLogin" element={<AdminLogin/>}/>



        </Routes>
        
      </div>
      </BrowserRouter>
  
  
  )
}

export default App
