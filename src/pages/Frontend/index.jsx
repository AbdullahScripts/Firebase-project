import React from 'react'
import { Route, Routes } from 'react-router-dom'
// pages 
import Home from './Home'
import About from './About'
import Contact from './Contact'
// Components 
// import Footer from '../../Components/footer/Footer'
export default function Index() {
    return (
        <Routes>
           
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<>404 Page Not found</>} />
        </Routes>
    )
}
