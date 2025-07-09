import { useContext, useMemo, memo, lazy, Suspense } from "react";
import { Info } from "../Context/Context";
// Import Swiper React components with tree-shaking
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import only necessary Swiper CSS - Vite will handle CSS optimization
import "swiper/css";
import "swiper/css/pagination";

// Lazy load components for code splitting
const HoverCover = lazy(() => import("./HoverCover"));
const Footer = lazy(() => import("../Footer/Footer"));
const SwipeCards = lazy(() => import("./SwipeCards"));

// Memoized component for better performance
const Collections = memo(() => {
  const {
    state,
    yourDestinationData,
    yourExperienceData,
    screenWidth,
    chooseYourDestinationCardsData,
    chooseyourExperienceCardsData,
  } = useContext(Info);

  // Memoize computed values to prevent unnecessary recalculations
  const isDesktop = useMemo(() => screenWidth > 1024, [screenWidth]);

  const sectionStyle = useMemo(
    () => ({
      marginTop: `-${state.height}px`,
      paddingTop: `${state.height}px`,
    }),
    [state.height]
  );

  const textStyle = useMemo(
    () => ({
      lineHeight: "1.15",
    }),
    []
  );

  const mobileTextStyle = useMemo(
    () => ({
      lineHeight: 1.35,
    }),
    []
  );

  // Memoize Swiper configuration
  const swiperConfig = useMemo(
    () => ({
      spaceBetween: 25,
      pagination: {
        clickable: true,
      },
      modules: [Pagination],
      className:
        "mySwiper w-[75%] sm:w-[50%] md:w-[55%] mt-[2rem] xs:mt-[2.5rem] overflow-visible",
    }),
    []
  );

  // Memoize rendered lists to prevent unnecessary re-renders
  const experienceItems = useMemo(
    () =>
      yourExperienceData.map((item) => (
        <Suspense
          key={item.id}
          fallback={
            <div className="w-32 h-16 bg-gray-200 animate-pulse rounded" />
          }
        >
          <HoverCover {...item} />
        </Suspense>
      )),
    [yourExperienceData]
  );

  const destinationItems = useMemo(
    () =>
      yourDestinationData.map((item) => (
        <Suspense
          key={item.id}
          fallback={
            <div className="w-32 h-16 bg-gray-200 animate-pulse rounded" />
          }
        >
          <HoverCover {...item} />
        </Suspense>
      )),
    [yourDestinationData]
  );

  const destinationSwipeItems = useMemo(
    () =>
      chooseYourDestinationCardsData.map((item) => (
        <SwiperSlide key={item.text}>
          <Suspense
            fallback={
              <div className="w-full h-64 bg-gray-200 animate-pulse rounded" />
            }
          >
            <SwipeCards {...item} />
          </Suspense>
        </SwiperSlide>
      )),
    [chooseYourDestinationCardsData]
  );

  const experienceSwipeItems = useMemo(
    () =>
      chooseyourExperienceCardsData.map((item) => (
        <SwiperSlide key={item.text}>
          <Suspense
            fallback={
              <div className="w-full h-64 bg-gray-800 animate-pulse rounded" />
            }
          >
            <SwipeCards {...item} dark={true} />
          </Suspense>
        </SwiperSlide>
      )),
    [chooseyourExperienceCardsData]
  );

  if (isDesktop) {
    return (
      <section
        style={sectionStyle}
        className="h-screen w-full py-[0.0625rem] flex flex-col justify-evenly relative"
      >
        {/* Background Image with lazy loading */}
        <div className="inset-0 absolute -z-50">
          <img
            src="/images/Collections/home.webp"
            className="h-full w-full object-cover"
            alt="Spain Collection Background"
            loading="lazy"
            decoding="async"
          />
          <div className="inset-0 bg-black/60 absolute"></div>
        </div>

        {/* Header Text */}
        <div
          style={textStyle}
          className="w-fit mx-auto text-[1.8rem] xl:text-[2.5rem] 3xl:text-[5rem] text-center font-[SaolDisplay-Light] text-white tracking-wide"
        >
          <p>Spain Collection has selected outstanding destinations, and</p>
          <p>hand-picked experiences to make your trip unforgettable.</p>
        </div>

        {/* Choose Your Experience */}
        <div>
          <div className="w-fit mx-auto">
            <span className="font-[Inter] font-[300] uppercase text-[#BF1826] tracking-widest text-[0.7rem] xl:text-[1rem] 3xl:text-[2rem]">
              Choose your experience
            </span>
          </div>
          <div className="w-[70%] 3xl:w-[60%] mx-auto flex flex-wrap justify-center items-center gap-[0.3125rem_1.875rem] text-white">
            {experienceItems}
          </div>
        </div>

        {/* Choose Your Destination */}
        <div>
          <div className="w-fit mx-auto">
            <span className="font-[Inter] font-[300] uppercase text-[#BF1826] tracking-widest text-[0.7rem] xl:text-[1rem] 3xl:text-[2rem]">
              Choose your destination
            </span>
          </div>
          <div className="w-[70%] 3xl:w-[60%] mx-auto flex flex-wrap justify-center items-center gap-[0.3125rem_1.875rem] text-white">
            {destinationItems}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <p
        style={mobileTextStyle}
        className="mt-[4rem] w-[80%] xs:w-[65%] mx-auto text-[1.9rem] xs:text-[2.3rem] sm:text-[2.7rem] md:text-[3.5rem] text-center font-[SaolDisplay-Light]"
      >
        Spain Collection has selected outstanding destinations, and hand-picked
        experiences to make your trip unforgettable.
      </p>

      {/* Choose Your Destination */}
      <section>
        <div className="mt-[3rem] xs:mt-[3.5rem]">
          <p className="text-[#BF1826] text-center text-[0.7rem] xs:text-[0.9rem] font-[400] font-['Inter'] tracking-widest uppercase">
            choose your destination
          </p>
        </div>
        <Swiper {...swiperConfig}>{destinationSwipeItems}</Swiper>
      </section>

      {/* Choose Your Experience */}
      <section className="mt-[4rem] pt-[3rem] xs:mt-[3.5rem] xs:pt-[3.5rem] bg-black">
        <div>
          <p className="text-[#BF1826] text-center text-[0.7rem] xs:text-[0.9rem] font-[400] font-['Inter'] tracking-widest uppercase">
            choose your experience
          </p>
        </div>
        <Swiper {...swiperConfig}>{experienceSwipeItems}</Swiper>
      </section>

      {/* Separator */}
      <aside className="pt-[20vh] xs:pt-[25vh] md:pt-[12rem] h-[1px] w-full bg-black"></aside>

      <Suspense
        fallback={<div className="w-full h-64 bg-gray-900 animate-pulse" />}
      >
        <Footer dark={true} />
      </Suspense>
    </>
  );
});

Collections.displayName = "Collections";

export default Collections;
