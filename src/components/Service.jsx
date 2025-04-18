import React from 'react'
import ServiceCard from './serviceCard'

const Service = () => {
  return (
    <div>
      <h1 className='text-4xl text-[#FFBD39] text-center'>Services</h1>
      <div className='cardContainer'>
        <div>
          <ServiceCard text='mid-level developer'/>
          <ServiceCard text='web developer'/>
        </div>
        <div>
          <ServiceCard text='fullstack developer'/>
          <ServiceCard text='web designer'/>
        </div>
        <div>
          <ServiceCard  text='app developing'/>
          <ServiceCard  text='Mobile Native App developer'/>
        </div>
      </div>
    </div>
  )
}

export default Service
