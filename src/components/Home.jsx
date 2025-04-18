import React from 'react'

const Home = () => {

  return (
    <div className='layout'>
        <div className='profileText'>
            <h3 className='text-[#FFBD39] text-2xl'>Hello,</h3>
            <h1 className='text-white'>I'm a <span className='text-[#FFBD39]'>Mid-Level Web-Developer</span></h1>
            <h1 className='text-white'>And<span className='text-[#FFBD39]'> Freelance Developer.</span></h1>
            <h1 className='text-white'>Based in <span className='text-[#FFBD39]'>Yangon.</span></h1>
            <div className='btnGroup'>
              <a href='#contact' className='download shadow-white shadow-md'>Hire Me</a>
              <a href='Resume.pdf' className='download1 shadow-white shadow-md' download>Download CV</a>
            </div>
        </div>
        <div>
          <img src="girl1.jpg" alt="profile_img" className='profile_image'/>
        </div>
    </div>
  )
}

export default Home
