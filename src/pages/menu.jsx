import React from "react";
import NavbarMenu from "../components/layout/navbarMenu";
import { useState } from "react";
import MenuCard from "../components/fragment/menuCard";

const Menu = () => {
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (item) => {
    setClickedItem(item);
  };

  const buttons = [
    { id: "item1", label: "All Coffee" },
    { id: "item2", label: "Macchiato" },
    { id: "item3", label: "Latte" },
    { id: "item4", label: "Americano" },
    { id: "item5", label: "Toast" },
    { id: "item6", label: "Robusta" },
  ];

  return (
    <>
      <div className="w-full h-[10rem] md:h-[20rem] bg-[#313131] mb-20 md:mb-32">
        <NavbarMenu />
        <div className=" rounded-xl m-7 ">
          <img
            src="../src/assets/promo.png"
            alt=""
            className="rounded-xl md:hidden"
          />
          <img
            src="../src/assets/promo2.png"
            alt=""
            className="rounded-xl hidden md:block"
          />
        </div>
      </div>

      <div className="flex w-full md:justify-center gap-2 md:gap-20 py-2 carousel">
        {buttons.map((button) => (
          <div key={button.id} className="carousel-item">
            <a
              href={`#${button.id}`}
              onClick={() => handleClick(button.id)}
              className={`btn btn-xl ${
                clickedItem === button.id ? "bg-[#c67f52]" : "bg-[#EDD6C8]"
              }`}>
              {button.label}
            </a>
          </div>
        ))}
      </div>
    
        <MenuCard />
      
    </>
  );
};

export default Menu;
