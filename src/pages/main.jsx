import React from "react";
import Button from "../components/element/button";
import coffeImage from "../assets/coffeImage.jpeg";
import Card from "../components/fragment/card";
import CardReview from "../components/fragment/cardReview";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[40rem] bg-[#F8F4E1]">
        <div className="flex flex-col gap-10 h-full justify-center items-center">
          <h1 className="text-5xl font-bold text-center md:text-left ">
            FRESH COFFE IN THE MORING
          </h1>
          <p className="text-center md:text-left p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link to={"/menu"}>
            <Button className="bg-[#AF8F6F] w-32 h-10 rounded-xl">
              ORDER NOW
            </Button>
          </Link>
        </div>
      </div>
      {/* About */}
      <div className="w-full h-[40rem] bg-[#AF8F6F] flex flex-col justify-center items-center md:flex-row md:justify-around md:items-center">
        <div className="">
          <img
            src={coffeImage}
            alt="coffe image"
            className="w-80 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-5 md:items-end items-center text-center">
          <h1 className="text-5xl font-bold">Welcome to Bartons incredibly</h1>
          <p>
            Your best local coffee. In addition to delicious sandwiches and
            cakes and hot dish of the day,
          </p>
          <Button className="bg-[#F8F4E1] w-32 h-10 rounded-xl">
            VIEW MORE
          </Button>
        </div>
      </div>
      {/* menu */}
      <div className="w-full h-[40rem] bg-[#74512D] flex md:justify-center">
        <Card />
      </div>
      {/* review */}
      <div className="w-full h-[30rem] bg-[#FED8B1] flex md:justify-center carousel carousel-center">
        <CardReview />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Main;
