import React from "react";
import Button from "../element/button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const item = await axios
  .get("https://fake-coffee-api.vercel.app/api")
  .then((res) => res.data)
  .catch((err) => console.log(err));

const MenuCard = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/detail/${item.id}`);
  };
  return (
    <div className="flex flex-wrap items-center gap-10 carousel-item overflow-auto mx-10 justify-center">
      {item.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item)}
          className="flex flex-col md:h-[20rem] md:w-[16rem] w-32 h-52 bg-[#dbd4b0] rounded cursor-pointer">
          <div className=" md:p-3 border md:h-40 h-24 rounded-md bg-white m-2">
            <img
              src={item.image_url}
              alt="coffe"
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col h-full justify-between md:p-3 p-1">
            <div>
              <h1 className="md:text-xl text-sm font-bold">{item.name}</h1>
              <p className="text-sm mt-1 ml-1">{item.flavor_profile}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>${item.price}</p>
              <Button className="bg-[#C67C4E] md:w-32 md:h-10 w-10 font-bold h-8 text-xs text-white rounded-xl hover:bg-[#d1a386]">
                ADD
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
