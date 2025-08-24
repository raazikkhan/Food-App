//import React, { useState } from "react";
import { Link } from "react-router-dom";
//import Stack from "@mui/material/Stack";
//import Button from "@mui/material/Button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Header() {
  // const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <>
      <div className="bg-[#fff]  w-full  shadow-lg shadow-[#A3B18A]-500/50 flex justify-between items-center">
        <div className="ml-10 ">
          <img
            src={"/src/assets/Logo.png"}
            alt="logo"
            className="h-20 p-3 rounded-full "
          />
        </div>

        <div className="flex">
          <ul className="flex justify-around gap-20 mr-20 text-[#000]  text-lg">
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/about"}>About</Link>
            </li>

            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>

            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>

            <li className="!bg-[#ff5200] text-white rounded-md">
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">Sign In</SignInButton>
              </SignedOut>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
