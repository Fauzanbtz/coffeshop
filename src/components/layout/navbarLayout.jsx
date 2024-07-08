import React from "react";
import Button from "../element/button";
import { useState } from "react";
import Navbar from "../fragment/Navbar";
const NavbarLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-around  items-center">
    <Navbar/>
    </div>
  );
};

export default NavbarLayout;
