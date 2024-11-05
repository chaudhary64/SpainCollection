import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FixedImages from "../Home/FixedImages";

const Curators = () => {
  const fixedImages = [
    {
      id: 1,
      src: "/images/Curators/Mission.webp",
      number: "Mission",
      text: "Deliver outstanding travel experiences in Spain and Portugal that are authentic, supportive of local businesses and a source of inspiration to our own staff.",
    },
    {
      id: 2,
      src: "/images/Curators/vision.webp",
      number: "Vision",
      text: "To become the global ambassador for Spain and Portugal for discerning travelers who journey to connect and engage with cultures, traditions, and destinations in a sustainable, inclusive and mindful way with a touch of luxury.",
    },
    {
      id: 3,
      src: "/images/Curators/values.webp",
      number: "Values",
      text: "As a company we believe in a life-affirming, sense of purpose. We look for engagement, innovation, diversity and inclusion. We are mindful of others and sensitive to the environment. Communication is real, open and transparent, and our working relationships are mutually beneficial and respectful It is not what we do but the way we do it",
    },
  ];
  // For Image Holder
  const imageHolder = useRef(null);

  const { scrollYProgress: imageHolderScrolled } = useScroll({
    target: imageHolder,
    offset: ["start end", "end start"],
  });

  const LeftAndRightImgY = useTransform(imageHolderScrolled, [0, 1], [0, -75]);
  const MidImgY = useTransform(imageHolderScrolled, [0, 1], [130, 250]);
  return (
    <div className="bg-black">
      <div
        style={{
          lineHeight: "0.95",
        }}
        className='mt-14 text-center uppercase text-white text-[107px] font-["SaolDisplay-Regular"] font-[300]'
      >
        <p>We work</p>
        <p>tirelessly to</p>
        <p>make your trip an</p>
        <p className='text-[#BF1826] font-["SaolDisplay-Italic"]'>
          unforgettable
        </p>
        <p>experience</p>
      </div>
      {/* ImagesHolder */}
      {/* // The pb-60 class is applied to ensure that the extra space created by the downward shift of MidImgY is effectively covered.
       */}
      <div
        ref={imageHolder}
        className="mt-20 pt-32 pb-60 flex justify-evenly relative"
      >
        {/* Vertical Line */}
        <div className="h-36 w-[1px] bg-white absolute top-0 left-1/2 -translate-x-1/2"></div>
        <motion.div
          style={{
            y: LeftAndRightImgY,
          }}
        >
          <FixedImages
            key={fixedImages[0].id}
            {...fixedImages[0]}
            imageHolderScrolled={imageHolderScrolled}
            height={450}
            width={360}
            theme="white"
            numberIsHeading={true}
          />
        </motion.div>
        <motion.div
          style={{
            y: MidImgY,
          }}
        >
          <FixedImages
            key={fixedImages[1].id}
            {...fixedImages[1]}
            imageHolderScrolled={imageHolderScrolled}
            height={610}
            width={300}
            theme="white"
            numberIsHeading={true}
          />
        </motion.div>
        <motion.div
          style={{
            y: LeftAndRightImgY,
          }}
        >
          <FixedImages
            key={fixedImages[2].id}
            {...fixedImages[2]}
            imageHolderScrolled={imageHolderScrolled}
            height={367}
            width={365}
            theme="white"
            numberIsHeading={true}
          />
        </motion.div>
      </div>
      {/* Our outstanding team */}
      <div
        style={{
          lineHeight: "1",
        }}
        className="mt-32 pb-48 flex flex-col justify-center items-center text-[107px] text-white uppercase relative bordeer-4 border-red-500"
      >
        <span>Our</span>
        <span className="text-[#BF1826] font-[SaolDisplay-Italic]">
          Outstanding
        </span>
        <span>Team</span>
        <div className="mt-10 h-40 w-[1px] bg-[#7A121A] relative z-10"></div>
        <img
          src="/images/Curators/gurus_abene.webp"
          className="w-96 absolute top-full -translate-y-1/2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Curators;
