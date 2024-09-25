import React from "react";

const FixedImages = ({ src, number, text }) => {
  console.log(src);
  return (
    <div className="w-72 text-lg">
      <div
        className="h-[400px] w-72"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundAttachment: "fixed",
        }}
      ></div>
      <p>{number}</p>
      <p>{text}</p>
    </div>
  );
};

export default FixedImages;
