import React from "react";
import { motion, useAnimation } from "framer-motion";

const Footer = () => {
  const controls = useAnimation();
  return (
    <footer className="mt-96 pb-20">
      <div
        style={{
          lineHeight: "0.95",
        }}
        className="w-[80%] mx-auto text-center uppercase text-[107px] flex items-center gap-5"
      >
        {/* Left Line */}
        <div className="h-[1px] w-20 bg-[#D24B4B]"></div>
        <div>
          {/* Upper Para */}
          <div className="overflow-clip">
            <motion.p
              initial={{
                transform: "translateY(100%)",
              }}
              whileInView={{
                transform: "translateY(0%)",
              }}
              transition={{
                duration: 0.4,
              }}
            >
              Contact{" "}
              <span className="text-[#D24B4B] font-['SaolDisplay-Italic']">
                With
              </span>
            </motion.p>
          </div>
          {/* Lower Para */}
          <div className="overflow-clip">
            <motion.p
              initial={{
                transform: "translateY(100%)",
              }}
              whileInView={{
                transform: "translateY(0%)",
              }}
              transition={{
                duration: 0.4,
              }}
            >
              Spain Collection
            </motion.p>
          </div>
        </div>
        {/* Right Line */}
        <div className="h-[1px] w-20 bg-[#D24B4B]"></div>
      </div>
      <div
        onMouseEnter={() =>
          controls.start({ width: "100%", transition: { duration: 0.8 } })
        }
        onMouseLeave={() =>
          controls.start({ width: "0%", transition: { duration: 0.8 } })
        }
        className="mt-16 py-1.5 w-fit mx-auto relative cursor-pointer"
      >
        <p className="text-center text-[#BF1826] text-3xl tracking-wider">
          travel@spaincollection.com
        </p>
        <motion.div
          animate={controls}
          className="absolute top-full h-[1.5px] bg-[#BF1826]"
        ></motion.div>
      </div>
      <div className="w-fit mt-3.5 mx-auto text-sm text-[#292929] underline tracking-wider flex items-center gap-3.5 font-['Inter']">
        <span>Instagram</span>
        <div className="h-0.5 w-0.5 rounded-full bg-black"></div>
        <span>Facebook</span>
        <div className="h-0.5 w-0.5 rounded-full bg-black"></div>
        <span>LinkedIn</span>
      </div>
      <p className="mt-10 text-center text-4xl tracking-wider text-zinc-900">
        Offices in Bilbao, Madrid and Seville
      </p>
      <p className="mt-10 text-center font-['Inter'] font-[300] uppercase text-base tracking-[0.15em] text-[#BF1826]">
        Headquarter office
      </p>
      <p className="mt-0.5 text-center text-xl tracking-wider">
        Txorrokopunta Ibilbidea 2, Bj F. 48360 Mundaka (Vizcaya) Phone: +34
        944.424.689
      </p>
      <div className="w-[80%] mt-8 mx-auto flex items-center gap-10">
        <div className="h-0.5 w-full bg-[#DEDEDE]"></div>
        <span className="whitespace-nowrap text-base font-['Inter'] font-[400] tracking-widest uppercase text-[#BF1826]">
          Proud member of
        </span>
        <div className="h-0.5 w-full bg-[#DEDEDE]"></div>
      </div>
      <div className="h-16 mt-5 mix-blend-difference flex justify-center gap-10">
        <img src="/images/Home/gobierno_vasco__white.webp" alt="" />
        <img src="/images/Home/luxury_spain_white.webp" alt="" />
        <img src="/images/Home/Captura-de-pantalla.webp" alt="" />
      </div>
      <div className="w-fit mt-16 mx-auto text-sm font-['Inter'] text-[#292929] underline tracking-wide flex items-center gap-3.5">
        <span>Privacy Policy</span>
        <div className="h-0.5 w-0.5 rounded-full bg-black"></div>
        <span>Legal Notice</span>
        <div className="h-0.5 w-0.5 rounded-full bg-black"></div>
        <span>Terms & Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
