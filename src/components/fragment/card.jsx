import Button from "../element/button";
import { useState, useEffect } from "react";
import useFetchProducts from "../../utils/useFetchData";

const trimDescription = (description, wordLimit) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};
const Card = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await useFetchProducts();
      setProducts(data);
    };
    fetchData();
  }, [products]);
  return (
    <div className="carousel carousel-center flex items-center rounded-box ">
      {products.length === 0 ? (
        <div className="text-3xl flex gap-2">
          <p className="text-Brown-100 ">Loading </p>
          <span className="loading loading-spinner loading-lg text-Brown-100"></span>
        </div>
      ) : (
        products.map(({ id, name, description, image }) => (
          <div
            key={id}
            data-aos="fade-up"
            className="card bg-Brown-100 w-60 md:w-80 h-96 md:h-[30rem]  shadow-xl mx-6 carousel-item "
          >
            <figure className="w-full  h-60 max-w-md">
              {products.length === 0 ? (
                <div className="w-full h-full animate-pulse duration-75 bg-gray-300 "></div>
              ) : (
                <img
                  src={image}
                  alt="Shoes"
                  className="w-full h-full object-cover"
                />
              )}
            </figure>
            <div className="card-body h-40">
              {products.length === 0 ? (
                <>
                  <span className=" animate-pulse duration-75 bg-gray-300 py-3  w-24"></span>
                  <span className=" animate-pulse duration-75 bg-gray-300 py-2  w-full"></span>
                  <span className=" animate-pulse duration-75 bg-gray-300 py-2  w-full"></span>
                  <span className=" animate-pulse duration-75 bg-gray-300 py-2  w-full"></span>
                  <span className=" animate-pulse duration-75 bg-gray-300 py-2  w-full"></span>
                </>
              ) : (
                <>
                  <h2 className="card-title">{name}</h2>
                  <p className="hidden md:inline">{trimDescription(description, 20)}</p>
                </>
              )}

              <div className="card-actions justify-end">
                <Button className="btn-md btn mt-3 md:m-0 hover:bg-Brown-300 bg-Brown-500 text-Brown-100 items-center">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
