import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

function Shimmer() {
  return (
    <>
      <ShimmerPostList
        postStyle="STYLE_FOUR"
        col={4}
        row={2}
        gap={30}
        className="p-10 h-50 flex flex-wrap gap-10  mt-20 mx-auto "
      />
    </>
  );
}

export default Shimmer;
