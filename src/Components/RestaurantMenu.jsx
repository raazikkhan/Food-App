import React from "react";
import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
// This component fetches and displays the restaurant menu based on the restaurant ID from the URL parameters.
const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    MenuData();
  }, []);
  // Fetching the menu data from the API
  const MenuData = async () => {
    const response = await fetch(MENU_API_URL + resId);
    const jsonData = await response.json();
    setMenuInfo(jsonData);
    console.log(jsonData.data?.cards);
  };
  // Extracting the required data from the API response
  const { text } = menuInfo?.data?.cards[0]?.card?.card || {};
  const {
    avgRating,
    costForTwoMessage,
    cuisines,
    city,
    locality,
    sla,
    totalRatingsString,
  } = menuInfo?.data?.cards[2]?.card?.card?.info || {};

  const menuItems =
    menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(menuItems);

  return menuInfo === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex flex-col items-center justify-center m-10">
        <div className="text-start">
          <h1 className="font-bold text-3xl ml-4">{text}</h1>
          <ul className=" h-30 w-[50rem] m-4 p-3 rounded-lg   shadow-xl">
            <li>
              {avgRating} ⭐️ ({totalRatingsString}) - {costForTwoMessage}
            </li>

            <li>{cuisines.join(", ")}</li>
            <li>
              {locality} - {city}
            </li>
            <li>{sla?.slaString}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
