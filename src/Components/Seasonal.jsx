import { useEffect, useState } from "react";

function Seasonal() {
  const [soup, setSoup] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=db5a9301f0c54c8487176de34e49ffb0&number=4&type=soup&addRecipeInformation=true"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSoup(data.results);
      });
  }, []);

  return (
    <>
      <h1 className="title2"> Heavenly Healthy Herbsty Soups</h1>

      <div className="recipe-list">
        {soup.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img className="img-recipe" src={recipe.image} alt="" />
            <div className="diets">
              <div className="p-diet">{recipe.diets[0]}</div>
              <div className="p-diet">{recipe.diets[1]}</div>
            </div>
            <div>
              <h2 >{recipe.title}</h2>
              <p
                className="recipe-summary"
                dangerouslySetInnerHTML={{
                  __html: recipe.summary.slice(0, 199),
                }}
              ></p>
            </div>
            <a className="btn-card" href={recipe.sourceUrl} target="_blank" rel="noreferrer">
               Read More
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Seasonal;

// //   <p>{recipe.summary.slice(0, 30)}...</p>
