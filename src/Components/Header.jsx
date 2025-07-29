import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Header() {
  const [loginBtn, setLoginBtn] = useState("Login");

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
            <a href="#">
              <li className="!bg-[#ff5200] text-white rounded-md">
                <Stack direction="row" spacing={2}>
                  <Button
                    className="!rounded-md "
                    variant="contained"
                    color="white"
                    onClick={() => {
                      loginBtn === "login"
                        ? setLoginBtn("Logout")
                        : setLoginBtn("login");
                      console.log(loginBtn);
                    }}
                  >
                    {loginBtn}
                  </Button>
                </Stack>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
