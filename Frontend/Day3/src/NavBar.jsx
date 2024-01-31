import React, { useEffect } from 'react';
import "./Navbar.css";
import { Avatar, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const gotoProfile = () => {
    navigate('/profile');
  }

  // Placeholder for checking login status
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('black');
      } else {
        nav.classList.remove('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='headgreen'>
      <div className="responsive-bar">
        <div className="logo">
          <img src="https://www.shutterstock.com/image-vector/financial-investments-money-savings-concept-600nw-2042511212.jpg" alt="logo" />
        </div>
        <div className="menu">
          <h4>Menu</h4>
        </div>
      </div>
      <nav>
        <div className="logo">
          <img src="data:image/jpeg;base64,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" alt="logo" />
        </div>
        <ul>
          <li><a href="/MainHome">Home</a></li>
       
          <li><a href="/Events">All Events</a></li>
          <li><a href="/AllEvents">Booking</a></li>
          <li><a href="/Payment">My payment</a></li>
          </ul>
         
         
              <Button class='txt' href="/MainHome">LOGOUT</Button>
          
       
        
      </nav>
    </header>
  );
};

export default NavBar;
//   <li><a href="/AllEvents">my booking</a></li>