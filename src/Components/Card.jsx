import React from "react";
import { CDN_URL } from "../utils/constants";

function Card(props) {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    delivery_time_min,
  } = props.data;
  return (
    <>
      <div className="bg-[#F1F3F5]   w-90 rounded-lg hover:bg-[#ccd5de] p-2 text-wrap">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="card-img"
          className="p-5  h-60 bg-cover rounded-lg"
        />
        <div className="ml-7 ">
          <h1 className="font-bold text-2xl">{name}</h1>
          <h4>{cuisines.join(",")}</h4>
          <h4>{avgRating}</h4>
          <h4>₹{costForTwo} FOR TWO</h4>
          <h4>{delivery_time_min} min</h4>
        </div>
      </div>
    </>
  );
}

export default Card;
