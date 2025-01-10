import { useContext } from "react";
import Magnet from "../Magnetic/Magnet";
import { Info } from "../Context/Context";

const Ambassadors = ({ imageSrc, videoSrc, name, text }) => {
  const { setPlayerInfo } = useContext(Info);
  return (
    <div className="w-32 xs:w-[140px] sm:w-40 md:w-52 lg:w-60 xl:w-[24%]">
      <div className="relative">
        <img className="w-full object-cover" src={imageSrc} alt="" />
        <div className="absolute inset-0 bg-black/55"></div>
        <div
          onClick={() =>
            setPlayerInfo({
              src: videoSrc,
              isPlaying: true,
            })
          }
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Magnet />
        </div>
      </div>
      <div
        style={{
          mixBlendMode: "difference",
        }}
        className="mt-3 text-white"
      >
        <p className="text-center text-sm md:text-[2.5vw] lg:text-lg xl:text-2xl 3xl:text-4xl font-[360]">
          {name}
        </p>
        <p className="md:mt-1 text-center text-xs md:text-[2vw] xl:text-base 3xl:text-3xl font-extralight">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Ambassadors;
