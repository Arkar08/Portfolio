import React, { useEffect, useState } from 'react'


const Navbar = () => {

  const [activeSection,setActiveSection] = useState('home')


  useEffect(()=>{
    const handleScroll = ()=>{
      const sections = document.querySelectorAll('section')
      sections.forEach((section)=>{
        const rect = section.getBoundingClientRect()
        if(rect.top <= 110 && rect.bottom >= 100){
          setActiveSection(section.id)
        }
      })
    }
    window.addEventListener('scroll',handleScroll)
    return ()=> window.removeEventListener('scroll',handleScroll)
  },[])

 


  return (
    <div className="header shadow-lg">
      <a  href='#home' className='text-[#FFBD39] text-3xl font-bold'>Portfolio</a>
        <ul>
          <li>
              <a href="#home" className={activeSection === 'home' ? 'isActive':'link'}>Home</a>
          </li>
          <li>
              <a href="#about" className={activeSection === 'about' ? 'isActive':'link'} >About</a>  
          </li>
          <li>
              <a href='#service' className={activeSection === 'service' ? 'isActive':'link'}>Service</a>
          </li>
          <li>
              <a href='#mySkill' className={activeSection === 'mySkill' ? 'isActive':'link'}>My Skill</a>
          </li>
          <li>
              <a href='#projects' className={activeSection === 'projects' ? 'isActive':'link'}>Projects</a>
          </li>
          <li>
              <a href='#contact' className={activeSection === 'contact' ? 'isActive':'link'}>Contact Me</a>
          </li>
          <a href='Resume.pdf' className='download shadow-md shadow-white' download>Download CV</a>
        </ul>
    </div>
  )
}

export default Navbar
