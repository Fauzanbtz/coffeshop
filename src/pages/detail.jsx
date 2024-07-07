import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarMenu from "../components/layout/navbarMenu";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        `https://kohi-backend.vercel.app/api/products/${id}`
      );
      setItem(res.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return;

  return (
    <>
      <NavbarMenu className="bg-[#313131]" />
      <div className="flex w-ful justify-around items-center mt-5">
        <div className="w-[30rem]">
          <img src={item.image} alt="" className="w-full rounded-lg" />
        </div>
        <div className="flex flex-col w-1/2 gap-3">
          <h1 className="text-4xl font-bold">{item.name}</h1>
          <p className="text-2xl font-semibold">{item.description}</p>
          <div className="flex gap-5">
            <div className="flex gap-3 items-center">
              <button
                className="btn sm:btn-sm md:btn-md px-10 py-5  bg-[#C67C4E]"
                onClick={() => setValue(value + 1)}>
                +
              </button>
              <p>{value}</p>
              <button
                className="btn sm:btn-sm md:btn-md px-10 py-5 bg-[#C67C4E]"
                onClick={() =>  value > 1 && setValue(value - 1)}>
                -
              </button>
            </div>
            <button className="btn btn-xs sm:btn-sm md:btn-md  lg:btn-lg bg-[#C67C4E]">
             Add to card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
