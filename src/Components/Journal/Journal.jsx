import React from "react";

const Journal = () => {
  return (
    <div>
      {/* Text */}
      <div className="mt-36 text-center text-[40px] font-[SaolDisplay-Light] leading-none">
        <p>Spain Collection has selected the best places and traditions</p>
        <p>to turn your luxury trip into an unforgettable memory</p>
      </div>
      {/* Grid Layout */}
      <div className="h-20 w-[95%] mx-auto mt-24 grid grid-cols-[35%_25%_35%] justify-between border-4 border-black">
        {/* Left Strip */}
        <div className="h-full bg-red-400"></div>
        {/* Middle Strip */}
        <div className="h-full bg-red-500"></div>
        {/* Right Strip */}
        <div className="h-full bg-red-700"></div>
      </div>
    </div>
  );
};

export default Journal;
