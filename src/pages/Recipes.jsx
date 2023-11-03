import { useState,  useEffect } from "react";
import PreviousSearchDiet from "../Components/PreviousSearchDiet";


// db5a9301f0c54c8487176de34e49ffb0
// 7de9f264fd544e33ba45dfac9bcb6ef6

function Recipes() {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=db5a9301f0c54c8487176de34e49ffb0&number=90&diet=vegetarian&addRecipeInformation=true"
        );
        const data = await response.json();
        setRecipes(data.results.sort(()=>Math.random()-.5));
        console.log(data);
      } catch (error) {
        console.log("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [setRecipes]);


  const handleSearch = (searchText) => {
    const filtered = recipes.filter((recipe) => {
      return recipe.diets.some((diet) =>
        diet.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredRecipes(filtered);
  };

  return (
   
      <div className="recipes">
        <PreviousSearchDiet onSearch={handleSearch} />

        <div className="cards-container">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
           <div key={recipe.id} className="recipes-card">
           <img src={recipe.image} alt={recipe.title} />
           <h4 className="title">{recipe.title}</h4>
           <ul className="recipe-diet">
             {recipe.diets.map((diet, index) => (
               <li key={index}>{diet}</li>
             ))}
           </ul>
           <p
             className="recipe-summary"
             dangerouslySetInnerHTML={{ __html: recipe.summary }}
           ></p>
           <button onClick={() => window.open(recipe.sourceUrl)}>
             View Recipe
           </button>
         </div>
          ))
        )
           : (
            recipes.map((recipe) => (
              <div key={recipe.id} className="recipes-card">
                <img src={recipe.image} alt={recipe.title} />
                <h4 className="title">{recipe.title}</h4>
                <ul className="recipe-diet">
                  {recipe.diets.map((diet, index) => (
                    <li key={index}>{diet}</li>
                  ))}
                </ul>
                <p
                  className="recipe-summary"
                  dangerouslySetInnerHTML={{ __html: recipe.summary }}
                ></p>
                <button onClick={() => window.open(recipe.sourceUrl)}>
                  View Recipe
                </button>
              </div>
            ))
          )}
        </div>

        <h1>From Recipes</h1>
      </div>
    
  );
}

export default Recipes;
