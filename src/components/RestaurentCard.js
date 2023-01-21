
import {IMG_CDN_URL} from '../constants';
const RestaurentCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
  }) => {
    return (
      <div className="card">
        <img
          className="card-image"
          src={IMG_CDN_URL+cloudinaryImageId}
        />
        <h4 className="card-name">{name}</h4>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <h4 className="rating">{avgRating}</h4>
      </div>
    );
  };
  export default RestaurentCard;