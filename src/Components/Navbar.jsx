import React from 'react'
import {useState} from "react"
import Sidebar from './Sidebar'



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

        <a href="#!">Home</a>
        <a href="#!">Recipes</a>
        <a href="#!">Settings</a>
        
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
