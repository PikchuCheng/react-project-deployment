
import './style/index.scss'
import Recipes from './pages/Recipes'
import Navbar from './Components/Navbar'
import { RecipeProvider } from './context/RecipeContext'


function App() {
 
  return (
    <RecipeProvider>
    <>
     
     
    <h3>this is a final project</h3> 

    <Navbar />
    <Recipes/>

    <h4>By Gabriella Esther Pikchu 2023</h4>
  
    </>
     </RecipeProvider>
  )
}

export default App
