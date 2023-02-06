import RestaurentCard from "../components/RestaurentCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../constants";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = ({user}) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {userinfo,onUserNameChange} = useContext(UserContext);

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

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 Offline, please check your internet connection!!</h1>;
  }

  // not render component (Early return)
  if (!allRestaurants) return null;

  console.log("Rendered");
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-section">
      <div className="felx px-2">
      <form className="my-5 w-1/2">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            required
          />
          <button
            type="button"
            className="text-white absolute right-2.5 bottom-2.5 bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setfilteredRestaurants(data);
            }}
            >
            Search
          </button>
        </div>
      </form>
      <form>
          <input type="text" value={userinfo.username} onChange={(e)=>onUserNameChange(e.target.value)}/>
      </form>
      </div>
      <div className="flex flex-wrap bg-white">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restraunt match your Filter!!</h1>
        ) : (
          filteredRestaurants?.map((restaurent) => {
            return (
              <Link
                to={"/restaurant/" + restaurent.data.id}
                key={restaurent.data.id}
              >
                <RestaurentCard {...restaurent.data} key={restaurent.data.id}/>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Body;
