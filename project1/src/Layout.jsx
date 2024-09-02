import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Compontents/Header/Header'
import Footer from './Compontents/Footer/Footer'
import About from './Compontents/About/About'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default Layout
