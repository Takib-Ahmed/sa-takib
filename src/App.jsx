
import { useState } from 'react'
import './App.css'
import { Contract } from './components/contract'
import Home from './components/home'
import { Navbar } from './components/Navbar'
import Projects from './components/projects'
import Skills from './components/skills'
import Loader from './components/Loader'
import CircularMenu from './components/SocialsMenu'
import { useRevealOnScroll } from './components/RevealAnimation'

function App() {
 
  const [view, setView] = useState("list");

  useRevealOnScroll()
  return (
    <main>
   
   <CircularMenu/>
<Loader/>

<Navbar view={view}></Navbar>
<Home></Home>
<br className=' sm:hidden' /> <br className=' sm:hidden' /> 
<Skills></Skills><br className=' sm:hidden' /> <br className=' sm:hidden' /> 
<Projects view={view} setView={setView}></Projects>
<Contract></Contract>
    </main>
  )
}

export default App
