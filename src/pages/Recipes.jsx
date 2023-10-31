import { useState, useEffect } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

    // useEffect(() => {
    //   const fetchRecipes = async () => {
    //     try {
    //       const response = await fetch(
    //         "https://api.spoonacular.com/recipes/complexSearch?apiKey=7de9f264fd544e33ba45dfac9bcb6ef6&number=90&diet=vegetarian&addRecipeInformation=true"
    //       );
    //       const data = await response.json();
    //       setRecipes(data.results);
    //       console.log(data);
    //       console.log("data-results:", data.results);
    //     } catch (error) {
    //       console.log("Error fetching recipes:", error);
    //     }
    //   };

    //   fetchRecipes();
    // }, []);

  const searches = [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan",
    "paleolithic",
    "primal",
    "whole",
    "ketogenic",
    "fodmap friendly",
  ];

  return (
    <div>
      <div className="previous-search">
        <h2>Previous Searches</h2>
        <div className="previous-searching-container">
          {searches.map((search, index) => (
            <div className="search-item" key={index} style={{animationDelay: index * 0.2 + 's'}}>
              {search}
            </div>
          ))}
        </div>
      </div>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.diets.map((diet, index) => (
              <li key={index}>{diet}</li>
            ))}
          </ul>

          <img src={recipe.image} alt={recipe.title} />
          <p
            className="recipe-summary"
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          ></p>
             
          <button onClick={() => window.open(recipe.sourceUrl)}>
            View Recipe
          </button>
        </div>
      ))}
      <h1>From Recipes</h1>
    </div>
  );
}

export default Recipes;
