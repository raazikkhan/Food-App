import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { MENU_IMAGE_URL } from "../utils/constants";

import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Extracting the restaurant ID from the URL parameters
  console.log("Restaurant ID:", resId);
  const menuInfo = useRestaurant(resId); // Using the custom hook to fetch restaurant data

  //Extracting data from the first card
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

  const menuList =
    menuInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  console.log(menuList);

  return menuInfo === null ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center items-center w-full mt-20">
      <div className="text-start">
        <h1 className="font-bold text-3xl ml-4">{name}</h1>
        <ul className="h-30 w-[50rem] m-4 p-3 rounded-lg shadow-xl bg-white ">
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

        <h1 className="  py-3 rounded-xl shadow-xl bg-white flex justify-between">
          <p className="font-bold text-xl ml-4 ">Menu</p>
        </h1>
      </div>
    </div>
  );
};

export default RestaurantMenu;
