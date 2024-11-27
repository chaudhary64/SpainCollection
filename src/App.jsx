import { ReactLenis } from "lenis/react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Journal from "./Components/Journal/Journal";
import Collections from "./Components/Collections/Collections";
import Curators from "./Components/Curators/Curators";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        // Making the scroll smoother
        wheelMultiplier: 0.15,
        touchMultiplier: 0.15,
      }}
    >
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/curators" element={<Curators />} />
        </Routes>
      </main>
    </ReactLenis>
  );
};

export default App;
