import React from "react";
import Button from "../element/button";
import axios from "axios";
import { useState, useEffect } from "react";

const trimDescription = (description, wordLimit) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};
const Card = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://kohi-backend.vercel.app/api/products")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="flex items-center gap-10 carousel">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 flex-col h-[27rem] w-[16rem] bg-[#F8F4E1] rounded-xl carousel-item">
          <img
            src={item.image}
            alt="coffe"
            className="w-full p-3 h-40 rounded-xl object-cover"
          />
          <div className="flex flex-col h-full justify-between p-3">
            <h1 className="text-xl font-bold">{item.name}</h1>
            <p>{trimDescription(item.description, 10)}</p>
            <div className="flex justify-between items-center">
              <p>${item.price}</p>
              <Button className="bg-[#AF8F6F] w-32 h-10 rounded-xl">
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
