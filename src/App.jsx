import { Routes,Route } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
