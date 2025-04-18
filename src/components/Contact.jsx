import React from 'react'

const Contact = () => {

  const sendEmail = () => {
    console.log('hello')
  }

  return (
    <div className='contactContainer'>
      <h1 className='text-[#FFBD39] text-4xl text-center'>Contact Me</h1>
      <form>
        <div className='inputContainer'>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Your Name'/>
        </div>
        <div className='inputContainer'>
          <label htmlFor="name">Email</label>
          <input type="text" placeholder='Your Email'/>
        </div>
        <div className='inputContainer'>
          <label htmlFor="name">Subject</label>
          <input type="text" placeholder='Subject'/>
        </div>
        <div className='inputContainer'>
          <label htmlFor="name">Message</label>
          <textarea placeholder='Message'></textarea>
        </div>
        <div className='sendContainer'>
          <button type='submit' className='send' onClick={sendEmail}>Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
