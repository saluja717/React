import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import corona from './corona.png'
 const Menu = () => {
    return (
        <>
   <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid coloring">
    <a className="navbar-brand" href="#Home"><img src={corona} className="img-fluid corona text-white" alt="header_image"/><span className="maker_of_covid">Covid 19</span></a>
    <button className="navbar-toggler icon " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end mr-lg-4 " id="navbarNav">
      <ul className="navbar-nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link text-center text-white" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-center" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center text-white"  href="#Symptoms">Symptoms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center text-white" href="#Contact" tabindex="-1" aria-disabled="true">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}

export default Menu;
