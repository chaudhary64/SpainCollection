import React from "react";
import { IoPlay } from "react-icons/io5";

const InfoCards = ({ name, text, src, isDragging }) => {
  return (
    <div
      className="shrink-0 w-[306px]"
      style={{
        transform: `${isDragging ? "scale(0.95)" : "scale(1)"}`,
        transition: "all .8s cubic-bezier(0.050,0.760,0.380,1.015)",
      }}
    >
      <div className="relative">
        <img
          src={src}
          className="h-[460px] w-full object-cover object-center"
          alt=""
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black/60">
          <div className="h-[72px] w-[72px] border-2 border-[#D6D6D6] rounded-full flex justify-center items-center">
            <IoPlay className="text-white h-5 " />
          </div>
        </div>
      </div>
      <div className="mt-4 font-[Inter] tracking-wide">
        <p className="text-xl">{name}</p>
        <p className="text-xs text-white/90">{text}</p>
      </div>
    </div>
  );
};

export default InfoCards;
