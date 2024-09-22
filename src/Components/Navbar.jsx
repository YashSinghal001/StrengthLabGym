import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  function ChangeBackground()
  {
      var scrollvalue=window.scrollY;
      var navbar=document.querySelector('.navbar');
      if(scrollvalue < 100)
      {
        navbar.classList.remove('chngecolor')
      }
      else
      {
        navbar.classList.add('chngecolor')
  
      }
      // console.log(scrollvalue);
  }
  
  window.addEventListener('scroll', ChangeBackground);

  
  return (
    <div>
      
      <nav  className="navbar navbar-expand-lg  py-lg-0  fixed-top">
        <div className="container-fluid px-4">
            {/*  */}
      <a href="">      <img src={logo} className='logo1'  alt=""/> <span className=' text-white fw-semibold fs-4'>Strength Lab</span></a>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#top-navbar" aria-controls="top-navbar">
                <i className="lni lni-grid-alt" style={{color:"white"}}></i>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="top-navbar" aria-labelledby="top-navbarLabel">
                {/* <!-- Navigation Bar Content --> */}
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#top-navbar" aria-controls="top-navbar">
                    <div className="d-flex justify-content-between p-2">
                        {/* // */}
                        <img src={logo} width={"80px"} alt=""/>
                        <i className="lni lni-cross-circle" style={{color:"white"}}></i>
                    </div>
                </button>
                <ul className="navbar-nav ms-lg-auto p-2 p-lg-0">
                    <li className="nav-item px-3 px-lg-0 py-1 py-lg-4">
                        <Link className="nav-link" to="/">
                        <div className="box bar">
                          Home
                        </div>
                        </Link> 
                    </li>
                    <li className="nav-item px-3 px-lg-0 py-1 py-lg-4">
                        <Link className="nav-link" to="/about">
                        <div className="box bar">
                          About
                        </div>
                        </Link> 
                    </li>
                    {/* <li className="nav-item px-3 px-lg-0 py-1 py-lg-4">
                        <Link className="nav-link" to="/">
                        <div className="box bar">
                          Gallery
                        </div>
                        </Link> 
                    </li> */}
                    <li className="nav-item px-3 px-lg-0 py-1 py-lg-4">
                        <Link className="nav-link" to="/schedule">
                        <div className="box bar">
                        Schedule
                        </div>
                        </Link> 
                    </li>
                 
                    <li className="nav-item px-3 px-lg-0 py-1 py-lg-4">
                        <Link className="nav-link" to="/blog">
                        <div className="box bar">
                          Blog
                        </div>
                        </Link> 
                    </li>
                    {/* <li className="nav-item px-3 px-lg-0 py-1 py-lg-4">
                        <Link className="nav-link" to="/">
                        <div className="box bar">
                          Pricing
                        </div>
                        </Link> 
                    </li> */}
                    <li className="nav-item px-3 px-lg-0 py-1 py-lg-4">
                        <Link className="nav-link" to="/classses">
                        <div className="box bar">
                          Classes
                        </div>
                        </Link> 
                    </li>
                    <li className="nav-item px-3 px-lg-0 py-1 py-lg-4">
                        <Link className="nav-link" to="/contact">
                           <div className="box bar">
                          Contact
                        </div>
                        </Link> 
                    </li>

                    <li className="nav-item px-3 px-lg-0 py-1 py-lg-4">
                        <Link className="nav-link" to="/login">
                           <div className="box bar">
                           Login
                        </div>
                        </Link> 
                    </li>

                    <li className="nav-item px-3 px-lg-0 py-1 py-lg-4">
                        <Link className="nav-link" to="/signup">
                           <div className="box bar">
                           Signup
                        </div>
                        </Link> 
                    </li>


                </ul>
            </div>
        </div>
    </nav>



    </div>
  )
}
