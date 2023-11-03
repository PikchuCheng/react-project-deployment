import './style/index.scss'
import Recipes from './pages/Recipes'
import Navbar from './Components/Navbar'
import { RecipeProvider } from './context/RecipeContext'
import Hero from './Components/Hero'
import Footer from './Components/Footer'

// import {BrowserRouter, Router, Routes} from "react-router-dom"
// import Settings from ".pages/Settings"


function App() {
 
  return (
    <RecipeProvider>
    <>
    <h3>this is a final project</h3> 
    <Navbar />
    <Hero/>
    <Recipes/>

    <h4>By Gabriella Esther Pikchu 2023</h4>
    <Footer />
    </>
     </RecipeProvider>
  )
}

export default App
