
import { useState } from 'react'
import './App.css'
import { Contract } from './components/contract'
import Home from './components/home'
import { Navbar } from './components/Navbar'
import Projects from './components/projects'
import Skills from './components/skills'
import Loader from './components/Loader'
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
