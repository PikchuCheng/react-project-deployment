import './style/index.scss'
import Recipes from './pages/Recipes'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'


// import {BrowserRouter, Router, Routes} from "react-router-dom"
// import Settings from ".pages/Settings"

function App() {
 
  return (
    <>
      

    <Navbar />

    <Hero/>
    <Recipes/>

    <h4>By Gabriella Esther Pikchu 2023</h4>
    <Footer />


    </>
  )
}

export default App
