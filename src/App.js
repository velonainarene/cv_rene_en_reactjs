import React, { useContext } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Scrollup from './components/scrollup/Scrollup';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Testimonals from './components/testimonials/Testimonals';
import { DarkModeContext } from './context/darkModeContext';
import "./style/dark.scss"


function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" :"app"}>
      <Header/>
      <main className='main'>
          <Home/>
          <About/>
          <Skills/>
          <Services/>
          <Qualification/>
          <Testimonals/>
          <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
    </div>
  );
}

export default App;
