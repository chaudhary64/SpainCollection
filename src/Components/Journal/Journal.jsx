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
      <div className="h-20 w-full mt-24 grid grid-cols-3">
        <div className="h-full w-full bg-red-400"></div>
        <div className="h-full w-full bg-red-500"></div>
        <div className="h-full w-full bg-red-700"></div>
      </div>
    </div>
  );
};

export default Journal;
