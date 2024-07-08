import React from "react";
import { SiCoffeescript } from "react-icons/si";
import Button from "../element/button";
import { Link } from "react-router-dom";
import { MdLegendToggle } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex-no-wrap fixed top-0 z-10 flex w-full max-w-7xl items-center justify-between  lg:flex-wrap lg:justify-start ">

      <div className="navbar  bg-Brown-100 sticky px-4">
        <div className="flex-1">
          <a className="w-14 h-14 ">
            <SiCoffeescript className="w-full h-full text-Brown-800" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal hidden md:flex space-x-3 px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <Link to={"/login"} className="bg-Brown-500 w-32 hover:bg-Brown-300 text-Brown-100 items-center flex justify-center rounded-md font-semibold">
              <Button>
                Login
              </Button>
              </Link>
            </li>
          </ul>
         <a href="">
         <MdLegendToggle
            className="text-3xl md:hidden"
            onClick={() => console.log("clicked")}
          />
         </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
