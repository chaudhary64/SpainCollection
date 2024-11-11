import React from "react";

const InfoCards = ({ name, text, src, isDragging }) => {
  return (
    <div
      className="shrink-0 w-[310px]"
      style={{
        transform: `${isDragging ? "scale(0.95)" : "scale(1)"}`,
        transition: "all .8s cubic-bezier(0.050,0.760,0.380,1.015)",
      }}
    >
      <div className="relative">
        <img
          src={src}
          className="h-[440px] w-full object-cover object-center"
          alt=""
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>
      <div className="mt-5 font-[Inter]">
        <p className="text-xl">{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default InfoCards;
