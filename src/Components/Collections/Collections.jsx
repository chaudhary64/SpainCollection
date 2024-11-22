import React from "react";

const Collections = () => {
  return (
    <div className="inset-0 fixed -z-10">
      {/* Default Background Image */}
      <div className="inset-0 absolute -z-50">
        <img
          src="/images/Collections/home.webp"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="inset-0 bg-black/60 absolute z-10"></div>
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
    </div>
  );
};

export default Collections;
