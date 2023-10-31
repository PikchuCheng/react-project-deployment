import React from 'react'
import {useState} from "react"



export default function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false)


  return (
    <div className= "navbar">

        <a href="#!">FoodiesParadise</a>

        <div className='nav-links'>

        <a href="#!">Home</a>
        <a href="#!">Recipes</a>
        <a href="#!">Settings</a>
        
        </div>
        
      <div onClick={()=> setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-icon active" : "sidebar-icon"} >

        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>




      </div>

        
        </div>
  )
}
