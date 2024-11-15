import React from "react";
import { CiStopwatch } from "react-icons/ci";

const DateCard = ({ img, time, date, Heading, text }) => {
  return (
    <div
      style={{ transition: "all .5s ease-in-out" }}
      className="w-full p-6 hover:shadow-[2px_2px_30px_#ccc]"
    >
      <img src={img} className="w-full object-cover" alt="" />
      {/* Time and Date */}
      <div className="h-fit mt-8 flex items-center gap-4 leading-none tracking-widest text-black font-[Inter]">
        <span className="text-sm">{date}</span>
        <div className="h-3 w-[1px] rounded-3xl bg-black"></div>
        <div className="flex items-center gap-2 text-[#b2b2b2] text-xs">
          {" "}
          <CiStopwatch className="text-base" />
          {time}
        </div>
      </div>
      {/* Heading */}
      <p className="mt-10 text-4xl font-[SaolDisplay-Light]">{Heading}</p>
      {/* Text */}
      <p className="mt-4 font-[Inter] text-sm">{text}</p>
    </div>
  );
};

export default DateCard;
