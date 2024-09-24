import React from "react";
import { IoPlay } from "react-icons/io5";
import Expander from "./Expander";
import Ambassadords from "./Ambassadors";

const Home = () => {
  const AmbassadorsData = [
    {
      id: 1,
      src: "/images/Home/caratula_eneko.webp",
      name: "Eneko Atxa",
      text: "3 Michelin Stars Chef",
    },
    {
      id: 2,
      src: "/images/Home/caratula_pedro.webp",
      name: "Pedro Subijana",
      text: "3 Michelin Stars Chef",
    },
    {
      id: 3,
      src: "/images/Home/caratula_german.webp",
      name: "Germán Jiménez",
      text: "Journalist specialized in Fashion & Lifestyle",
    },
  ];
  return (
    <section>
      {/* Expander */}
      <Expander />
      {/* About US */}
      <div className="mt-64 border-2">
        <p className="text-[#BD1826] text-center text-lg">ABOUT US</p>
        <div className="relative w-[50%] mx-auto mt-20 border-4">
          <img
            className="object-cover opacity-40"
            src="/images/Home/caratula_video_abene_new.webp"
            alt=""
          />
          <div className="h-[72px] w-[72px] border-2 border-white rounded-full absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <IoPlay className="text-white h-5 " />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-center text-xl">Abene Mendizabal</p>
          <p className="text-center">Founder & CEO Spain Collection</p>
        </div>
      </div>
      {/* Ambassadors */}
      <div className="mt-40 border-2">
        <p className="text-[#BD1826] text-center text-lg uppercase">
          Ambassadors
        </p>
        <div className="mt-20 border-4 flex justify-evenly">
          {AmbassadorsData.map((item) => (
            <Ambassadords {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
