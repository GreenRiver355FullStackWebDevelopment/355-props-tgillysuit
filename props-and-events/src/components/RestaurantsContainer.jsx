// Importing Presentation Component
import Restaurant from "./Restaurant.jsx";
// Importing Data
import { restaurants } from "../data/data.js";

function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {
        restaurants.map(restaurant => (<Restaurant restaurant={restaurant} key={restaurant.id}/>))
      }
    </div>
  );
}

export default RestaurantsContainer;
