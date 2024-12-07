// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const SingleLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default SingleLayout
