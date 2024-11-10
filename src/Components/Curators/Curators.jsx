import React from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import FixedImages from "../Home/FixedImages";
import OverlapingCards from "./OverlapingCards";

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
  const overlappingCardsData = [
    {
      id: 1,
      name: "Juan Carlos Tejeda",
      text: "Collection Curator - Spain and Portugal",
      mainImg: "/images/Curators/jc.webp",
      maskImg: "/images/Curators/02-99.webp",
      left: true,
    },
    {
      id: 2,
      name: "Sonia Pájaro",
      text: "Collection Curator - Spain and Portugal",
      mainImg: "/images/Curators/sonia.webp",
      maskImg: "/images/Curators/01-381.webp",
      left: false,
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

  // For Image inside Our Outstanding Team
  const imageRef = useRef(null);
  const { scrollYProgress: ImgYScroll } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const ImgY = useTransform(ImgYScroll, [0, 1], [0, 50]);
  useMotionValueEvent(ImgYScroll, "change", (l) => console.log(l));
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
        // The pb-14 class is applied to ensure that the extra space created by the downward shift of ImgY is effectively covered.
        className="mt-32 pb-14 flex flex-col justify-center items-center text-[107px] text-white uppercase"
      >
        <div className="overflow-clip">
          <motion.p
            initial={{
              transform: "translateY(100%)",
            }}
            whileInView={{
              transform: "translateY(0%)",
            }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
          >
            Our
          </motion.p>
        </div>
        <div className="overflow-clip">
          <motion.p
            initial={{
              transform: "translateY(100%)",
            }}
            whileInView={{
              transform: "translateY(0%)",
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="text-[#BF1826] font-[SaolDisplay-Italic]"
          >
            Outstanding
          </motion.p>
        </div>
        <div className="overflow-clip">
          <motion.p
            initial={{
              transform: "translateY(100%)",
            }}
            whileInView={{
              transform: "translateY(0%)",
            }}
            transition={{
              duration: 0.75,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
          >
            Team
          </motion.p>
        </div>
        <div className="mt-10 h-40 w-[1px] bg-[#7A121A] relative z-10"></div>
        <motion.img
          ref={imageRef}
          style={{
            y: ImgY,
          }}
          src="/images/Curators/gurus_abene.webp"
          // The -mt-20 is applied so that the center of the line is aligned with the center of the image
          className="w-96 -mt-20"
          alt=""
        />
      </div>
      {/* Info */}
      {/* The -mt-60 margin is applied to ensure that, as the image scrolls downward, it partially overlaps the red background div. This approach creates a layered effect, adding depth and visual cohesion to the design */}
      <div className="-mt-60 pt-72 pb-16 bg-[#BF1826] text-white text-4xl text-center font-[300] tracking-wider">
        <div>
          <p>One of the things I learned about being leader is that some</p>
          <p>people are only motivated by money, or they are only</p>
          <p>motivated by power or some kind of incentive. But people</p>
          <p>also get inspired by stories. Here I share just a few thoughts</p>
          <p>from my team about Spain & Portugal Collection…</p>
        </div>
        <p className="mt-10">
          We really appreciate your considering us as partners!
        </p>
        <div className="mt-16 flex flex-col font-[Inter]">
          <span className="text-xl font-[400]">Abene Mendizabal</span>
          <span className="text-sm tracking-wider">
            Founder and CEO Spain Collection
          </span>
        </div>
        <img
          src="/images/Curators/gurus_sign.webp"
          className="mx-auto mt-16 w-72"
          alt=""
        />
      </div>
      {/* Team */}
      <div className="bg-white p-28">
        <p className="text-center font-[Inter] uppercase tracking-widest text-[#C42C39]">
          Team
        </p>
        <div className="w-[90%] mx-auto mt-20 flex gap-40">
          {overlappingCardsData.map((data) => (
            <OverlapingCards key={data.id} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curators;
