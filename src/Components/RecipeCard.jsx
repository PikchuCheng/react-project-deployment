const RecipeCard = ({ recipe }) => {
  return (
    <div key={recipe.id} className="recipes-card">
      <img className= "img-from-recipes"src={recipe.image} alt={recipe.title} />
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
      <button className="button-87" onClick={() => window.open(recipe.sourceUrl)}>
        View Recipe
      </button>
    </div>
  );
};

export default RecipeCard;

