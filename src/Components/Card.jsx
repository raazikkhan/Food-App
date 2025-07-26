import React from "react";

function Card(props) {
  const { resData } = props;
  const {
    food_image,
    restaurant_name,
    cuisine,
    avg_rating,
    cost,
    delivery_time_min,
  } = resData;
  return (
    <>
      <div className="bg-[#F1F3F5]   w-90 rounded-lg hover:bg-[#ccd5de] p-2 text-wrap">
        <img
          src={food_image}
          alt="card-img"
          className="p-5  h-60 bg-cover rounded-lg"
        />
        <div className="ml-7 ">
          <h1 className="font-bold text-2xl">{restaurant_name}</h1>
          <h4>{cuisine}</h4>
          <h4>{avg_rating}</h4>
          <h4>₹{cost} FOR TWO</h4>
          <h4>{delivery_time_min} min</h4>
        </div>
      </div>
    </>
  );
}

export default Card;
