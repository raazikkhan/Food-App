import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "./constants";
const useCard = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); //filtering all restaurants

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(SWIGGY_API_URL);
    const jsonData = await response.json();
    console.log(jsonData);
    //destructing the data
    const reslist =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    //setAllRestaurants(reslist); // Store all restaurants for future filtering
    setRestaurant(reslist);
    setAllRestaurants(reslist); // Store all restaurants for future filtering
  };
  return { restaurant, allRestaurants, setRestaurant, setAllRestaurants };
};
export default useCard;
