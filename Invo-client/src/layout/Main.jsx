import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import "../App.css"


const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <footer>Footter</footer>
      
    </div>
  )
}

export default Main
