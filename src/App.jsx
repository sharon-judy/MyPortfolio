
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import ParticleBackground from './components/Particles'



function App() {
 

  return (
    <>
     <div>
      
      <ParticleBackground/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      
      </div>
       
    </>
  )
}

export default App
