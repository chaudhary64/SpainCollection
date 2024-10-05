import { FaLongArrowAltRight } from "react-icons/fa";

const Cards = ({
  strongHeading,
  weakHeading,
  title,
  text,
  src,
  isDragging,
}) => {
  console.log(isDragging);
  return (
    <div
      className="shrink-0 h-full w-96"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `${isDragging ? "scale(0.95)" : "scale(1)"}`,
        transition: "all .8s cubic-bezier(0.050,0.760,0.380,1.015)"
      }}
    >
      <div className="h-full w-full bg-black opacity-60 relative">
        <div className="p-8 w-full absolute bottom-0">
          <p
            style={{
              fontFamily: "Inter",
            }}
            className="text-xs"
          >
            <span className="text-red-600">{strongHeading}</span> {weakHeading}
          </p>
          <p className="mt-1 text-4xl">{title}</p>
          <div className="mt-1.5 flex gap-5 items-end">
            <p
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
              className="text-base"
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
