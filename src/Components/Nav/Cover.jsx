import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Cover = () => {
  return (
    <motion.div
      initial={{
        top: "-100%",
      }}
      animate={{
        top: ["-100%", "0%"],
        transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
      }}
      exit={{
        top: "100%",
        transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
      }}
      className="fixed h-screen w-full pt-[12%] z-[998] bg-white"
    >
      <div className="flex flex-col items-center">
        {/* Navigation Links */}
        <div
          style={{
            lineHeight: 1,
          }}
          className="flex flex-col gap-6 items-center text-[55px] font-[SaolDisplay-Light]"
        >
          <NavLink
            to="/"
            style={(e) => {
              return {
                color: e.isActive ? "#C42A37" : "black",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/collections"
            style={(e) => {
              return {
                color: e.isActive ? "#C42A37" : "black",
              };
            }}
          >
            Collections
          </NavLink>
          <NavLink
            to="/curators"
            style={(e) => {
              return {
                color: e.isActive ? "#C42A37" : "black",
              };
            }}
          >
            Curators
          </NavLink>
          <NavLink
            to="/journal"
            style={(e) => {
              return {
                color: e.isActive ? "#C42A37" : "black",
              };
            }}
          >
            Journal
          </NavLink>
        </div>
        {/* Social Media Handles */}
        <div className="w-full absolute bottom-20 flex justify-center text-sm font-thin font-[Inter]">
          <div className="flex gap-5 underline decoration-1 underline-offset-2">
            <div>Instagram</div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-black"></div> Facebook
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-black"></div> Youtube
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-black"></div> Linkedin
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cover;
