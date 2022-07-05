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
        <Link to="/"> 
        <img src={logo} alt="logo"  className="logo" /> 
        
        </Link>
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
          <Link to='/' className='blogs'>
            <li>Blog</li>
          </Link>
          <Link to='/contact' className='contact'>
            <li>Contact</li>
          </Link>
          <Link to='/' className='press'>
            <li>Press</li>
          </Link>
          <Link to='/' className=''>
            <button className="btn btn-sm mx-2 btnGet">GET INTO TOUCH</button>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross/> : <FaBars color='white' />}
        </button>
      </nav>
    </>
  )
}
export default Navbar