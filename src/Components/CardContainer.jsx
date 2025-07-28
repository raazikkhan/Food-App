import React, { useEffect, useState } from "react";
import Card from "./Card";

function CardContainer() {
  //let [topRated, setTopRated] = React.useState([]);

  let [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); //filtering all restaurants

  //Fetching the live data from the swingy APi

  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        //response object
        const jsonData = await response.json();
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

  //feltering the top rated restaurants

  const filterTopRated = () => {
    const filtered = allRestaurants.filter((res) => res.info.avgRating >= 4.4);
    console.log(filtered);
    setRestaurants(filtered);
  };

  return (
    <>
      <button
        className="bg-orange-400 p-2 m-5 rounded-md hover:bg-orange-500 cursor-pointer"
        onClick={filterTopRated}
      >
        Top Rated
      </button>

      <div className="p-5 flex flex-wrap gap-10 ">
        {/* Map through the resData array and render a Card for each item */}
        {Array.isArray(restaurants) &&
          restaurants?.map((res) => (
            <Card key={res.info.id} resData={res.info} />
          ))}
      </div>
    </>
  );
}

export default CardContainer;
