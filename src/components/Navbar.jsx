import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="header shadow-lg">
      <Link className='text-white text-3xl font-bold' to='/'>Portfolio</Link>
        <ul>
          <li>
              <NavLink to="/" className='link' style={({ isActive }) => ({
                    color: isActive ? "#FFBD39" : "white",
                    textDecoration: isActive ?"underline":'none',
                })}>Home</NavLink>
          </li>
          <li>
              <NavLink to="/about" className='link' style={({ isActive }) => ({
                    color: isActive ? "#FFBD39" : "white",
                    textDecoration: isActive ?"underline":'none',
                })}>About</NavLink> 
          </li>
          <li>
              <NavLink to="/service" className='link' style={({ isActive }) => ({
                    color: isActive ? "#FFBD39" : "white",
                    textDecoration: isActive ?"underline":'none',
                })}>Service</NavLink>
          </li>
          <li>
              <NavLink to="/skill" className='link' style={({ isActive }) => ({
                    color: isActive ? "#FFBD39" : "white",
                    textDecoration: isActive ?"underline":'none',
                })}>My Skill</NavLink>
          </li>
          <li>
              <NavLink to="/project" className='link' style={({ isActive }) => ({
                    color: isActive ? "#FFBD39" : "white",
                    textDecoration: isActive ?"underline":'none',
                })}>Projects</NavLink>
          </li>
          <li>
              <NavLink to="/contct" className='link' style={({ isActive }) => ({
                    color: isActive ? "#FFBD39" : "white",
                    textDecoration: isActive ?"underline":'none',
                })}>Contact</NavLink>
          </li>
          <a href='Resume.pdf' className='download shadow-md shadow-white' download>Download CV</a>
        </ul>
    </div>
  )
}

export default Navbar
