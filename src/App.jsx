
import {Outlet, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Service from './components/Service'
import Skill from './components/Skill'

function App() {

  return (
    <>
      <Navbar/>
      <div className='pageContext'>
        <Outlet />
      </div>
      <div className='route'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/service' element={<Service />}/>
            <Route path='/skill' element={<Skill />}/>
            <Route path='/Project' element={<Project />}/>
            <Route path='/Contact' element={<Contact />}/>
          </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
