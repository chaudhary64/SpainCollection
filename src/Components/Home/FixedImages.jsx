import React from "react";

const FixedImages = ({ src, number, text }) => {
  return (
    <div className="w-72 text-lg">
      <div
        className="h-[400px] w-72"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="mt-5">
        <p className="text-lg">{number}</p>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

export default FixedImages;
