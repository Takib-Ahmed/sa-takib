
import { useState } from 'react'
import './App.css'
import { Contract } from './components/contract'
import Cursor from './components/cursor'
import Customcursor from './components/Customcursor'
import { Hero } from './components/hero'
import Home from './components/home'
import { Navbar } from './components/Navbar'
import Projects from './components/projects'
import Skills from './components/skills'
import Loader from './components/Loader'
import Bubble from './Bubble'
import CircularMenu from './components/SocialsMenu'

function App() {
  const [view, setView] = useState("list");
  return (
    <main>
<CircularMenu/>
<Loader/>

<Navbar view={view}></Navbar>
<Home></Home>

<Skills></Skills>
<Projects view={view} setView={setView}></Projects>
<Contract></Contract>



   </main>
  )
}

export default App
