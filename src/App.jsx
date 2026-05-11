// import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About  from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
 <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App