import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import logo from "./logo.svg"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        {/* <h3 className='logo'>Logo</h3> */}
        <img src={logo} alt="logo" className="logo" /> 
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/services' className='service'>
            <li>Services</li>
          </Link>
          <Link to='/blogs' className='blogs'>
            <li>Blog</li>
          </Link>
          <Link to='/contact' className='contact'>
            <li>Contact</li>
          </Link>
          <Link to='/press' className='press'>
            <li>Press</li>
          </Link>
          <Link to='' className=''>
            <li><button className="btn btn-danger">GET INTO TOUCH</button></li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar