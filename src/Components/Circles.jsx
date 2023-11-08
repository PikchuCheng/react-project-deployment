import { useEffect, useState } from "react";
import { useMyContext } from "./MyContext";

const Circles = () => {
  const [deserts, setDesserts] = useState([]);
  const { handleSelectedItem } = useMyContext();

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=db5a9301f0c54c8487176de34e49ffb0&number=40&type=dessert&addRecipeInformation=true"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDesserts(data.results.sort(() => Math.random() - 0.5));
      });
  }, []);

  return (
    <div>
      <h2 className="h-desserts">
        &quot;Sweet Temptations: Delectable Dessert Recipes to Satisfy Your Cravings&quot;
      </h2>
          <div className="desserts-container">
            {deserts.map((desert, index) => (
              <div className="dessert-circle" key={index}>
                <img className="img" src={desert.image} alt="" />
                <button
                  className="btn-viewmore"
                  onClick={() => handleSelectedItem(desert)}
                >
                  View
                </button>
              </div>
            ))}
          </div>
    </div>
  );
};

export default Circles;
