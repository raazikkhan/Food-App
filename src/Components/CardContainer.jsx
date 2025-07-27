import React, { useEffect } from "react";
import Card from "./Card";

function CardContainer() {
  //let [topRated, setTopRated] = React.useState([]);

  let [restaurants, setRestaurants] = React.useState([]);

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
        console.log(
          jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setRestaurants(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    apiData();
  }, []);

  return (
    <>
      <button
        className="bg-green-400 p-5 m-5 rounded-md hover:bg-green-500 cursor-pointer"
        onClick={() => {
          const filterList = restaurants.filter((res) => res.avgRating > 4.0); // use >= 4.0 for "Top Rated"

          setRestaurants(filterList); // update the state
        }}
      >
        Top Rated Restaurant
      </button>

      <div className="p-10 flex flex-wrap gap-10 ">
        {/* Map through the resData array and render a Card for each item */}
        {restaurants?.map((res) => (
          <Card key={res.info.id} data={res.info} />
        ))}
      </div>
    </>
  );
}

export default CardContainer;
