import React from "react";
import Card from "./Card";
import resData from "../utils/mockData";

function CardContainer() {
  let [topRated, setTopRated] = React.useState(resData);
  return (
    <>
      <button
        className="bg-green-400 p-5 m-5 rounded-md hover:bg-green-500 cursor-pointer"
        onClick={() => {
          const filterList = topRated.filter((res) => res.avg_rating > 4.0); // use >= 4.0 for "Top Rated"

          setTopRated(filterList); // update the state
        }}
      >
        Top Rated Restaurant
      </button>

      <div className="p-10 flex flex-wrap gap-10 ">
        {/* Map through the resData array and render a Card for each item */}
        {topRated.map((data) => (
          <Card key={data.id} resData={data} />
        ))}
      </div>
    </>
  );
}

export default CardContainer;
