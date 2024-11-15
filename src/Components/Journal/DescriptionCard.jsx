import React from "react";
import { IoPlay } from "react-icons/io5";

const DescriptionCard = ({ img, text }) => {
  return (
    <div
      style={{ transition: "all .5s ease-in-out" }}
      className="w-full p-6 hover:shadow-[2px_2px_30px_#ccc]"
    >
      <div className="relative">
        <div className="h-[460px] w-full bg-red-500">
          <img src={img} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center bg-black/60">
          <div className="h-[72px] w-[72px] border-2 border-[#D6D6D6] rounded-full flex justify-center items-center">
            <IoPlay className="text-white h-5 " />
          </div>
        </div>
      </div>
      {/* Text */}
      <p className="w-1/2 mt-6 font-[Inter] font-[400] text-xl leading-none">
        {text}
      </p>
    </div>
  );
};

export default DescriptionCard;
