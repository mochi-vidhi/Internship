import React, { useState } from 'react'
import { WiMoonAltWaxingCrescent4 } from "react-icons/wi";
import { FcLightAtTheEndOfTunnel } from "react-icons/fc";
import { FaHouseUser } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import './navbar.css'


export default function Navbar({mode,toggleMode }) {
  const [isMenuOpen,setMenuOpen] = useState(false);
  const handleClick = ()=>{
     setMenuOpen(false);
  }
  return (
    <div className={`navbar ${mode}`} >
        {
          mode === 'light' ? <img src="/kishorLogo2.png" alt="logo" className='logo' /> : <img src="kishorLogo3.png" alt="logo" className='logo'/>
        }
        <button className="hamburger" onClick={()=>setMenuOpen(!isMenuOpen)}><IoIosMenu /></button>

        <ul className={`nav-links ${isMenuOpen ? 'open':''}`} >
            <li onClick={handleClick}><FaHouseUser/><a href="#home"> Home</a></li>
            <li onClick={handleClick}><RiCustomerServiceFill/> <a href="#service">Service</a></li>
            <li onClick={handleClick}><GrGallery/> <a href="#gallery">Gallery</a></li>
            <li onClick={handleClick}>< FaRupeeSign/> <a href="#pricing">Pricing</a></li>
            <li onClick={handleClick}><IoIosContact/> <a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-buttons">
        <button className="fitting-btn" onClick={()=>document.getElementById('contact').scrollIntoView({ behavior: "smooth" })}>Book a Fitting</button>
        <button onClick={toggleMode} className="mode-toggle" > {mode==='light'?<WiMoonAltWaxingCrescent4 />:<FcLightAtTheEndOfTunnel />}</button>
        </div>
    </div>
  )
}
