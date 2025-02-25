import React from 'react'
import './App.css'
import Herosection from './Components/Herosection/Herosection'
import About from './Components/AboutSection/About'
import ContactUs from './Components/ContactUs/ContactUs'
import Sitemaintenance from './Components/SiteMaintenance/SiteMaintenance'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'


function App() {
  return (
    <>
      <Sitemaintenance/>
      <Navbar/>
      <Herosection/>
      <About/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
