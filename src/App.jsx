import { ReactLenis } from "lenis/react";
import Nav from "./Components/Nav/Nav";
import RoutesForNav from "./Components/Routes/RoutesForNav";

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
        <RoutesForNav />
      </main>
    </ReactLenis>
  );
};

export default App;
