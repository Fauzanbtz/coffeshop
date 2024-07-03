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
    <div className="flex justify-center items-center gap-10 carousel-item">
      {items.map((item) => (
        <div key={item.id} className="flex gap-4 flex-col h-[18rem] w-[16rem] bg-[#F8F4E1] rounded-xl items-center text-center">
          <div className="flex justify-center pt-2">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-white"
              src={item.image}
              alt="profile"
            />
          </div>
          <div className="text-center mt-2">
            <div className="text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{item.judul}</h2>
            <p className="mt-2 text-gray-600">{item.keterangan}</p>
            <div className="mt-3 text-green-600 font-medium">{item.name}</div>
            <div className="mt-1 text-gray-500 text-sm">{item.waktu}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardReview;
