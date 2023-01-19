import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Home from './Home';
import Contact from './Contact';

const Navbar = () => {
  return (
    <>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 max-auto'>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink exact className="navbar-brand" to="/">TenTechnologies</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
                    <li className="nav-item ml-5">
                      <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item ml-5">
                      <NavLink className="nav-link" to="/service">Services</NavLink>
                    </li>
                    <li className="nav-item ml-5">
                      <NavLink className="nav-link" to="/join">Join Us</NavLink>
                    </li>
                    <li className="nav-item ml-5">
                      <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>

                  </ul>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar;
