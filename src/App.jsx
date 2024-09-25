import React from "react";
import { ReactLenis } from "lenis/react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        // Making the scroll smoother
        wheelMultiplier: 0.4,
        touchMultiplier: 0.4,
      }}
    >
      <main className="pt-[1px]">
        <Nav />
        <Home />
      </main>
    </ReactLenis>
  );
};

export default App;
