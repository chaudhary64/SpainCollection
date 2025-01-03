import React from "react";
import { IoPlay } from "react-icons/io5";

const InfoCards = ({ name, text, src, isDragging }) => {
  return (
    <div>
      <div
        className="shrink-0 h-[35vh] xs:h-[40vh] sm:h-[45vh] md:h-[24pc] xl:h-[35pc] 3xl:h-[57pc] w-[24vh] xs:w-[28vh] sm:w-[32vh] md:w-[16pc] xl:w-[22pc] 3xl:w-[36pc]"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `${isDragging ? "scale(0.95)" : "scale(1)"}`,
          transition: "all .8s cubic-bezier(0.050,0.760,0.380,1.015)",
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black/60">
          {/* Icon */}
          <div className="h-[72px] w-[72px] border-2 border-[#D6D6D6] rounded-full flex justify-center items-center">
            <IoPlay className="text-white h-5 " />
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mt-4 font-[Inter] tracking-wide">
        <p className="text-base xs:text-lg lg:text-base xl:text-2xl 3xl:text-5xl">
          {name}
        </p>
        <p className="text-white/90 text-xs xs:text-sm lg:text-base xl:text-xl 3xl:text-4xl">
          {text}
        </p>
      </div>
    </div>
  );
};

export default InfoCards;
