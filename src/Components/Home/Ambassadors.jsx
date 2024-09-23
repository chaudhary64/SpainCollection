import React from "react";

const Ambassadors = ({ src, name, text }) => {
  return (
    <div className="w-[22%]">
      <img className="object-cover" src={src} alt="" />
      <p className="text-center text-xl">{name}</p>
      <p className="text-center text-sm">{text}</p>
    </div>
  );
};

export default Ambassadors;
