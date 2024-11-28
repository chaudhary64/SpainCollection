import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Journal from "../Journal/Journal";
import Collections from "../Collections/Collections";
import Curators from "../Curators/Curators";

const RoutesForNav = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/curators" element={<Curators />} />
    </Routes>
  );
};

export default RoutesForNav;
