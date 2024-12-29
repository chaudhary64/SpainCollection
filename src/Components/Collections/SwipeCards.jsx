import React from "react";

const SwipeCards = ({ src, text }) => {
  return (
    <div className="h-full">
      <img className="min-h-[20pc] w-full object-cover" src={src} alt="" />
      <p
        style={{
          lineHeight: 1,
        }}
        className="font-[SaolDisplay-Light] text-center text-[1.9pc] mt-[1.8pc]"
      >
        {text}
      </p>
    </div>
  );
};

export default SwipeCards;
