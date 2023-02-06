import {IMG_CDN_URL} from '../constants';
const FoodItem =  ({name, description, cloudinaryImageId, price, id})=>{
    return (
        <div className="w-56 p-2 m-2 bg-cyan-500 shadow-lg">
          <img src={IMG_CDN_URL + cloudinaryImageId} />
          <h2 className="font-bold text-xl">{name}</h2>
          <h3>{description}</h3>
          <h4>Rupees: {price / 100}</h4>
          <button className='bg-red-500' onClick={()=>removeFoodItem(id)}>Remove</button>
        </div>
      );
};
export default FoodItem;