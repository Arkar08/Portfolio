// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-14 bg-gradient-to-r from-gray-400 to-white-500 flex justify-center items-center position: relative">
      <div>
        <Link to='/' className='m-2 p-2 text-xl'>Home</Link>
        <Link to='/about' className='m-2 p-2 text-xl'>About</Link>
        <Link to='/projects' className='m-2 p-2 text-xl'>Projects</Link>
        <Link to='/contact' className='m-2 p-2 text-xl'>Contact</Link>
      </div>
      <div className='position: absolute right-10'>
        <Button variant="contained">Download CV</Button>
      </div>
    </div>
  )
}

export default Navbar
