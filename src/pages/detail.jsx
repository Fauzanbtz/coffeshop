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
      try {
        const response = await axios.get(`https://fake-coffee-api.vercel.app/api/${id}`);
        console.log(response.data);
        setItem(response.data[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  
  if (loading) return ;

  return (
    <>
      <NavbarMenu className="bg-[#313131]" />
      <div className="border p-4">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
    </>
  );
};

export default Detail;
