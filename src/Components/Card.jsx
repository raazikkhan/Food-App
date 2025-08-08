import React from "react";
import { CDN_URL } from "../utils/constants";

function Card(props) {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    props.resData;
  return (
    <>
      <div className="bg-[#fff]   w-90   text-wrap rounded-xl hover:scale-90 transition duration-400 ease-in-out">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="card-img"
          className="py-0 w-full h-60 rounded-xl"
        />
        <div className="mt-4 ">
          <h1 className="font-bold text-xl">{name}</h1>
          <h4>
            ✪ {avgRating} - {sla?.slaString}
          </h4>
          <h4>{cuisines.join(", ")}</h4>

          <h4>{costForTwo}</h4>
        </div>
      </div>
    </>
  );
}

export default Card;
