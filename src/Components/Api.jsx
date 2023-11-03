import { useContext, useEffect } from "react";
import { useRecipeContext } from "./RecipeContext";

function Api() {
  const { setRecipes } = useContext(useRecipeContext);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=7de9f264fd544e33ba45dfac9bcb6ef6&number=90&diet=vegetarian&addRecipeInformation=true"
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

  return null;
}

export default Api;
 


