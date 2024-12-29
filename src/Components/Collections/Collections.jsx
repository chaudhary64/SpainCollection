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
  const { state, yourDestinationData, yourExperienceData, screenWidth } =
    useContext(Info);
  const chooseYourDestinationCardsData = [
    {
      src: "/images/Collections/collections_tax-2.webp",
      text: "Barcelona",
    },
    {
      src: "/images/Collections/Portadas_madrid_17.webp",
      text: "Madrid",
    },
    {
      src: "/images/Collections/Portada_Andalucia_01.webp",
      text: "Andalucia",
    },
    {
      src: "/images/Collections/Portadas_portugal_14.webp",
      text: "Portugal",
    },
    {
      src: "/images/Collections/Portadas_north_18.webp",
      text: "Euskadi & Northen Spain",
    },
    {
      src: "/images/Collections/Portada_baleares_11.webp",
      text: "Balearic & Canary Islands",
    },
  ];
  const chooseyourExperienceCardsData = [
    {
      src: "/public/images/Collections/05-6.webp",
      text: "Food & Wine",
    },
    {
      src: "/public/images/Collections/culture.webp",
      text: "Culture",
    },
    {
      src: "/public/images/Collections/01-25.webp",
      text: "Traditions",
    },
    {
      src: "/public/images/Collections/traditions_10.webp",
      text: "Religious Heritage",
    },
    {
      src: "/public/images/Collections/01-91.webp",
      text: "Fashion & Shopping",
    },
    {
      src: "/public/images/Collections/01-70.webp",
      text: "Sports",
    },
    {
      src: "/public/images/Collections/02-68.webp",
      text: "Body & Soul",
    },
    {
      src: "/public/images/Collections/01-80.webp",
      text: "Nature & Adventure",
    },
  ];

  return (
    <>
      {screenWidth > 1024 ? (
        // Layout for screens larger than 1024px
        <div
          style={{
            marginTop: `-${state.height}px`,
          }}
          className="h-screen w-full py-[1px] relative -z-[10]"
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
            className="w-fit mx-auto mt-[16.5%] text-[40px] text-center font-[SaolDisplay-Light] text-white tracking-wide"
          >
            <p>Spain Collection has selected outstanding destinations, and</p>
            <p>hand-picked experiences to make your trip unforgettable.</p>
          </div>
          {/* Choose Your Experience */}
          <div>
            <div className="w-fit mx-auto mt-14">
              <span className="font-[Inter] font-[300] uppercase text-[#BF1826] tracking-widest">
                Choose your experience
              </span>
            </div>
            {/* Hover Cover */}
            <div className="w-[60%] mx-auto mt-4 flex flex-wrap justify-center items-center gap-[5px_30px] text-white">
              {yourExperienceData.map((item) => (
                <HoverCover key={item.id} {...item} />
              ))}
            </div>
          </div>
          {/* Choose Your Destination */}
          <div>
            <div className="w-fit mx-auto mt-10">
              <span className="font-[Inter] font-[300] uppercase text-[#BF1826] tracking-widest">
                Choose your destination
              </span>
            </div>
            {/* Hover Cover */}
            <div className="w-[70%] mx-auto mt-4 flex flex-wrap justify-center items-center gap-[5px_30px] text-white">
              {yourDestinationData.map((item) => (
                <HoverCover key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Layout for screens smaller than 1024px
        <div>
          <p
            style={{
              lineHeight: 1.35,
            }}
            className="mt-[3pc] w-[80%] xs:w-[65%] mx-auto text-[1.9pc] xs:text-[2.3pc] sm:text-[2.7pc] md:text-[3.5pc] text-center font-[SaolDisplay-Light]"
          >
            Spain Collection has selected outstanding destinations, and
            hand-picked experiences to make your trip unforgettable.
          </p>
          {/* Choose Your Destination */}
          <div>
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
              className="mySwiper w-[75%] sm:w-[50%] md:w-[55%] mt-[1.5pc] xs:mt-[1.75pc] overflow-visible"
            >
              {chooseYourDestinationCardsData.map((item) => (
                <SwiperSlide key={item.text}>
                  <SwipeCards {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Choose Your Experience */}
          <div className="bg-black">
            <div className="mt-[3pc] pt-[3pc] xs:mt-[3.5pc] xs:pt-[3.5pc]">
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
              className="mySwiper w-[75%] sm:w-[50%] md:w-[55%] mt-[1.5pc] xs:mt-[1.75pc] overflow-visible"
            >
              {chooseyourExperienceCardsData.map((item) => (
                <SwiperSlide key={item.text}>
                  <SwipeCards {...item} dark={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* This aside tag will juts act as a seprator bw footer and the upper div */}
          <aside className="pt-[15vh] xs:pt-[20vh] md:pt-[10pc] h-[1px] w-full bg-black"></aside>
          <Footer dark={true} />
        </div>
      )}
    </>
  );
};

export default Collections;
