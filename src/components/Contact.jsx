import React from 'react'

const Contact = () => {

  const sendEmail = () => {
    console.log('hello')
  }

  return (
    <div className='contactContainer'>
      <h3 className='text-[#FFBD39] text-3xl text-center'>Contact Form</h3>
      <form>
        <div className='inputContainer'>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Name'/>
        </div>
        <div className='inputContainer'>
          <label htmlFor="name">Email</label>
          <input type="text" placeholder='Email'/>
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
          <button type='submit' className='send' onClick={sendEmail}>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
