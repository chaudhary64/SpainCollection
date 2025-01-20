import { ReactLenis } from "lenis/react";
import Nav from "./Components/Nav/Nav";
import RoutesForNav from "./Components/Routes/RoutesForNav";
import AssetLoader from "./Components/Loader/AssetLoader";
import AppearingNavigation from "./Components/Nav/AppearingNavigation";
import Player from "./Components/Player/Player";
import Cursor from "./Components/Cursor/Cursor";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Info } from "./Components/Context/Context";

const App = () => {
  const { screenWidth } = useContext(Info);
  const assets = [
    { type: "font", family: "Inter", src: "/Fonts/Inter.ttf" },
    {
      type: "font",
      family: "Inter_Italic",
      src: "/Fonts/Inter_Italic.ttf",
    },
    {
      type: "font",
      family: "IbarraRealNova",
      src: "/Fonts/IbarraRealNova.ttf",
    },
    {
      type: "font",
      family: "IbarraRealNova_Italic",
      src: "/Fonts/IbarraRealNova_Italic.ttf",
    },
    {
      type: "font",
      family: "IbarraRealNova_Italic",
      src: "/Fonts/IbarraRealNova_Italic.ttf",
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
    {
      type: "font",
      family: "SaolDisplay-Regular",
      src: "/Fonts/SaolDisplay-Regular.woff2",
    },
    { type: "image", src: "/images/Home/009-scaled.webp" },
    { type: "image", src: "/images/Home/01-182.webp" },
    { type: "image", src: "/images/Home/01-213.webp" },
    { type: "image", src: "/images/Home/01-278.webp" },
    { type: "image", src: "/images/Home/01-303.webp" },
    { type: "image", src: "/images/Home/01-466.webp" },
    { type: "image", src: "/images/Home/01-91.webp" },
    { type: "image", src: "/images/Home/01-96.webp" },
    { type: "image", src: "/images/Home/Capa-1.webp" },
    { type: "image", src: "/images/Home/Capa-3.webp" },
    { type: "image", src: "/images/Home/Captura-de-pantalla.webp" },
    { type: "image", src: "/images/Home/caratula_eneko.webp" },
    { type: "image", src: "/images/Home/caratula_german.webp" },
    { type: "image", src: "/images/Home/caratula_pedro.webp" },
    {
      type: "image",
      src: "/images/Home/caratula_video_abene_new.webp",
    },
    {
      type: "image",
      src: "/images/Home/gobierno_vasco__white.webp",
    },
    { type: "image", src: "/images/Home/M_1.webp" },
    { type: "image", src: "/images/Home/M_2.webp" },
    { type: "image", src: "/images/Home/modulo_Why_11.webp" },
    { type: "image", src: "/images/Home/S_1.webp" },
    { type: "image", src: "/images/Home/S_2.webp" },
    { type: "video", src: "/videoes/Home/Bg_Home.mp4" },
    { type: "video", src: "/videoes/Home/Flamenca-2.mp4" },
    { type: "video", src: "/videoes/Home/Secuencia-01-1.mp4" },
    { type: "video", src: "/videoes/Home/Secuencia-01_2-1.mp4" },
    { type: "video", src: "/videoes/Home/Secuencia-01_6-1.mp4" },
    { type: "video", src: "/videoes/Home/Secuencia-01_7-1.mp4" },
    { type: "video", src: "/videoes/Home/Secuencia-01_8-1.mp4" },
    { type: "image", src: "/images/Collections/01-25.webp" },
    { type: "image", src: "/images/Collections/01-70.webp" },
    { type: "image", src: "/images/Collections/01-80.webp" },
    { type: "image", src: "/images/Collections/01-91.webp" },
    { type: "image", src: "/images/Collections/02-68.webp" },
    { type: "image", src: "/images/Collections/05-6.webp" },
    {
      type: "image",
      src: "/images/Collections/collections_tax-2.webp",
    },
    { type: "image", src: "/images/Collections/culture.webp" },
    { type: "image", src: "/images/Collections/home.webp" },
    {
      type: "image",
      src: "/images/Collections/Portada_Andalucia_01.webp",
    },
    {
      type: "image",
      src: "/images/Collections/Portada_baleares_11.webp",
    },
    {
      type: "image",
      src: "/images/Collections/Portadas_madrid_17.webp",
    },
    {
      type: "image",
      src: "/images/Collections/Portadas_north_18.webp",
    },
    {
      type: "image",
      src: "/images/Collections/Portadas_portugal_14.webp",
    },
    { type: "image", src: "/images/Collections/traditions_10.webp" },
    { type: "image", src: "/images/Journal/01-354.webp" },
    { type: "image", src: "/images/Journal/02-334.webp" },
    { type: "image", src: "/images/Journal/03-107.webp" },
    { type: "image", src: "/images/Journal/06-3.webp" },
    {
      type: "image",
      src: "/images/Journal/3002631115_1f93a3c3eb_o.webp",
    },
    {
      type: "image",
      src: "/images/Journal/4D108823-F88F-460F-8CF0-C7B7C0BDE061_1_105_c.webp",
    },
    {
      type: "image",
      src: "/images/Journal/borre-design-zZdxxAEhOYg-unsplash-1-scaled-e1611233089173.webp",
    },
    {
      type: "image",
      src: "/images/Journal/Captura-de-pantalla-2021-01-12-a-las-11.03.13.webp",
    },
    {
      type: "image",
      src: "/images/Journal/city-269449-scaled.webp",
    },
    {
      type: "image",
      src: "/images/Journal/Copy-of-coastal_camino_backpacks.webp",
    },
    { type: "image", src: "/images/Journal/goya_portada.webp" },
    { type: "image", src: "/images/Journal/home.webp" },
    {
      type: "image",
      src: "/images/Journal/LA-PENA-DESDE-MENGA.-JAVIER-PEREZ-GONZALEZ-scaled.webp",
    },
    {
      type: "image",
      src: "/images/Journal/Madrid_arranca_unas_fiestas_de_San_Isidro_para_compartir_entre_los_0_y_los_99_anos_02-2.webp",
    },
    {
      type: "image",
      src: "/images/Journal/Nr.2.San_.Isidro-scaled.webp",
    },
    {
      type: "image",
      src: "/images/Journal/Plaza_Mayor_de_La_Alberca_Salamanca-scaled.webp",
    },
    {
      type: "image",
      src: "/images/Journal/RESTAURANTE_AZURMENDI_LEZAMA_017.webp",
    },
    { type: "image", src: "/images/Journal/semana_santa_06.webp" },
    {
      type: "image",
      src: "/images/Journal/sta_maria_oia_camino_costa-scaled.webp",
    },

    { type: "image", src: "/images/Curators/01-381.webp" },
    { type: "image", src: "/images/Curators/02-99.webp" },
    { type: "image", src: "/images/Curators/caratula_german.webp" },
    { type: "image", src: "/images/Curators/caratula_ned_new.webp" },
    { type: "image", src: "/images/Curators/gurus_abene.webp" },
    { type: "image", src: "/images/Curators/gurus_sign.webp" },
    { type: "image", src: "/images/Curators/jc.webp" },
    { type: "image", src: "/images/Curators/Mission.webp" },
    { type: "image", src: "/images/Curators/sonia.webp" },
    { type: "image", src: "/images/Curators/values.webp" },
    { type: "image", src: "/images/Curators/vision.webp" },
  ];

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
      <AssetLoader assets={assets}>
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
