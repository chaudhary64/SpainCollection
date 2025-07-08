import { useContext } from "react";
import Magnet from "../Magnetic/Magnet";
import { Info } from "../Context/Context";

const InfoCards = ({ name, text, ImageSrc, videoSrc, isDragging }) => {
  const { setPlayerInfo } = useContext(Info);
  return (
    <div>
      <div
        className="shrink-0 h-[35vh] xs:h-[40vh] sm:h-[45vh] md:h-[24pc] xl:h-[35pc] 3xl:h-[57pc] w-[24vh] xs:w-[28vh] sm:w-[32vh] md:w-[16pc] xl:w-[22pc] 3xl:w-[36pc]"
        style={{
          backgroundImage: `url(${ImageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `${isDragging ? "scale(0.95)" : "scale(1)"}`,
          transition: "all .8s cubic-bezier(0.050,0.760,0.380,1.015)",
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black/60">
          {/* Icon */}
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
      </div>
      {/* Text */}
      <div
        style={{ lineHeight: 1.25 }}
        className="mt-[1pc] 3xl:mt-[1.2pc] font-[Inter] tracking-wide"
      >
        <p className="text-[15px] xs:text-lg lg:text-lg xl:text-2xl 3xl:text-4xl">
          {name}
        </p>
        <p className="text-white/90 text-[10px] xs:text-xs xl:text-base 3xl:text-2xl">
          {text}
        </p>
      </div>
    </div>
  );
};

export default InfoCards;
