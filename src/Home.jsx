import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Rocket from './Image/Rocket.png';
import Sky from './Image/sky.png';

const Home = () => {
  return (
    <>
      <div className='home_container'>
        <div className='home_title'>
          <h1>Grow your business with <br /><span>TenTechnologies</span></h1>
          <p>You Create Dreams We will make that Happn.<br />Business and Network.</p>
          <NavLink className='getstart' to="/service">Get Start</NavLink>
          <img className='skyback' src={Sky} alt="Sky" />
          <img id='rocket' className='rocket' src={Rocket} alt="Rocket" />
        </div>
      </div>
      <div className='copyright'>
        <p>© 2023 <span>TenTechnologies.</span> All Rights Reserved |<span> Terms and Conditions.</span></p>
      </div>
    </>
  )
}

export default Home;
