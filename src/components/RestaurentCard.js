import { IMG_CDN_URL } from "../constants";
const RestaurentCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card w-56 p-2 m-2 ml-2 hover:shadow-2xl hover:bg-gray-200 hover:bottom-1 min-h-[270px] bg-white">
      <img className="card-image" src={IMG_CDN_URL + cloudinaryImageId} />
      <h4 className="card-name text-xl font-bold">{name}</h4>
      <h4 className="cuisines text-sm">{cuisines.join(", ")}</h4>
      <div className={avgRating>=4 ? 'w-12 bg-green-500' : 'w-12 bg-red-900'}>
        <div class="flex items-center">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <p class="text-sm font-bold text-gray-900 text-white">
            {avgRating}
          </p>
        </div>
      </div>
    </div>
  );
};
export default RestaurentCard;
