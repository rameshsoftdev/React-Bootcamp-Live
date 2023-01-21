import RestaurentCard from "../components/RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../constants";

function filterData(searchText, allRestaurants) {
  let filteredData = allRestaurants?.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function getRestaurents() {
    let data = await fetch(SWIGGY_API_URL);
    let json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data.cards);
  }

  useEffect(() => {
    getRestaurents();
    console.log("Called");
  }, []);

  // not render component (Early return)
  if (!allRestaurants) return null;

  console.log("Rendered");
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-section">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText,allRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurentlist">
        {
        filteredRestaurants?.length===0 
        ? <h1>No Restraunt match your Filter!!</h1> 
        : filteredRestaurants?.map((restaurent) => {
          return (
            <RestaurentCard {...restaurent.data} key={restaurent.data.id} />
          );
        })
        }
      </div>
    </div>
  );
};
export default Body;
