import {Link} from 'react-router-dom'

import React from 'react'


export default function Sidebar({close}) {
  return (



    <div className='sidebar' onClick={close}>

       <div className='sidebar-links'>

        <Link to="/">Home</Link>
        <Link to="/Recipes">Recipes</Link>
        <Link to="/Setting">Settings</Link>


      </div>
    
    
    
    </div>



  )
}
