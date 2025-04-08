// Importing Presentation Component
import Restaurant from "./Restaurant.jsx";
// Importing Data
import restaurantData from "../data/data.js";

function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {
        restaurantData.map(restaurant => (
          <Restaurant 
            name={restaurant.name}
            
          
          />
        ))
      }
    </div>
  );
}

export default RestaurantsContainer;
