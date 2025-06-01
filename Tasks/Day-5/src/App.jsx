import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Hero from './Components/Sections/hero/Hero'
import Service from './Components/Sections/Tservices/Service';
import { useState } from 'react';
import Gallery from './Components/Sections/Gallery/Gallery';
import Pricing from './Components/Sections/Pricing/Pricing';
import Contact from './Components/Sections/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Display from './Components/display/Display';
import Chatbot from './Components/Chatbot/Chatbot';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

  return (
    
      <div className={`app ${mode}`}>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path='/' element={
            <>
              <Hero mode={`app ${mode}`} id="home" />
              <Service mode={mode} id="service" />
              <Gallery mode={mode} id="gallery" />
              <Pricing mode={mode} id="pricing" />
              <Contact mode={mode} id="contact" />
              <Footer mode={mode} />
              
            </>
          }/>
           <Route path='/display' element={<Display/>}/>
        </Routes>
        <Chatbot/>
      </div>
    
  )
}

export default App
