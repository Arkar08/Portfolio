import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const postContact = () =>{
    navigate("/contact")
  }

  return (
    <div className='home'>
        <div className='profileText'>
            <h3 className='text-[#FFBD39] text-xl'>Hello</h3>
            <h1 className='text-white'>I'm a <span className='text-[#FFBD39]'>Mid-Level Developer</span></h1>
            <h1 className='text-white'>And<span className='text-[#FFBD39]'> Freelance Developer.</span></h1>
            <h1 className='text-white'>Based in <span className='text-[#FFBD39]'>Yangon.</span></h1>
            <div className='btnGroup'>
              <button className='download shadow-white shadow-md' onClick={postContact}>Hire Me</button>
              <button className='download1 shadow-white shadow-md'>Download CV</button>
            </div>
        </div>
        <div>
          <img src="girl1.jpg" alt="profile_img" className='profile_image'/>
        </div>
    </div>
  )
}

export default Home
