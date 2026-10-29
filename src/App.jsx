import { ReactLenis } from "lenis/react";
import { useContext } from "react";
import Nav from "./Components/Nav/Nav";
import RoutesForNav from "./Components/Routes/RoutesForNav";
import AssetLoader from "./Components/Loader/AssetLoader";
import AppearingNavigation from "./Components/Nav/AppearingNavigation";
import Player from "./Components/Player/Player";
import Cursor from "./Components/Cursor/Cursor";
import { Info } from "./Components/Context/Context";

// Only the assets needed for the first screen are preloaded. Everything else is
// fetched normally after the page mounts; loading every page's media up front
// blocked first paint for far too long.
const CRITICAL_ASSETS = [
  // Font families referenced directly by the UI (the @font-face families from
  // index.css are loaded by AssetLoader separately).
  {
    type: "font",
    family: "SaolDisplay-Regular",
    src: "/Fonts/SaolDisplay-Regular.woff2",
  },
  {
    type: "font",
    family: "SaolDisplay-Light",
    src: "/Fonts/SaolDisplay-Light.woff2",
  },
  {
    type: "font",
    family: "SaolDisplay-Italic",
    src: "/Fonts/SaolDisplay-LightItalic.woff2",
  },
  // Hero video at the top of the home page.
  { type: "video", src: "/videoes/Home/Bg_Home.mp4" },
];

const App = () => {
  const { screenWidth } = useContext(Info);

  return (
    <ReactLenis
      root
      options={{
        // Making the scroll smoother
        wheelMultiplier: 0.3,
        touchMultiplier: 0.3,
        syncTouches: true,
        smoothWheel: true,
      }}
    >
      <AssetLoader assets={CRITICAL_ASSETS}>
        <main className="overflow-x-clip">
          {screenWidth > 1024 && <Cursor />}
          <Nav />
          <AppearingNavigation />
          <Player />
          <RoutesForNav />
        </main>
      </AssetLoader>
    </ReactLenis>
  );
};

export default App;
