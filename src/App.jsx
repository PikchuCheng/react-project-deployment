import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/index.scss";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Setting from "./pages/Setting";
import Footer from "./Components/Footer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";


function App() {
  return (
    <BrowserRouter>
    
      <Navbar />
      <div className="container">
        <Routes>
        
          <Route path="/" element={<Home />} />

          <Route path="/recipes" element={<Recipes />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/setting" element={<Setting />} /> 

          <Route path="/terms" element={<Terms />} /> 
          
          <Route path="/404" element={<NotFound/>}/>

        </Routes>
      </div>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
