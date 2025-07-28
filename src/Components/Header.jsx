import React from "react";
import { LOGO_URL } from "../utils/constants";

function Header() {
  return (
    <>
      <div className="bg-[#fff]  w-full  shadow-lg shadow-[#A3B18A]-500/50 flex justify-between items-center">
        <div className="ml-10 ">
          <img src={LOGO_URL} alt="logo" className="h-20" />
        </div>
        <div className="flex">
          <ul className="flex justify-around gap-20 mr-20 text-[#000]  text-lg">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Contect Us</li>
            </a>
            <a href="#">
              <li>Cart</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
