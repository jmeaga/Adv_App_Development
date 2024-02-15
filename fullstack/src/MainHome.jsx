import React from 'react';
import { Link } from 'react-router-dom';
import video from './ideo/video.mp4';

import './MainHome.css';

function MainHome() {
  return (
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src="rain.mp4" type="video/mp4" />
      </video>
      <div className="navbar">
      
        <button className="navbar-button"><Link to="/Login">Login/SignUp</Link></button>
        <button className="navbar-button"><Link to="/About">About</Link></button>
        <button className="navbar-button"><Link to="/contact">Contact_Us</Link></button>
        
</div>
      <div className='bgContainer'>
        <div className='overlay11'>
          <video src={video} autoPlay loop muted />
          <div className="video-overlay-text">
            <h2>Creativity & innovation is to events, what the heart & soul is to the living</h2>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default MainHome;