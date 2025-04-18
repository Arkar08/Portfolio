import React from 'react'

const ServiceCard = ({text}) => {
  return (
    <div className='card'>
      <h3 className='cardText'>{text}</h3>
      <div className='line'></div>
    </div>
  )
}

export default ServiceCard
