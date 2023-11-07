import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
     const [recipes, setRecipes]= useState([])
    
 
  useEffect(()=>{
  fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=db5a9301f0c54c8487176de34e49ffb0&number=9&cuisine=italian&addRecipeInformation=true")
  .then ((res) => res.json())
  .then((data) => {
     console.log(data);
    setRecipes(data.results.sort(()=>Math.random()-.5));
  });
},[])




return (
<div className='container-hero'>

    <div className='columnleft'>
    <h1 className='title'> Yummy Recipes for your Tummy</h1>
    <p className='info'> This is an  excellent website to get top-notch recipes . The site boasts an appealing and easy to navigate interface, as well as plenty of filters to help you customize the recipes you see and also to sort through their variety recipes. The site also features fantastic recipe videos that are often displayed on social media platforms such as Snapchat, Facebook, and TikTok. The site allows users with an account to save recipes, share their creations, and make shopping lists.</p>
    <Link to= "/recipes"><button className='button-recipe'>Our Recipes</button></Link>
    </div>

    <div className='columnimages'>
       {recipes.map((item, index) => (
      <div className='heroimages' key={index}>
        <img
          src={item?.image}
          alt=""
          />
         </div>
          ))}
    </div>
</div>
);}

export default Hero

