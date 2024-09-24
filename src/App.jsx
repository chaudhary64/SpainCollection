import React from "react";
import { ReactLenis } from "lenis/react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

const App = () => {
  return (
    <ReactLenis root>
      <main className="pt-[1px]">
        <Nav />
        <Home />
      </main>
    </ReactLenis>
  );
};

export default App;
