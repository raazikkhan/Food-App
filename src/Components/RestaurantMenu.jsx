import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import { MENU_IMAGE_URL } from "../utils/constants";

import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const [allItemsInfo, setAllItemsInfo] = useState([]); // State to hold all item information

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
        setAllItemsInfo([]);
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

  const menuList =
    menuInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  console.log(menuList);

  //const itemCards = data.map((item) => item.card?.card?.itemCards);

  menuList.forEach((item) => {
    const itemCards = item.card?.card?.itemCards;
    if (Array.isArray(itemCards)) {
      itemCards.forEach((itemCard) => {
        const info = itemCard.card?.info;
        if (info) {
          allItemsInfo.push({
            name: info.name,
            description: info.description,
            price: info.price,
            id: info.id,
            imageId: info.imageId,
            category: info.category,
            isBestSeller: info.isBestSeller,
            vegClassifier: info.itemAttribute?.vegClassifier,
          });
        }
      });
    }
  });

  console.log("All Item Info:", allItemsInfo);

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

        {allItemsInfo.map((item) => (
          <div
            className="flex flex-col justify-evenly w-[50rem]  gap-3 m-3 shadow-lg h-72"
            key={item.id}
          >
            <div className="flex justify-end items-end py-4 px-4">
              {item.imageId && (
                <img
                  src={MENU_IMAGE_URL + item.imageId}
                  alt={item.name}
                  className="w-40 h-full object-cover rounded-md "
                />
              )}
            </div>
            <div className="flex justify-start  py-2 px-2 mt-20">
              <ul>
                <li>{item.vegClassifier}</li>
                <li className="font-bold text-lg">{item.name}</li>
                <li className="w-[26rem] overflow-hidden">
                  {item.description}
                </li>
                <li className="">₹{item.price / 100}</li>
                <li>{item.category}</li>
                <li>{item.isBestSeller}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
