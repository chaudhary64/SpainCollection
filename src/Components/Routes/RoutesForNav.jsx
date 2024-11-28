import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Journal from "../Journal/Journal";
import Collections from "../Collections/Collections";
import Curators from "../Curators/Curators";
import { AnimatePresence } from "framer-motion";

import Loader from "../Loader/Loader";

const RoutesForNav = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Loader>
              <Home />
            </Loader>
          }
        />
        <Route
          path="/journal"
          element={
            <Loader>
              <Journal />
            </Loader>
          }
        />
        <Route
          path="/collections"
          element={
            <Loader>
              <Collections />
            </Loader>
          }
        />
        <Route
          path="/curators"
          element={
            <Loader>
              <Curators />
            </Loader>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesForNav;
