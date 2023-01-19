import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './node_modules/bootstrap/dist/js/bootstrap.bundle';
import './Home.css';
import Home from './Home';
import Join from './Join';
import Navbar from './Navbar';
import Service from './Service';
import Contact from './Contact';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

    </>
  );
};

export default App;
