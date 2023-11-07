import { useEffect, useState } from "react";

function Seasonal() {
  const [soup, setSoup] = useState([]);

    useEffect(() => {
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=db5a9301f0c54c8487176de34e49ffb0&number=4&type=soup&addRecipeInformation=true")
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setSoup(data.results);
          });
      }, []);
    
      return (
        <>
        <h1 className='title2'> Heavenly Healthy Herbsty Treats</h1>

      <div className="recipe-list">
        {soup.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt="" />
            <div className="diets">
              <p>{recipe.diets[0]}</p>
              <p>{recipe.diets[1]}</p>
            </div>
            <div>
              <h2>{recipe.title}</h2>
              <p
                className="recipe-summary"
                dangerouslySetInnerHTML={{
                  __html: recipe.summary.slice(0, 200),
                }}
              ></p>
            </div>
            <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
              <button className="btn-card"> Read More</button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Seasonal;

// //   <p>{recipe.summary.slice(0, 30)}...</p>
