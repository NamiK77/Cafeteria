import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar';


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
