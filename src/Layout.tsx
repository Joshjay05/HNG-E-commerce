// import React from 'react'

import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const Layout = () => {
  return (
    <div className=" overflow-x-hidden">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout