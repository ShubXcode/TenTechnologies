import React from 'react';
import './Join.css';
import Aboutus from './About-Image/Aboutus-img.jpg';
import linkedin from './Social-media/linkedin.png'
import github from './Social-media/github.png'
import instagram from './Social-media/instagram.png'
import twitter from './Social-media/twitter.png'

const About = () => {
  return (
    <>

      <div className='about_container'>
        <div className='about_title'>
          <h1>Be a part of our community <br /><span>TenTechnologies</span></h1>
          <p>What are you waiting for, You are just one click away to Join Us,<br />Follow us on our <span>Social Nework.</span></p>
          <div className='social_media'>
            <a href="https://www.linkedin.com/in/shubhjeet-chakraborty-25a0821b6/?originalSubdomain=in" target="_blank"><img src={linkedin} alt="linkedin" /></a>
            <a href="#"><img src={instagram} alt="instagram" /></a>
            <a href="https://twitter.com/ShubXcode" target='_blank'><img src={github} alt="github" /></a>
            <a href="https://twitter.com/ShubXcode" target='_blank'><img src={twitter} alt="twitter" /></a>
          </div>
        </div>
        <img id='aboutus' className='aboutus' src={Aboutus} alt="About-us" />
      </div>

      <div className='copyright'>
        <p>© 2023 <span>TenTechnologies.</span> All Rights Reserved |<span> Terms and Conditions.</span></p>
      </div>
    </>
  )
}

export default About;
