import React from 'react'

const About = () => {
  return (
    <div className='layout1'>
      <div>
        <img src="girl1.jpg" alt="profile_img" className='profile_image'/>
      </div>
      <div>
        <h1 className='text-white font-bold text-center'>About Me</h1>
        <p>I'm Frontend Developer with Reactjs, Angular And Node.js. </p>
        <div className='aboutText'>
          <div>
            <h3 className='text'>Name:</h3>
            <h3 className='text'>Date of Birth:</h3>
            <h3 className='text'>Address:</h3>
            <h3 className='text'>Email:</h3>
            <h3 className='text'>Phone Number</h3>
          </div>
          <div>
            <h4 className='text1'>Soe Arkar Maung</h4>
            <h4 className='text1'>October 8 2000</h4>
            <h4 className='text1'>Yangon</h4>
            <h4 className='text1'>kar428370@gmail.com</h4>
            <h4 className='text1'>09791324144</h4>
          </div>
        </div>
        <div className='downloadContainer'>
          <a href='Resume.pdf' className='download2 shadow-md shadow-white' download>Download CV</a>
        </div>
      </div>
    </div>
  )
}

export default About
