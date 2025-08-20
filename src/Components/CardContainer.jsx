import { useState } from "react";
import Card from "./Card";
import Shimmer from "./shimmer";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import useCard from "../Hooks/useCard";
import { Link } from "react-router-dom";
import React from "react";

function CardContainer() {
  let [searchText, setSearchText] = useState(""); //search text state
  const { restaurants, allRestaurants, setRestaurants } = useCard([]); // Using the custom hook to get restaurants and allRestaurants

  //filtering the top rated restaurants

  const filterTopRated = () => {
    const filtered = allRestaurants.filter((res) => res.info.avgRating >= 4.5);
    setRestaurants(filtered);
  };

  //Shimmer effect Conditional Rendering

  if (!restaurants || restaurants.length === 0) {
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
      {/* Search button to filter restaurants based on search text */}
      <button
        className="bg-[#ff5200] p-2 rounded-r-md text-white cursor-pointer"
        onClick={() => {
          const filteredRestaurants = allRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          // setRestaurants(filteredRestaurants);
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

      {/* Carousel for categories */}

      {/* Shimmer effect while loading restaurants */}

      {/* Container for the restaurant cards */}
      <div className="p-5 flex flex-wrap gap-10">
        {restaurants.length === 0 ? (
          <p className="text-gray-500">No restaurants found.</p>
        ) : (
          restaurants.map((res) => (
            <Link key={res.info.id} to={"/restaurant/menu/" + res.info.id}>
              <Card resData={res.info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default CardContainer;
