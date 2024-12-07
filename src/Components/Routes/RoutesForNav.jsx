import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Journal from "../Journal/Journal";
import Collections from "../Collections/Collections";
import Curators from "../Curators/Curators";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../Loader/pageTransition";

const RoutesForNav = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/journal"
          element={
            <PageTransition>
              <Journal />
            </PageTransition>
          }
        />
        <Route
          path="/collections"
          element={
            <PageTransition>
              <Collections />
            </PageTransition>
          }
        />
        <Route
          path="/curators"
          element={
            <PageTransition>
              <Curators />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesForNav;
