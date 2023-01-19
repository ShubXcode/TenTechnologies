import React from 'react';
import './Service.css';
import service from './Service-img/servicemain.jpg';
import webdev from './Service-img/webdev.jpg';
import seo from './Service-img/seo.jpg';
import data from './Service-img/data.jpg';
import youtube from './Service-img/youtube.jpg';
import growth from './Service-img/growth.jpg';
import stock from './Service-img/stock.jpg';
import { Link } from 'react-scroll';

const Service = () => {
  return (
    <>
      <div className='service_container'>
        <div className='service_title'>
          <h1>We provide you the best <br /><span>Services</span></h1>
          <p>Just one click away to grow your Business and Network,<br />Give us a chance to Help you. </p>
          <Link smooth={true} duration={1000} className='letgo' to="our_service">Let's Go</Link>
          <img className='servicemain' src={service} alt="service" />
        </div>
      </div>


      {/* Service menu start */}

      <h1 id='our_service' className='our_service'>Explore Our <span>Services</span></h1>
      <div className='card_box'>
        <div class="card">
          <img src={webdev} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Web Development</h5>
            <p class="card-text">Create your own Website that will help you to grow your Network.</p>
            <a href="#" class="btn btn-primary">Get Started</a>
          </div>
        </div>

        <div class="card">
          <img src={seo} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">SEO Analytics</h5>
            <p class="card-text">Rank your Website on Top in the search result to have more users.</p>
            <a href="#" class="btn btn-primary">Get Started</a>
          </div>
        </div>

        <div class="card">
          <img src={data} id='data' class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Data Analytics</h5>
            <p class="card-text">Some quick example text to build on the card Lorem ipsum dolor sit amet.</p>
            <a href="#" class="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>

      <div className='card_box'>
        <div class="card">
          <img src={youtube} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Growth YouTube</h5>
            <p class="card-text">Grow your channel to get more Engagement and Reach.</p>
            <a href="#" class="btn btn-primary">Get Started</a>
          </div>
        </div>

        <div class="card">
          <img id='growth' src={growth} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Business Growth</h5>
            <p class="card-text">Make your Business more profitable and Scalable bhai kya kar raha tu.</p>
            <a href="#" class="btn btn-primary">Get Started</a>
          </div>
        </div>

        <div class="card">
          <img src={stock} id='stock' class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Manage SIP</h5>
            <p class="card-text">Let your money work for you, Manage your Systematic Investment Plan.</p>
            <a href="#" class="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
      <div className='service_copyright'>
        <p>© 2023 <span>TenTechnologies.</span> All Rights Reserved |<span> Terms and Conditions.</span></p>
      </div>

    </>
  )
}

export default Service;
