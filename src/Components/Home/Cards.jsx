import { FaLongArrowAltRight } from "react-icons/fa";

const Cards = ({
  strongHeading,
  weakHeading,
  title,
  text,
  src,
  isDragging,
}) => {
  return (
    <div
      className="shrink-0 h-[35vh] xs:h-[40vh] sm:h-[45vh] md:h-[24pc] xl:h-[35pc] 3xl:h-[57pc] w-[24vh] xs:w-[28vh] sm:w-[32vh] md:w-[16pc] xl:w-[22pc] 3xl:w-[36pc]"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `${isDragging ? "scale(0.95)" : "scale(1)"}`,
        transition: "all .8s cubic-bezier(0.050,0.760,0.380,1.015)",
      }}
    >
      <div className="h-full w-full bg-[#0000008c] relative">
        <div className="p-4 xl:p-8 w-full absolute bottom-0 flex flex-col gap-1 md:gap-2 3xl:gap-3">
          <p
            style={{
              fontFamily: "Inter",
            }}
            className="text-[0.6pc] xs:text-[0.7pc] md:text-[0.8pc] 3xl:text-[1.4pc]"
          >
            <span
              style={{
                lineHeight: "1.5",
              }}
              className="text-red-600"
            >
              {strongHeading}
            </span>{" "}
            {weakHeading}
          </p>
          <p
            style={{
              lineHeight: "1.15",
            }}
            className="text-[1.1pc] xs:text-[1.4pc] md:text-[1.7pc] xl:text-4xl 3xl:text-[3.2pc]"
          >
            {title}
          </p>
          <div className="flex gap-5 items-end text-[0.7pc] xs:text-[0.78pc] md:text-[1pc] xl:text-base 3xl:text-[1.8pc]">
            <p
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                lineHeight: "1.15",
              }}
            >
              {text}
            </p>
            <div className="shrink-0 h-12 w-12 rounded-full flex justify-center items-center border-2 border-white">
              <FaLongArrowAltRight className="text-white h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
