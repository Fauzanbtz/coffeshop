import React from "react";
import Button from "../element/button";
import { Link } from "react-router-dom";

const NavButton = (props) => {
  const { className } = props;
  return (
    <ul className={`${className} flex justify-center items-center`}>
      <li>
        <Button>HOME</Button>
      </li>
      <li>
        <Button>ABOUT</Button>
      </li>
      <li>
        <Button>MENU</Button>
      </li>
      <li>
        <Button>PRODUCTS</Button>
      </li>
      <li>
        <Button>LOCATIONS</Button>
      </li>
      <Link to={"/login"}>
        <li className="bg-[#C67C4E] p-2 rounded-lg">
          <Button>LOGIN</Button>
        </li>
      </Link>
    </ul>
  );
};

export default NavButton;
