import React from "react";
import HoverCover from "./HoverCover";
import { useContext } from "react";
import Footer from "../Footer/Footer";
import { Info } from "../Context/Context";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SwipeCards from "./SwipeCards";

const Collections = () => {
  const {
    state,
    yourDestinationData,
    yourExperienceData,
    screenWidth,
    chooseYourDestinationCardsData,
    chooseyourExperienceCardsData,
  } = useContext(Info);

  return (
    <>
      {screenWidth > 1024 ? (
        // Layout for screens larger than 1024px
        <section
          style={{
            marginTop: `-${state.height}px`,
            paddingTop: `${state.height}px`,
          }}
          className="h-screen w-full py-[1px] flex flex-col justify-evenly relative"
        >
          {/* Default Background Image */}
          <div className="inset-0 absolute -z-50">
            <img
              src="/images/Collections/home.webp"
              className="h-full w-full object-cover"
              alt=""
            />
            <div className="inset-0 bg-black/60 absolute"></div>
          </div>
          {/* Some Text */}
          <div
            style={{
              lineHeight: "1.15",
            }}
            className="w-fit mx-auto text-[1.8pc] xl:text-[2.5pc] 3xl:text-[5pc] text-center font-[SaolDisplay-Light] text-white tracking-wide"
          >
            <p>Spain Collection has selected outstanding destinations, and</p>
            <p>hand-picked experiences to make your trip unforgettable.</p>
          </div>
          {/* Choose Your Experience */}
          <div>
            <div className="w-fit mx-auto">
              <span className="font-[Inter] font-[300] uppercase text-[#BF1826] tracking-widest text-[0.7pc] xl:text-[1pc] 3xl:text-[2pc]">
                Choose your experience
              </span>
            </div>
            {/* Hover Cover */}
            <div className="w-[70%] 3xl:w-[60%] mx-auto flex flex-wrap justify-center items-center gap-[5px_30px] text-white">
              {yourExperienceData.map((item) => (
                <HoverCover key={item.id} {...item} />
              ))}
            </div>
          </div>
          {/* Choose Your Destination */}
          <div>
            <div className="w-fit mx-auto">
              <span className="font-[Inter] font-[300] uppercase text-[#BF1826] tracking-widest text-[0.7pc] xl:text-[1pc] 3xl:text-[2pc]">
                Choose your destination
              </span>
            </div>
            {/* Hover Cover */}
            <div className="w-[70%] 3xl:w-[60%] mx-auto flex flex-wrap justify-center items-center gap-[5px_30px] text-white">
              {yourDestinationData.map((item) => (
                <HoverCover key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        // Layout for screens smaller than 1024px
        <>
          <p
            style={{
              lineHeight: 1.35,
            }}
            className="mt-[4pc] w-[80%] xs:w-[65%] mx-auto text-[1.9pc] xs:text-[2.3pc] sm:text-[2.7pc] md:text-[3.5pc] text-center font-[SaolDisplay-Light]"
          >
            Spain Collection has selected outstanding destinations, and
            hand-picked experiences to make your trip unforgettable.
          </p>
          {/* Choose Your Destination */}
          <section>
            <div className="mt-[3pc] xs:mt-[3.5pc]">
              <p className="text-[#BF1826] text-center text-[0.7pc] xs:text-[0.9pc] font-[400] font-['Inter'] tracking-widest uppercase">
                choose your destination
              </p>
            </div>
            {/* Swipper */}
            <Swiper
              spaceBetween={25}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper w-[75%] sm:w-[50%] md:w-[55%] mt-[2pc] xs:mt-[2.5pc] overflow-visible"
            >
              {chooseYourDestinationCardsData.map((item) => (
                <SwiperSlide key={item.text}>
                  <SwipeCards {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
          {/* Choose Your Experience */}
          <section className="mt-[4pc] pt-[3pc] xs:mt-[3.5pc] xs:pt-[3.5pc] bg-black">
            <div>
              <p className="text-[#BF1826] text-center text-[0.7pc] xs:text-[0.9pc] font-[400] font-['Inter'] tracking-widest uppercase">
                choose your experience
              </p>
            </div>
            {/* Swipper */}
            <Swiper
              spaceBetween={25}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper w-[75%] sm:w-[50%] md:w-[55%] mt-[2pc] xs:mt-[2.5pc] overflow-visible"
            >
              {chooseyourExperienceCardsData.map((item) => (
                <SwiperSlide key={item.text}>
                  <SwipeCards {...item} dark={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
          {/* This aside tag will juts act as a seprator bw footer and the upper div */}
          <aside className="pt-[20vh] xs:pt-[25vh] md:pt-[12pc] h-[1px] w-full bg-black"></aside>
          <Footer dark={true} />
        </>
      )}
    </>
  );
};

export default Collections;
