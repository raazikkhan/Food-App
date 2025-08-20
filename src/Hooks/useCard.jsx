import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
const useCard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(SWIGGY_API_URL);
    const jsonData = await response.json();
    console.log(jsonData);
    //destructing the data

    let reslist =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    //setAllRestaurants(reslist); // Store all restaurants for future filtering
    setRestaurants(reslist);
    setAllRestaurants(reslist); // Store all restaurants for future filtering
  };
  return {
    restaurants,
    allRestaurants,
    setRestaurants,
    setAllRestaurants,
  };
};
export default useCard;
