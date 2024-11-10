import React from "react";

const OverlapingCards = ({ name, text, mainImg, maskImg, left = true }) => {
  return (
    <div className="">
      <div className="relative">
        <img
          style={{
            filter: "grayscale(90%)",
          }}
          src={mainImg}
          className="w-72 object-cover"
          alt=""
        />
        <img
          style={{
            filter: "grayscale(10%)",
          }}
          src={maskImg}
          className={`w-52 h-32 object-cover object-center absolute top-[60%] ${
            left ? "right-full translate-x-1/2" : "left-full -translate-x-1/2"
          }`}
          alt=""
        />
      </div>
      <div className="font-[Inter]">
        <p className="mt-2.5 text-[21px] tracking-wide font-[400]">{name}</p>
        <p className="text-[13px] font-[250]">{text}</p>
      </div>
      <div className="mt-3 text-xs tracking-widest font-[Inter] text-[#C42C39]">
        <span className="underline underline-offset-4">Read more</span>
      </div>
    </div>
  );
};

export default OverlapingCards;
