import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [currentLocation, setCurrentLocation] = useState("/");

  return (
    <>
      <nav>
        <button type='button' onClick={()=>setCurrentLocation("/")}>Home</button>
        <button type='button' onClick={()=> setCurrentLocation("/about")}>About</button>
      </nav>
      <main>
        {currentLocation === "/" && <Home />}
        {currentLocation === "/about" && <About />}
      </main>
    </>
  );
}

export default App
