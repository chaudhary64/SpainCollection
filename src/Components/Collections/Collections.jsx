import React from "react";
import HoverCover from "./HoverCover";

const Collections = () => {
  const yourExperienceData = [
    {
      id: 1,
      src: "/images/Collections/05-6.webp",
      text: "Food & Wine",
    },
    {
      id: 2,
      src: "/images/Collections/culture.webp",
      text: "Culture",
    },
    {
      id: 3,
      src: "/images/Collections/01-25.webp",
      text: "Traditions",
    },
    {
      id: 4,
      src: "/images/Collections/traditions_10.webp",
      text: "Religious Heritage",
    },
    {
      id: 5,
      src: "/images/Collections/01-91.webp",
      text: "Fashion & Shopping",
    },
    {
      id: 6,
      src: "/images/Collections/01-70.webp",
      text: "Sports",
    },
    {
      id: 7,
      src: "/images/Collections/02-68.webp",
      text: "Body & Soul",
    },
    {
      id: 8,
      src: "/images/Collections/01-80.webp",
      text: "Nature",
    },
  ];
  return (
    <div className="inset-0 fixed -z-[1]">
      {/* Default Background Image */}
      <div className="inset-0 absolute -z-50">
        <img
          src="/images/Collections/home.webp"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="inset-0 bg-black/60 absolute"></div>
      </div>
      {/* Some Text */}
      <div
        style={{
          lineHeight: "1.15",
        }}
        className="w-fit mx-auto mt-[16.5%] text-[40px] text-center font-[SaolDisplay-Light] text-white tracking-wide"
      >
        <p>Spain Collection has selected outstanding destinations, and</p>
        <p>hand-picked experiences to make your trip unforgettable.</p>
      </div>
      {/* Choose Your Experience */}
      <div>
        <div className="w-fit mx-auto mt-14">
          <span className="font-[Inter] font-[300] uppercase text-[#BF1826] tracking-widest">
            Choose your experience
          </span>
        </div>
        {/* Hover Cover */}
        <div className="w-[60%] mx-auto mt-4 flex flex-wrap justify-center items-center gap-[5px_30px] text-white">
          {yourExperienceData.map((item) => (
            <HoverCover key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
