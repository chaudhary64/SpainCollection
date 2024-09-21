import React from "react";

const Expander = () => {
  return (
    <section className="h-[300vh] border-4 border-blue-500 relative">
      <div className="h-screen w-full mt-44 border-2 overflow-clip flex justify-between items-center gap-7 sticky top-0">
        {/*  1st Column */}
        <div className="h-[50%]">
          <video
            className="object-cover h-full"
            autoPlay
            muted
            loop
            src="/videoes/Home/Flamenca-2.mp4"
          ></video>
        </div>
        {/* 2nd Column */}
        <div className="h-[71.5%] w-[30%] flex flex-col justify-between border-4">
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
        <div className="h-full w-[40%]">
          <video
            className="object-cover h-full"
            autoPlay
            muted
            loop
            src="/videoes/Home/Bg_Home.mp4"
          ></video>
        </div>
        {/* 4th Column */}
        <div className="h-[71.5%] w-[30%] flex flex-col justify-between border-4">
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
        <div className="h-[50%]">
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
