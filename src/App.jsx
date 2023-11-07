import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import AboutMe from './Components/AboutMe'
import Project1 from './Components/Project1'
import Project2 from './Components/Project2'
import Project3 from './Components/Project3'

function App() {
 

  return (
    <>
    <div 
        id="image"
        style={{
          backgroundImage: `url(/public/greenBG.jpeg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        >
      <h1>Dulce "D.J." Jaramillo</h1>
      <Navbar/>
      <AboutMe/>
     <div id="projects">
      <Project1/>
      <Project2/>
      <Project3/>
      </div>
      </div>  
    </>
  )
}

export default App
