import React from "react";
import Button from "../element/button";
import NavButton from "../fragment/navButton";
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-around  items-center pt-7">
      <img src="../src/assets/logo.png" alt="" className="w-10" />
      <div className="md:hidden">
        <Button onClick={toggleMenu}>
          <img
            src="https://img.icons8.com/ios/50/000000/menu--v1.png"
            alt=""
            className="w-8"
          />
        </Button>
      </div>
      <div
        className={`fixed right-0 top-[4rem] h-full bg-[#77714e] text-white transition-transform transform ${
          open ? "translate-x-0" : "translate-x-full"
        }  md:translate-x-0 md:hidden  flex-col md:flex-row font-semibold p-5`}>
        <NavButton
          className={`flex-col md:flex font-semibold relative bg-[#77714e] ${
            open ? "block" : "hidden"
          } md:block`}
        />
      </div>
      <div className="hidden md:flex">
        <NavButton className="flex gap-10 font-semibold " />
      </div>
    </div>
  );
};

export default Navbar;
