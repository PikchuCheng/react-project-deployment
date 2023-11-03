import { useState,  useEffect } from "react";
import PreviousSearchDiet from "../Components/PreviousSearchDiet";
import RecipeCard from "../Components/RecipeCard";


// db5a9301f0c54c8487176de34e49ffb0 hack till 17/10
// 7de9f264fd544e33ba45dfac9bcb6ef6
// e73903897fe440eaaa3a01257a18459a

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
            <RecipeCard key={recipe.id} recipe={recipe} /> 
          ))
        ) : (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} /> 
          ))
        )}
      </div>

      <h1>From Recipes</h1>
    </div>
  );
}

export default Recipes;
