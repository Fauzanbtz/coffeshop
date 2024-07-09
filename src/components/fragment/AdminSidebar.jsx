import React, { useState } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { SiCoffeescript } from "react-icons/si";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);

  const list = [
    {
      icon: <FaHome className="text-4xl text-Brown-800 " />,
      menu: "Apalah",
    },
    {
      icon: <LuUsers className="text-4xl text-Brown-800 " />,
      menu: "Users",
    },
    {
      icon: <FaShoppingCart className="text-4xl text-Brown-800 " />,
      menu: "Apalah",
    },
  ];

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`bg-Brown-300  h-screen relative transition-all duration-300 ${
        open ? "w-72" : "w-32"
      }`}>
      <div className=" ml-10">
        <div className="flex items-center h-20 w-full">
          <SiCoffeescript className=" text-Brown-800 text-3xl" />
          <h1
            className={` ${
              !open && "scale-0 hidden"
            } font-bold text-Brown-800 transition-none duration-75`}>
            Kohi-Shop
          </h1>
        </div>
        <div onClick={toggleMenu} className="absolute -right-4 top-5">
          <IoMdArrowDroprightCircle
            className={`text-4xl text-Brown-800 ${open && "rotate-180"}`}
          />
        </div>
        <ul className="flex flex-col">
          {list.map(({ icon, menu }) => (
            <li className="flex  items-center">
              {icon}
              <h1
                className={`origin-left ${
                  !open && "scale-0"
                } font-bold text-Brown-800 transition-none duration-75`}>
                {menu}
              </h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
