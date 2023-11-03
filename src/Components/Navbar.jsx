import {Link} from 'react-router-dom'

import React from 'react'
import {useState} from "react"
import Sidebar from './Sidebar'
import Home from '../pages/Home'



export default function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false)
 



function closeSidebar(){
  setShowSidebar(false)
}


  return (

    <>

    <div className= "navbar">

        <a href="#!">FoodiesParadise</a>

        <div className='nav-links'>

        <Link to="/">Home</Link>
        <Link to="/Recipes">Recipes</Link>
        <Link to="/Settings">Settings</Link>

        
        
        </div>
        
      <div onClick={()=> setShowSidebar(true)} className = {showSidebar ? "sidebar-icon active" : "sidebar-icon"} >

        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>




      </div>

        
        </div>


         {showSidebar && <Sidebar close={closeSidebar}/>}


        </>
  )
}
