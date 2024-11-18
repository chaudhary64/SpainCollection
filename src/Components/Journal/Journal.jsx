import React, { useRef } from "react";
import DescriptionCard from "./DescriptionCard";
import DateCard from "./DateCard";
import Footer from "../Footer/Footer";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const Journal = () => {
  const leftStripData = [
    {
      id: 1,
      img: "/images/Journal/RESTAURANTE_AZURMENDI_LEZAMA_017.webp",
      date: "APRIL 6, 2021",
      time: "2' min read",
      Heading: "Sustainable Michelin Star Restaurants in Spain",
      text: "Spain is undoubtedly one of the most foodie countries in the world, a gastronomic reference because of its tradition, the high quality of the products and the famous Mediterranean diet which is one of the healthiest.",
    },
    {
      id: 2,
      img: "/images/Journal/sta_maria_oia_camino_costa-scaled.webp",
      date: "JANUARY 14, 2021",
      time: "4' min read",
      Heading: "El Camino de Santiago, a walk of life, through the camera lens",
      text: "El Camino de Santiago, or The Way of Saint James using its name in English, is without a doubt one of those experiences one must do at least once in your lifetime. There is though, a recurring question that pops up all the time, and that is, why do it.",
    },
    {
      id: 3,
      img: "/images/Journal/semana_santa_06.webp",
      date: "OCTOBER 8, 2020",
      time: "4' min read",
      Heading: "Easter in Spain or where passion meets art and tradition",
      text: "La Semana Santa, Easter week, is undoubtedly the most special and spectacular religious event of the year for the Spanish.",
    },
    {
      id: 4,
      img: "/images/Journal/Madrid_arranca_unas_fiestas_de_San_Isidro_para_compartir_entre_los_0_y_los_99_anos_02-2.webp",
      date: "OCTOBER 30, 2020",
      time: "4' min read",
      Heading: "San Isidro Chronicles: The Gastronomy of Madridn",
      text: "Food is at the heart of Spanish culture, from social life to business deals, everything revolves around food, and even more so in a city like Madrid.",
    },
    {
      id: 5,
      img: "/images/Journal/LA-PENA-DESDE-MENGA.-JAVIER-PEREZ-GONZALEZ-scaled.webp",
      date: "OCTOBER 30, 2020",
      time: "6' min read",
      Heading: "Hidden Gems of Andalucía: Antequera, it's a kind of magic",
      text: "Antequera is a beautiful town in the Malaga area, far from the hustle and bustle of the beaches of the Costa del Sol. It's a place where history, culture and gastronomy are the protagonists.",
    },
    {
      id: 6,
      img: "/images/Journal/3002631115_1f93a3c3eb_o.webp",
      date: "JANUARY 21, 2021",
      time: "3' min read",
      Heading:
        "Tordesillas: the Treaty to divide the world between two empires",
      text: "Close to Salamanca, cradle of the first university of Spain (and  the third western university, after Bologna and Paris) and whose old city is a UNESCO World Heritage Site. Tordesillas is also next to important wine regions such as D.O. Ribera del Duero, D.O. Rueda and D.O. Toro. Even if the name does not sound familiar to you, the area possesses a bunch of musts and definitely deserves a place in our Collection.",
    },
  ];
  const middleStripData = [
    {
      id: 1,
      img: "/images/Journal/4D108823-F88F-460F-8CF0-C7B7C0BDE061_1_105_c.webp",
      text: "Sant Jordi's Festivity",
    },
    {
      id: 2,
      img: "/images/Journal/Plaza_Mayor_de_La_Alberca_Salamanca-scaled.webp",
      text: "Salamanca off the beaten path",
    },
    {
      id: 3,
      img: "/images/Journal/home.webp",
      text: "Spain Collection: Live your unique adventure",
    },
    {
      id: 4,
      img: "/images/Journal/Captura-de-pantalla-2021-01-12-a-las-11.03.13.webp",
      text: "Explore Toledo from Paco De Lucia's House",
    },
    {
      id: 5,
      img: "/images/Journal/06-3.webp",
      text: "Casa Vicens, Barcelona: the first House build by Gaudí",
    },
    {
      id: 6,
      img: "/images/Journal/02-334.webp",
      text: "Spain for sure: A country you can trust. A country you can believe in.",
    },
    {
      id: 7,
      img: "/images/Journal/city-269449-scaled.webp",
      text: "Andalusia: being alive is not just about breathing",
    },
    {
      id: 8,
      img: "/images/Journal/01-354.webp",
      text: "Rafa Nadal's advertising campaign for Mallorca",
    },
  ];
  const rightStripData = [
    {
      id: 1,
      img: "/images/Journal/Nr.2.San_.Isidro-scaled.webp",
      date: "NOVEMBER 10, 2020",
      time: "2' min read",
      Heading:
        "San Isidro Cronicles: Following the steps of Madrid's patron saint",
      text: "Madrid is a city that can be discovered in many different ways: visiting the numerous museums, walking through the old center of Madrid of the Austrians, enjoying the Spanish tapas in taverns and inns… This time you will discover Madrid following the life and miracles of its patron saint, San Isidro Labrador.",
    },
    {
      id: 2,
      img: "/images/Journal/03-107.webp",
      date: "OCTOBER 30, 2020",
      time: "4' min read",
      Heading: "Ecotourism in Spain: Northern Catalonia",
      text: "An outstanding combination of nature, history and gastronomy",
    },
    {
      id: 3,
      img: "/images/Journal/Copy-of-coastal_camino_backpacks.webp",
      date: "OCTOBER 30, 2020",
      time: "6' min read",
      Heading: "El Camino de Santiago, making sense of life",
      text: "Our lives are based, a lot of the time, on endless questions, or to put it another way, on finding answers to our many questions about life",
    },
    {
      id: 4,
      img: "/images/Journal/goya_portada.webp",
      date: "OCTOBER 30, 2020",
      time: "4' min read",
      Heading: "San Isidro Chronicles: The Gastronomy of Madridn",
      text: "If Madrid is a city full of art, culture and entertainment, the Fiestas of San Isidro, patron saint of the city, transform the capital of Spain into a festival of traditions, music, food and lots of fun.",
    },
    {
      id: 5,
      img: "/images/Journal/borre-design-zZdxxAEhOYg-unsplash-1-scaled-e1611233089173.webp",
      date: "OCTOBER 30, 2020",
      time: "6' min read",
      Heading: "The Spanish expedition against the smallpox pandemic",
      text: "Galicia is a beautiful, enigmatic region, open to the sea: a wild, unpredictable sea that has plotted the course of its destiny. This corner of Spain has an important Celtic heritage mingled with the hallmark left by the Camino de Santiago.",
    },
  ];

  // Scroll Animation for the strips
  const leftStrip = useRef(null);
  const middleStrip = useRef(null);
  const rightStrip = useRef(null);
  const { scrollYProgress: scrollYProgressLeft } = useScroll({
    target: leftStrip,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgressMiddle } = useScroll({
    target: middleStrip,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgressRight } = useScroll({
    target: rightStrip,
    offset: ["start end", "end start"],
  });

  const leftStripY = useTransform(scrollYProgressLeft, [0, 1], [0, -100]);
  const middleStripY = useTransform(scrollYProgressMiddle, [0, 1], [0, 200]);
  const rightStripY = useTransform(scrollYProgressRight, [0, 1], [0, -100]);
  return (
    <div>
      {/* Text */}
      <div className="mt-36 text-center text-[40px] font-[SaolDisplay-Light] leading-none">
        <p>Spain Collection has selected the best places and traditions</p>
        <p>to turn your luxury trip into an unforgettable memory</p>
      </div>
      {/* Grid Layout */}
      {/* A padding of 200px has been applied to ensure that as the strips move downward, any whitespace is fully covered, maintaining a seamless visual flow */}
      <div className="w-[92%] mx-auto mt-24 mb-40 pb-[200px] grid grid-cols-[35%_25%_35%] justify-between">
        {/* Left Strip */}
        <motion.div
          ref={leftStrip}
          style={{
            y: leftStripY,
          }}
          className="h-full flex flex-col gap-8"
        >
          {leftStripData.map((item) => (
            <DateCard key={item.id} {...item} />
          ))}
        </motion.div>
        {/* Middle Strip */}
        <motion.div
          ref={middleStrip}
          style={{
            y: middleStripY,
          }}
          className="h-full flex flex-col gap-8"
        >
          {middleStripData.map((item) => (
            <DescriptionCard key={item.id} {...item} />
          ))}
        </motion.div>
        {/* Right Strip */}
        <motion.div
          ref={rightStrip}
          style={{
            y: rightStripY,
          }}
          className="h-full flex flex-col gap-8"
        >
          {rightStripData.map((item) => (
            <DateCard key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Journal;
