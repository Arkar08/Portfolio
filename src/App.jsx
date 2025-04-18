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
      <div className='route'>
          <section id='home'>
            <Home />
          </section>
          <section id='about'>
            <About />
          </section>
          <section id='service'>
            <Service />
          </section>
          <section id='mySkill'>
            <Skill />
          </section>
          <section id='projects'>
            <Project />
          </section>
          <section id='contact'>
            <Contact />
          </section>
      </div>
      <Footer/>
    </>
  )
}

export default App
