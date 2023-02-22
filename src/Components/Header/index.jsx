import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='header'>
      <h1>Shoppe</h1>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/promotion"}>promotion</Link>
      </ul>
    </div>
  )
}

export default Header