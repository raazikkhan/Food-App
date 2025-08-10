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
    menuInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card.itemCards || [];
  console.log(menuList);

  return menuInfo === null ? (
    <Shimmer />
  ) : (
    <div className=" w-[50rem] m-20 ">
      <div className="text-start">
        <h1 className="font-bold text-3xl ml-4">{name}</h1>

        <ul className="h-30  m-4 p-3 rounded-lg shadow-xl bg-white ">
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

        <h1 className="  py-3 rounded-xl shadow-xl bg-white ">
          <p className="font-bold text-xl ml-4">Menu</p>
        </h1>
        <div>
          <div className="">
            {menuList.map((item) => (
              <div
                key={item.card.info.id}
                className="flex justify-between bg-white m-4 p-3 rounded-lg shadow-md items-center"
              >
                <div>
                  <h1 className="font-bold text-xl">{item.card.info.name}</h1>
                  <p>{item.card.info.description}</p>
                  <p>₹{item.card.info.price / 100}</p>
                  <p>{item.card.info.ratings.aggregatedRating?.rating}</p>
                </div>
                <img
                  src={
                    item.card.info.imageId
                      ? MENU_IMAGE_URL + item.card.info.imageId
                      : "https://via.placeholder.com/150"
                  }
                  alt={item.card.info.name}
                  className="w-fit h-full  rounded-md object-cover "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
