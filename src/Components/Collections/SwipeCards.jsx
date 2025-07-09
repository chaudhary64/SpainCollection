import { memo, useMemo } from "react";

const SwipeCards = memo(({ src, text, dark = false }) => {
  // Memoize inline styles to prevent recreation on every render
  const textStyle = useMemo(
    () => ({
      lineHeight: 1,
      color: dark ? "#fff" : "#000",
    }),
    [dark]
  );

  // Memoize CSS classes to prevent string concatenation on every render
  const textClasses = useMemo(
    () =>
      "font-[SaolDisplay-Light] text-center text-[1.9rem] xs:text-[2.1rem] md:text-[2.5rem] mt-[1.8rem]",
    []
  );

  const imageClasses = useMemo(
    () =>
      "min-h-[20rem] xs:min-h-[27rem] sm:min-h-[30rem] md:min-h-[37rem] w-full object-cover",
    []
  );

  return (
    <div className="h-full pb-[1.5rem]">
      <img
        className={imageClasses}
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <p style={textStyle} className={textClasses}>
        {text}
      </p>
    </div>
  );
});

SwipeCards.displayName = "SwipeCards";

export default SwipeCards;
