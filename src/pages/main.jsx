import React from "react";
import Button from "../components/element/button";
import coffeImage from "../assets/coffeImage.jpeg";
import Card from "../components/fragment/card";
import CardReview from "../components/fragment/cardReview";
import Navbar from "../components/layout/navbarLayout";
import Footer from "../components/layout/footer";
import { Link } from "react-router-dom";

const Main = ({bgColor}) => {
  return (
    <>
      <div className={`w-full h-screen ${bgColor} `}>
        <div className="flex flex-col h-full gap-4  justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-Brown-800 font-bold text-center" data-aos="fade-up">
            FRESH COFFE IN THE MORNING
          </h1>
          <p className="text-center  text-xs md:text-base w-1/2">
           Ojan Kont#l Ngent#d Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea dolorum delectus culpa reiciendis, rem autem expedita et iusto a eveniet necessitatibus corporis iste vitae minima atque. Laudantium, animi. Et, incidunt nobis.
          </p>
          <Link to={"/menu"}>
            <Button className="bg-Brown-500 mt-5 text-Brown-100 hover:bg-Brown-300 py-3 px-5 rounded">
              ORDER NOW
            </Button>
          </Link>
        </div>
      </div>
      {/* About */}
      <div className="w-full h-[40rem] bg-Brown-300 flex flex-col justify-center items-center md:flex-row md:justify-around md:items-center">
        <div className="">
          <img
            src={coffeImage}
            alt="coffe image"
            className="w-60 mb-4 md:w-80 rounded-full"
            data-aos="fade-right"
          />
        </div>
        <div className="flex flex-col gap-5 md:items-end items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-Brown-100">Welcome to Bartons incredibly</h1>
          <p className="text-Brown-800 text-sm md:text-base w-2/3 md:w-full">
            Your best local coffee. In addition to delicious sandwiches and
            cakes and hot dish of the day,
          </p>
          <Button className=" p-3 rounded bg-Brown-800 text-Brown-100">
            VIEW MORE
          </Button>
        </div>
      </div>
      {/* menu */}
      <div className="w-full h-[40rem] bg-[#74512D] flex md:justify-center">
        <Card />
      </div>
      {/* review */}
      <div className="w-full h-[30rem] bg-Brown-500 flex md:justify-center carousel carousel-center">
        <CardReview />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Main;
