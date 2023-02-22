import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Promotion from './Pages/Promotion'
import { BrowserRouter, Routes, Route } from'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/promotion" element={<Promotion />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App