import React from "react";

const OverlapingCards = ({ name, text, mainImg, maskImg, left = true }) => {
  return (
    <div className="sm:w-[45%] lg:w-[30%] xl:w-[22.5%] 3xl:w-1/4">
      <div className="relative">
        <img
          style={{
            filter: "grayscale(90%)",
          }}
          src={mainImg}
          className="aspect-[2/3] xs:aspect-[4/5] sm:aspect-[2/3] object-cover"
          alt=""
        />
        <img
          style={{
            filter: "grayscale(10%)",
          }}
          src={maskImg}
          className={`hidden lg:inline-block h-[7pc] xl:h-[8pc] 3xl:h-[14pc] aspect-[16/9] object-cover object-center absolute top-[60%] ${
            left
              ? "right-full translate-x-[90%]"
              : "left-full -translate-x-[90%]"
          }`}
          alt=""
        />
      </div>
      <div>
        <p
          style={{ lineHeight: 1 }}
          className="mt-[0.6pc] text-[1.55pc] sm:text-[1.75pc] lg:text-2xl 3xl:text-4xl tracking-wide font-[400]"
        >
          {name}
        </p>
        <p className="mt-[0.4pc] text-[0.85pc] sm:text-[0.9pc] lg:text-sm 3xl:text-lg font-[250]">
          {text}
        </p>
      </div>
      <div className="mt-[0.2pc] text-xs 3xl:text-sm tracking-widest font-[Inter] text-[#C42C39] cursor-not-allowed">
        <span className="underline underline-offset-4">Read more</span>
      </div>
    </div>
  );
};

export default OverlapingCards;
