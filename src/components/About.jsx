import React from 'react'

const About = () => {
  return (
    <div className='layout1'>
      <div className='profileContainer'>
        <img src="girl1.jpg" alt="profile_img" className='profile_image'/>
      </div>
      <div>
        <h1 className='text-[#FFBD39] text-left'>About Me</h1>
        <p>I have a strong foundation in HTML,
            CSS, JavaScript, jQuery, React, Angular, and Node.js. With a
            keen eye for design and a solid grasp of web development
            principles, I thrive in collaborative settings and enjoy working
            with diverse teams. I am dedicated to keeping up with the
            latest trends and expanding my skills in front-end
            development.</p>
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
