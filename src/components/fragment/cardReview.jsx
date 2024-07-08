import React from "react";

const CardReview = () => {
  const items = [
    {
      id: 1,
      image: "https://i.pinimg.com/564x/f3/25/81/f32581bc4fb29227428cdbd957d6535b.jpg",
      judul: "Sangat bagus",
      keterangan: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,”",
      name: "Fauzan",
      waktu: "2 hours ago",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/564x/f3/25/81/f32581bc4fb29227428cdbd957d6535b.jpg",
      judul: "Luar biasa",
      keterangan: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,”",
      name: "Rizki",
      waktu: "4 hours ago",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/564x/f3/25/81/f32581bc4fb29227428cdbd957d6535b.jpg",
      judul: "Hebat",
      keterangan: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,”",
      name: "Aisyah",
      waktu: "6 hours ago",
    },
    {
      id: 4,
      image: "https://i.pinimg.com/564x/f3/25/81/f32581bc4fb29227428cdbd957d6535b.jpg",
      judul: "Sangat baik",
      keterangan: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,”",
      name: "Dina",
      waktu: "8 hours ago",
    },
  ];

  return (
    <div className="flex justify-center items-center  gap-10 carousel-item">
      {items.map((item) => (
        <div key={item.id} className="flex gap-7 w-80 shadow rounded-md border-Brown-500 bg-Brown-800  flex-col p-4 items-center ">
          <div className="flex justify-center pt-2">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-white"
              src={item.image}
              alt="profile"
            />
          </div>
          <div className=" mt-2">
            <h2 className="text-xl text-center font-semibold text-Brown-100">{item.judul}</h2>
            <p className="mt-2 text-Brown-100 text-center">{item.keterangan}</p>
           <div className="flex justify-between mt-3">
           <p className=" font-medium text-Brown-100 text-right">Rating 9/10</p>
           <div className="font-medium text-Brown-100 text-right">-{item.name}</div>
           </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardReview;
