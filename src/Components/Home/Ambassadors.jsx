import { IoPlay } from "react-icons/io5";

const Ambassadors = ({ src, name, text }) => {
  return (
    <div className="w-[20%]">
      <div className="relative">
        <img className="object-cover" src={src} alt="" />
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="h-[72px] w-[72px] border-2 border-[#D6D6D6] rounded-full absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <IoPlay className="text-white h-5 " />
        </div>
      </div>
      <div
        style={{
          mixBlendMode: "difference",
        }}
        className="mt-3 text-white"
      >
        <p className="text-center text-2xl font-[360]">{name}</p>
        <p className="text-center text-base font-extralight">{text}</p>
      </div>
    </div>
  );
};

export default Ambassadors;
