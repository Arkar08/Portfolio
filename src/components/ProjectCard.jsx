import React from 'react'

const ProjectCard = ({image,github,vercel,text,backend}) => {
  return (
    <div className='projectCard'>
        <img src={image} alt="" className='pjImage'/>
        <div>
          <div>
             <p className='text-blue-500 text-nowrap'>
                Name - {text}
              </p>
          </div>
          <div>
            <h3 className='text-white'>
              {
                backend ? 'Frontend GitHub -':' GitHub Link -'
              }
            </h3>
            <a href={github} className='underline text-blue-500 text-sm'>{github}</a>
          </div>
          {
            backend ? (
              <div>
                <h3 className='text-white'>
                  Backend GitHub -
                </h3>
                <a href={backend} className='underline text-blue-500 text-sm'>{backend}</a>
              </div>
            ):(
              <div>
                <h3 className='text-white'>
                  Vercel Deploy Link -
                </h3>
                <a href={vercel} className='underline text-blue-500 text-sm'>{vercel}</a>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default ProjectCard
