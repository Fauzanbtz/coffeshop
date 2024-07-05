import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarMenu from "../components/layout/navbarMenu";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <div className="flex w-1/2">
        <img src={item.image} alt="" className="w-[40rem]" />
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#C67C4E]">
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Detail;
