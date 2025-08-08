import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./shimmer";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function CardContainer() {
  let [restaurants, setRestaurants] = useState([]);
  let [allRestaurants, setAllRestaurants] = useState([]); //filtering all restaurants
  let [searchText, setSearchText] = useState(""); //search text state

  //Fetching the live data from the swingy APi

  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await fetch(SWIGGY_API_URL);
        //response object
        const jsonData = await response.json();

        console.log(jsonData);
        //destructuring the data

        const resList =
          jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        setRestaurants(resList);
        setAllRestaurants(resList); // Store all restaurants for future filtering
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    apiData();
  }, []);

  //filtering the top rated restaurants

  const filterTopRated = () => {
    const filtered = allRestaurants.filter((res) => res.info.avgRating >= 4.5);
    //console.log(filtered);
    setRestaurants(filtered);
  };
  //Shimmer effect Conditional Rendering
  if (restaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      {/* Search input for filtering restaurants */}
      <input
        value={searchText}
        type="text"
        className="p-2 ml-5 w-72 bg-white text-black placeholder-gray-500 rounded-l-md outline-none"
        placeholder="Search for restaurants..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="bg-[#ff5200] p-2 rounded-r-md text-white cursor-pointer"
        onClick={() => {
          const filteredRestaurants = allRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setRestaurants(filteredRestaurants);
          allRestaurants(filteredRestaurants); // Update allRestaurants with the filtered results
          setSearchText(""); // Clear the search input after searching
        }}
      >
        <SearchRoundedIcon />
      </button>
      {/* Filtering the top restaurant */}
      <button
        className="bg-[#ff5200] p-2 m-5 rounded-md text-white cursor-pointer"
        onClick={filterTopRated}
      >
        Top Rated
      </button>
      {/* Container for the restaurant cards */}
      <div className="p-5 flex flex-wrap gap-10 ">
        {/* Map through the resData array and render a Card for each item */}
        {Array.isArray(restaurants) &&
          restaurants?.map((res) => (
            <Link to={"/restaurant/menu/" + res.info.id}>
              <Card resData={res.info} />
            </Link>
          ))}
      </div>
    </>
  );
}

export default CardContainer;
