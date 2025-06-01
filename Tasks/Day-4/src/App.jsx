import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherApp from './component/WeatherApp'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/weatherApp" element={<WeatherApp />}/>
          
      </Routes>
    </>
  )
}

export default App
