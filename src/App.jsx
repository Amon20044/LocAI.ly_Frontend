import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import './App.css'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div 
        className='blob -z-50'
        style={{
          transform: `translate3d(calc(${cursorPosition.x}px - 50%), calc(${cursorPosition.y}px - 50%), 0)`
        }}
      ></div>
      <div className='w-full bgg text-white font-["Quicksand"] min-h-screen'>

        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
      </div>
    </div>
  )
}

export default App