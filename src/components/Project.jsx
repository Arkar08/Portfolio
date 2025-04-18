import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div>
      <h1 className='text-center text-4xl text-[#FFBD39]'>Projects</h1>
      <div className='projectContainer'>
        <ProjectCard image='/angular-shopping website.png' github='https://github.com/Arkar08/angular-shopping-cart.git' text='Angular Shopping Cart' vercel='https://angular-shopping-cart-eight.vercel.app/'/>
        <ProjectCard image='/cafe-management-system with angular and firebase.png' github='https://github.com/Arkar08/Cafe-management-system.git' text='Cafe Management System with Angular and Firebase' vercel=' https://cafe-management-system-black.vercel.app/'/>
        <ProjectCard image='/project react-redux e-commerce.png' github='https://github.com/Arkar08/E-commerce-with-redux-Project.git' vercel='https://e-commerce-with-redux-project.vercel.app/' text='E-Commerce website with React and Redux-Toolkit'/>
        <ProjectCard image='/snake-receipes with next.js.png' github='https://github.com/Arkar08/burmese-snake-next.git' vercel='https://burmese-snake-next.vercel.app/' text='Burmese snake with Next.js'/>
        <ProjectCard image='/hotel-management-system admin-view.png' github='https://github.com/Arkar08/hotel-management-system-frontend.git' backend='https://github.com/Arkar08/Hotel-Management-System.git' text='Hotel Management System'/>
        <ProjectCard image='/hospital-appointment with one month project group.png' text='Hospital Appointment With Group'/>
      </div>
    </div>
  )
}

export default Project
