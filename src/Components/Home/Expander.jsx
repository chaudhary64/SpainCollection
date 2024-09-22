import React from "react";

const Expander = () => {
  return (
    <section className="h-[300vh] border-4 border-blue-500 relative">
      {/* Text */}
      <div className="w-full border-2 border-amber-100 text-4xl font-light flex flex-col items-center absolute top-24 z-[1]">
        <div className="text-center">
          <p>Spain Collection is your expert partner for deluxe</p>
          <p>bespoke travel experiences in</p>
        </div>
        <p className="mt-28 text-8xl italic">
          Spain & <br /> Portugal
        </p>
      </div>
      <div className="h-screen mt-24 flex justify-center items-center flex-nowrap gap-5 sticky top-0 overflow-clip">
        {/*  1st Column */}
        <div className="shrink-0 h-[50%] w-[14%]">
          <video
            className="object-cover h-full"
            autoPlay
            muted
            loop
            src="/videoes/Home/Flamenca-2.mp4"
          ></video>
        </div>
        {/* 2nd Column */}
        <div className="shrink-0 h-[71.5%] w-[20%] flex flex-col justify-between">
          <div className="w-full">
            <video
              className="object-cover h-full"
              autoPlay
              muted
              loop
              src="/videoes/Home/Secuencia-01_6-1.mp4"
            ></video>
          </div>
          <div className="w-full">
            <video
              className="object-cover h-full"
              autoPlay
              muted
              loop
              src="/videoes/Home/Secuencia-01-1.mp4"
            ></video>
          </div>
        </div>
        {/* 3rd Column */}
        <div className="shrink-0 h-full w-[40%] relative">
          <video
            className="object-cover h-full w-full"
            autoPlay
            muted
            loop
            src="/videoes/Home/Bg_Home.mp4"
          ></video>
        </div>
        {/* 4th Column */}
        <div className="shrink-0 h-[71.5%] w-[20%] flex flex-col justify-between">
          <div className="w-full">
            <video
              className="object-cover h-full"
              autoPlay
              muted
              loop
              src="/videoes/Home/Secuencia-01_2-1.mp4"
            ></video>
          </div>
          <div className="w-full">
            <video
              className="object-cover h-full"
              autoPlay
              muted
              loop
              src="/videoes/Home/Secuencia-01_8-1.mp4"
            ></video>
          </div>
        </div>
        {/* 5th Column */}
        <div className="shrink-0 h-[50%] w-[14%]">
          <video
            className="object-cover h-full"
            autoPlay
            muted
            loop
            src="/videoes/Home/Secuencia-01_7-1.mp4"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Expander;
