import React from 'react';
import './Contact.css';
import Contactimg from './Contact-Image/contact-us.jpg';

const Contact = () => {
  return (
    <>

      <div className='contact_container'>
        <div className='contact_title'>
          <h1>Drop your <span>Message</span> here !</h1>
          <p>Your message is Important, Feel free to contact us,<br />We are here to help you out.</p>
          <input className='input' type="text" placeholder='Enter your Name...' /><br />
          <input className='input' type="text" placeholder='Your number...' /><br />
          <input className='input' type="text" placeholder='E-Mail adderss...' /><br />
          <textarea className='textarea' placeholder='Your massage...' cols="47" rows="5"></textarea><br />
          <button className='send'>Send Message</button>

        </div>
        <img id='contact_image' className='contact_image' src={Contactimg} alt="contact-image" />
      </div>
      <div className='copyright'>
        <p>© 2023 <span>TenTechnologies.</span> All Rights Reserved |<span> Terms and Conditions.</span></p>
      </div>
    </>
  )
}

export default Contact
