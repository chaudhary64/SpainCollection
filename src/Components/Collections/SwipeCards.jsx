const SwipeCards = ({ src, text, dark = false }) => {
  return (
    <div className="h-full pb-[1.5pc] borde-4">
      <img
        className="min-h-[20pc] xs:min-h-[27pc] sm:min-h-[30pc] md:min-h-[37pc] w-full object-cover"
        src={src}
        alt=""
      />
      <p
        style={{
          lineHeight: 1,
          color: dark ? "#fff" : "#000",
        }}
        className="font-[SaolDisplay-Light] text-center text-[1.9pc] xs:text-[2.1pc] md:text-[2.5pc] mt-[1.8pc]"
      >
        {text}
      </p>
    </div>
  );
};

export default SwipeCards;
