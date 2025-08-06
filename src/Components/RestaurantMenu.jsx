import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const { resId } = useParams(); // Extracting the restaurant ID from the URL parameters
  console.log("Restaurant ID:", resId);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          MENU_API_URL + resId // Fetching menu data using the restaurant ID
        );
        const jsonData = await response.json();
        setMenuInfo(jsonData);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    };

    fetchMenuData();
  }, []); // ✅ dependency

  //Extracting data from the second card
  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    city,
    sla,
    totalRatingsString,
    areaName,
  } = menuInfo?.data?.cards?.[2]?.card?.card?.info || {};

  const { title } =
    menuInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card || {};

  //Organizing the data List

  const data =
    menuInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card || [];
  console.log(data);

  const RecommendedData =
    menuInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards || {};
  console.log(RecommendedData);

  return menuInfo === null ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center justify-center m-10">
      <div className="text-start">
        <h1 className="font-bold text-3xl ml-4">{name}</h1>
        <ul className="h-30 w-[50rem] m-4 p-3 rounded-lg shadow-xl bg-white">
          <li>
            {avgRating} ⭐️ ({totalRatingsString}) - {costForTwoMessage}
          </li>
          <li>{cuisines?.join(", ")}</li>
          <li>
            {areaName} - {city}
          </li>
          <li>{sla?.slaString}</li>
        </ul>

        {/* Displaying the restaurant Recommended title */}

        <h1 className="font-bold text-3xl ml-4">{title}</h1>
      </div>
    </div>
  );
};

export default RestaurantMenu;
