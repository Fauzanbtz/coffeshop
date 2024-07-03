import React from "react";
import Button from "../element/button";

const Card = () => {
  const item = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/564x/2e/e8/12/2ee8124cf986d29f499202fac499698f.jpg",
      name: "Cappucino",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor",
      price: "$5.00",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/564x/2e/e8/12/2ee8124cf986d29f499202fac499698f.jpg",
      name: "Cappucino",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor",
      price: "$5.00",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/564x/2e/e8/12/2ee8124cf986d29f499202fac499698f.jpg",
      name: "Cappucino",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor",
      price: "$5.00",
    },

    {
      id: 4,
      image:
        "https://i.pinimg.com/564x/2e/e8/12/2ee8124cf986d29f499202fac499698f.jpg",
      name: "Cappucino",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor",
      price: "$5.00",
    },
  ];
  return (
    <div className="flex justify-center items-center gap-10 carousel-item">
      {item.map((item) => (
        <div key={item.id} className="flex gap-4 flex-col h-[27rem] w-[16rem] bg-[#F8F4E1] rounded-xl ">
          <img
            src={item.image}
            alt="coffe"
            className="w-full p-3 h-40 rounded-xl object-cover"
          />
          <div className="flex flex-col h-full justify-between p-3">
            <h1 className="text-xl font-bold">{item.name}</h1>
            <p>{item.description}</p>
            <div className="flex justify-between items-center">
              <p>{item.price}</p>
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
