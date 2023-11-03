import {BrowserRouter, Routes, Route} from "react-router-dom"
import './style/index.scss'
import Recipes from './pages/Recipes'
import Navbar from './Components/Navbar'
import { RecipeProvider } from './context/RecipeContext'

import Home from './pages/Home'
import Setting from './pages/Setting'

import Footer from './Components/Footer'





function App() {
 
  return (
    
   

     <BrowserRouter>



    <h3>this is a final project</h3> 

    <Navbar />

   <div className="container">

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/settings" element={<Setting />} />


    </Routes>

    {/* <Hero/>
    <Recipes/> */}


    </div>
    <h4>By Gabriella Esther Pikchu 2023</h4>
    <Footer />

    </BrowserRouter>
  
  )
}

export default App
