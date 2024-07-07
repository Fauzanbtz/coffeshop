import React from "react";
import Button from "../element/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const trimDescription = (description, wordLimit) => {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return description;
};

const item = await axios
  .get("https://kohi-backend.vercel.app/api/products")
  .then((res) => res.data)
  .catch((err) => console.log(err));

const MenuCard = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/detail/${item.id}`);
  };
  return (
    <div className="flex flex-wrap items-center gap-10 carousel-item overflow-auto mx-10 justify-center mt-5">
      {item.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item)}
          className="flex flex-col md:h-[20rem] md:w-[16rem] w-32 h-52 bg-[#dbd4b0] rounded cursor-pointer">
          <div className="flex justify-center border p-2  rounded-md m-2">
            <img
              src={item.image}
              alt="coffe"
              className="object-cover w-[6rem] h-[6rem] md:w-[14rem] md:h-[10rem] rounded-md"
            />
          </div>
          <div className="flex flex-col h-full justify-between md:p-3 p-1">
            <div>
              <h1 className="md:text-xl text-sm font-bold">{trimDescription(item.name, 2)}</h1>
              {/* <p className="text-sm mt-1 ml-1">{item.description}</p> */}
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
