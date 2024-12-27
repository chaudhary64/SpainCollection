import React from "react";
import { motion, useAnimation } from "framer-motion";

const Footer = ({ dark = false }) => {
  const controls = useAnimation();
  return (
    <footer
      className={`pb-[2pc] sm:pb-[3pc] md:pb-[4pc] xl:pb-[5pc] 3xl:pb-[7pc] ${
        !dark && "bg-white"
      } w-[90%] md:w-[85%] mx-auto border-4 border-black`}
    >
      {/* Contact with */}
      <div
        style={{
          lineHeight: 1,
        }}
        className="w-full mx-auto text-center uppercase text-[2.45pc] xs:text-[3pc] sm:text-[3.5pc] md:text-[4.5pc] xl:text-[5.9pc] 3xl:text-[9.5pc] flex items-center"
      >
        {/* Left Line */}
        <div className="h-[1px] w-full bg-[#D24B4B]"></div>
        <div
          className={`${dark ? "text-white" : ""} xs:px-[0.1pc] sm:px-[0.8pc]`}
        >
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
              viewport={{ once: true }}
            >
              Contact{" "}
              <div>
                <span className="text-[#D24B4B] font-['SaolDisplay-Italic']">
                  With{" "}
                </span>
                <span>Spain</span>
              </div>
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
              viewport={{ once: true }}
            >
              Collection
            </motion.p>
          </div>
        </div>
        {/* Right Line */}
        <div className="h-[1px] w-full bg-[#D24B4B]"></div>
      </div>
      {/* Email */}
      <div
        onMouseEnter={() =>
          controls.start({
            scaleX: 1,
            transformOrigin: "left",
            transition: { duration: 0.8 },
          })
        }
        onMouseLeave={() =>
          controls.start({
            scaleX: 0,
            transformOrigin: "right",
            transition: { duration: 0.8 },
          })
        }
        className="mt-[1.5pc] py-1.5 w-fit mx-auto relative cursor-pointer"
      >
        <p className="text-center text-[#BF1826] text-[1pc] xs:text-[1.1pc] sm:text-[1.25pc] md:text-[1.7pc] xl:text-[2.1pc] 3xl:text-[3.2pc] tracking-wider">
          travel@spaincollection.com
        </p>
        <motion.div
          animate={controls}
          initial={{
            scaleX: 0,
          }}
          className="absolute top-full h-[1.5px] w-full bg-[#BF1826]"
        ></motion.div>
      </div>
      {/* Icons */}
      <div
        className={`w-fit mx-auto text-[0.7pc] xs:text-[0.8pc] sm:text-[0.9pc] md:text-[1.1pc] 3xl:text-[2pc] ${
          dark ? "text-white" : "text-[#292929]"
        } underline 3xl:underline-offset-4 tracking-wider flex items-center gap-2.5 xl:gap-3.5 font-['Inter']`}
      >
        <span>Instagram</span>
        <div className="h-0.5 w-0.5 rounded-full bg-black"></div>
        <span>Facebook</span>
        <div className="h-0.5 w-0.5 rounded-full bg-black"></div>
        <span>LinkedIn</span>
      </div>
      {/* Offices */}
      <p
        style={{
          lineHeight: 1,
        }}
        className={`mt-[1.5pc] text-center text-[1pc] xs:text-[1.1pc] sm:text-[1.25pc] md:text-[1.7pc] xl:text-[2.1pc] 3xl:text-[3.2pc] tracking-wider ${
          dark ? "text-white" : "text-zinc-900"
        }`}
      >
        Offices in Bilbao, Madrid and Seville
      </p>
      <p className="mt-[1.5pc] text-center font-['Inter'] font-[300] uppercase text-[0.7pc] xs:text-[0.8pc] sm:text-[0.9pc] md:text-[1.1pc] 3xl:text-[2pc] tracking-[0.15em] text-[#BF1826]">
        Headquarter office
      </p>
      <p
        style={{
          lineHeight: 1.2,
        }}
        className="text-center text-[1pc] xs:text-[1.1pc] sm:text-[1.25pc] md:text-[1.7pc] xl:text-[2.1pc] 3xl:text-[3.2pc] tracking-wider"
      >
        Txorrokopunta Ibilbidea 2, Bj F. 48360 Mundaka (Vizcaya) Phone: +34
        944.424.689
      </p>
      {/* Proud member of */}
      <div className="mt-[1.5pc] mx-auto flex items-center">
        <div
          className={`h-[1px] w-full ${dark ? "bg-[#696969]" : "bg-[#DEDEDE]"}`}
        ></div>
        <span className="whitespace-nowrap px-[0.8pc] text-[0.7pc] xs:text-[0.8pc] sm:text-[0.9pc] md:text-[1.1pc] 3xl:text-[2pc] font-['Inter'] font-[400] tracking-widest uppercase text-[#BF1826]">
          Proud member of
        </span>
        <div
          className={`h-[1px] w-full ${dark ? "bg-[#696969]" : "bg-[#DEDEDE]"}`}
        ></div>
      </div>
      {/* Logos */}
      <div className="mt-[1.5pc] mix-blend-difference flex flex-wrap justify-center gap-[1pc_0.8pc]">
        <img
          className="h-10 sm:h-12 md:h-16 xl:h-[5pc] 3xl:h-[9pc]"
          src="/images/Home/gobierno_vasco__white.webp"
          alt=""
        />
        <img
          className="h-10 sm:h-12 md:h-16 xl:h-[5pc] 3xl:h-[9pc]"
          src="/images/Home/luxury_spain_white.webp"
          alt=""
        />
        <img
          className="h-10 sm:h-12 md:h-16 xl:h-[5pc] 3xl:h-[9pc]"
          src="/images/Home/Captura-de-pantalla.webp"
          alt=""
        />
      </div>
      <div
        className={`w-fit mt-[1.5pc] mx-auto text-[0.65pc] xs:text-[0.75pc] md:text-[0.9pc] xl:text-[1pc] 3xl:text-[1.5pc] font-['Inter'] ${
          dark ? "text-white" : "text-[#292929]"
        } underline underline-offset-[1.5px] 3xl:underline-offset-4 tracking-wide flex items-center gap-[0.3pc] xs:gap-[0.6pc] sm:gap-[0.7pc]`}
      >
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
