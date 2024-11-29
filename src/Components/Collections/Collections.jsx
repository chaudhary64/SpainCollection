import React from "react";
import HoverCover from "./HoverCover";
import { useContext } from "react";
import { Info } from "../Context/Context";

const Collections = () => {
  const { state, yourDestinationData, yourExperienceData } = useContext(Info); 

  return (
    <div
      style={{
        marginTop: `-${state.height}px`,
      }}
      className="h-screen w-full relative py-[1px]"
    >
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
      {/* Choose Your Destination */}
      <div>
        <div className="w-fit mx-auto mt-10">
          <span className="font-[Inter] font-[300] uppercase text-[#BF1826] tracking-widest">
            Choose your destination
          </span>
        </div>
        {/* Hover Cover */}
        <div className="w-[70%] mx-auto mt-4 flex flex-wrap justify-center items-center gap-[5px_30px] text-white">
          {yourDestinationData.map((item) => (
            <HoverCover key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
