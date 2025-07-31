import React from "react";
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <div relative w-full h-screen>
      <img
        src="/src/assets/ErrorImg.jpg"
        alt="Error Image"
        className="w-screen h-screen object-cover"
      />
      <Link to={"/"}>
        <button className="absolute top-1/3 -left-2/1 transform -translate-x-1/6 -translate-y-10/12  cursor-pointer">
          Home
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
