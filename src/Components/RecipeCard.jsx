function RecipeCard({ title, image, diets, summary, sourceUrl }) {
  return (
    <div className="recipes-card">
      <img src={image} alt={title} />
      <h4 className="title">{title}</h4>
      <ul className="recipe-diet">
        { diets?.map((diet, index) => (
          <li key={index}>{diet}</li>
        ))}
      </ul>
      <p
        className="recipe-summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></p>
      <button onClick={() => window.open(sourceUrl)}>View Recipe</button>
    </div>
  );
}

// {filteredRecipes.length > 0 ? (
//   <RecipeCard
//     key={recipes.id}
//     title={recipes.title}
//     image={recipes.image}
//     diets={recipes.diets}
//     summary={recipes.summary}
//     sourceUrl={recipes.sourceUrl}
//   />

export default RecipeCard;
