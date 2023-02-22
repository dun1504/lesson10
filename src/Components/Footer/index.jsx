import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className='footer'> 
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/promotion"}>promotion</Link>
    </div>
  )
}

export default Footer