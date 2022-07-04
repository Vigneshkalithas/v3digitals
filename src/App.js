import React from "react"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Blog from "./component/Blog"
import Contact from "./component/Contact"
import Services from "./component/Services"
import Press from "./component/Press"
import { Routes, Router, Route } from "react-router-dom";


//npm install react-router-dom@5

function App() {
  return (
  
     <div className="App">
      <div className="">
        <Navbar/>
      </div>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="contact" element={<Contact />} />

        <Route path="press" element={<Press/>} />

        {/* // <Route path="*" element={<NotFound />} /> */}
      </Routes>

      </div>
     
      
    </div>


  
  )
}

export default App