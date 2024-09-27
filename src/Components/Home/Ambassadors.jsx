import React from "react";

const Ambassadors = ({ src, name, text }) => {
  return (
    <div className="w-[22%]">
      <img className="object-cover" src={src} alt="" />
      <div
        style={{
          mixBlendMode: "difference",
        }}
        className="mt-3 text-white"
      >
        <p className="text-center text-xl font-[360]">{name}</p>
        <p className="text-center text-sm font-extralight">{text}</p>
      </div>
    </div>
  );
};

export default Ambassadors;
