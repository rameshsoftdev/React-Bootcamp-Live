import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import  useRestaurant  from "../utils/useRestaurant";
const RestaurantMenu = () => {
  //const params = useParams();
  //const resId = params.resId;
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
