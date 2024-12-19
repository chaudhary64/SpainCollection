import React from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = (props) => {
  // For Home Page
  const AmbassadorsData = [
    {
      id: 1,
      src: "/images/Home/caratula_eneko.webp",
      name: "Eneko Atxa",
      text: "3 Michelin Stars Chef",
    },
    {
      id: 2,
      src: "/images/Home/caratula_pedro.webp",
      name: "Pedro Subijana",
      text: "3 Michelin Stars Chef",
    },
    {
      id: 3,
      src: "/images/Home/caratula_german.webp",
      name: "Germán Jiménez",
      text: "Journalist specialized in Fashion & Lifestyle",
    },
  ];
  const fixedImages = [
    {
      id: 1,
      src: "/images/Home/modulo_Why_11.webp",
      number: "01/",
      text: "Because our passion is people, travel and our country, it’s what makes us get out of bed in the morning.",
    },
    {
      id: 2,
      src: "/images/Home/Capa-1.webp",
      number: "02/",
      text: "Because nothing is more fulfilling than creating something from scratch and seeing it come to life.",
    },
    {
      id: 3,
      src: "/images/Home/Capa-3.webp",
      number: "03/",
      text: "Because of that blissful moment, after months of planning, when your clients thank you for giving them have the time of their lives.",
    },
  ];
  const marqueesData = [
    [
      {
        id: 1,
        text: "Madrid",
      },
      {
        id: 2,
        text: "Barcelona",
      },
      {
        id: 3,
        text: "Lisbon",
      },
      {
        id: 4,
        text: "Porto",
      },
      {
        id: 5,
        text: "Valencia",
      },
      {
        id: 6,
        text: "Algarve",
      },
    ],
    [
      {
        id: 7,
        text: "Culture",
      },
      {
        id: 8,
        text: "Food&Wine",
      },
      {
        id: 9,
        text: "Shopping",
      },
      {
        id: 10,
        text: "Fashion",
      },
      {
        id: 11,
        text: "Sports",
      },
      {
        id: 12,
        text: "Traditions",
      },
    ],
  ];
  const cardsData = [
    {
      id: 1,
      strongHeading: "Food & Wine",
      weakHeading: "IN Barcelona",
      title: "Michelin Stars Galore",
      text: "Catalonia has some of the best restaurants in the world. Here is where the whole concept of cuisine was transformed, where the first laboratory of modern cuisine was created.",
      src: "/images/Home/01-278.webp",
    },
    {
      id: 2,
      strongHeading: "Fashion & Shopping",
      weakHeading: "IN Andalusia",
      title: "Flamenco Fashion",
      text: "The world of Flamenco is so rich that it not only encompasses dancing, music and art, but it also has a huge influence on Spanish fashion. Experience for yourself how a flamenco dress is not simply something you 'wear', it is about posture, the way you move and the way you feel.",
      src: "/images/Home/01-91.webp",
    },
    {
      id: 3,
      strongHeading: "Culture",
      weakHeading: "IN Barcelona",
      title: "Gaudi: Walking in The Footsteps of a Genius",
      text: "Gaudi, the genius of Modernist architecture, was a revolutionary Catalan artist who incorporated nature's geometry into wondrous shapes and buildings known and admired today across the world.",
      src: "/images/Home/01-303.webp",
    },
    {
      id: 4,
      strongHeading: "Sports",
      weakHeading: "IN Portugal",
      title: "Snorkeling with Seahorses",
      text: "The waterways and lagoons of the Ria Formosa Natural Park are a delight in themselves but let's also discover the underwater world of the Algarve, and the area's fascinating seahorse population.",
      src: "/images/Home/01-466.webp",
    },
    {
      id: 5,
      strongHeading: "Culture",
      weakHeading: "IN Madrid",
      title: "Cervantes, A Timeless Literary Journey",
      text: "Cervantes and his Don Quixote are arguably as universal as characters can get. No other fictional character has been so notorious and influential as the man from La Mancha.",
      src: "/images/Home/01-182.webp",
    },
    {
      id: 6,
      strongHeading: "Traditions",
      weakHeading: "IN Madrid",
      title: "Ceramics Of Talavera",
      text: "Talavera is home to communities of artisans who make ceramics for decorative and architectural use. The most significant aspect of their work, however, is that most of their manufacturing, decoration and glazing processes have remained unchanged since the 16th century.",
      src: "/images/Home/009-scaled.webp",
    },
    {
      id: 7,
      strongHeading: "Sports",
      weakHeading: "IN Madrid",
      title: "A Real Madrid Experience",
      text: "Football is an obsession for the Spanish and seeing Real Madrid in action tops the must-see list for any sports aficionado visiting the capital of Spain.",
      src: "/images/Home/01-213.webp",
    },
    {
      id: 8,
      strongHeading: "Fashion & Shopping",
      weakHeading: "IN Andalusia",
      title: "Flamenco Catwalk",
      text: "The catwalk is where fashion comes alive. Be a model for a day and lose yourself in the backstage world of nerves and frenetic preparations before stepping out into the spotlights and onto the catwalk.",
      src: "/images/Home/01-96.webp",
    },
  ];

  // For Collection Page
  const yourExperienceData = [
    {
      id: 1,
      src: "/images/Collections/05-6.webp",
      text: "Food & Wine",
    },
    {
      id: 2,
      src: "/images/Collections/culture.webp",
      text: "Culture",
    },
    {
      id: 3,
      src: "/images/Collections/01-25.webp",
      text: "Traditions",
    },
    {
      id: 4,
      src: "/images/Collections/traditions_10.webp",
      text: "Religious Heritage",
    },
    {
      id: 5,
      src: "/images/Collections/01-91.webp",
      text: "Fashion & Shopping",
    },
    {
      id: 6,
      src: "/images/Collections/01-70.webp",
      text: "Sports",
    },
    {
      id: 7,
      src: "/images/Collections/02-68.webp",
      text: "Body & Soul",
    },
    {
      id: 8,
      src: "/images/Collections/01-80.webp",
      text: "Nature",
    },
  ];
  const yourDestinationData = [
    {
      id: 1,
      src: "/images/Collections/collections_tax-2.webp",
      text: "Barcelona",
    },
    {
      id: 2,
      src: "/images/Collections/Portadas_madrid_17.webp",
      text: "Madrid",
    },
    {
      id: 3,
      src: "/images/Collections/Portada_Andalucia_01.webp",
      text: "Andalusia",
    },
    {
      id: 4,
      src: "/images/Collections/Portadas_portugal_14.webp",
      text: "Portugal",
    },
    {
      id: 5,
      src: "/images/Collections/Portadas_north_18.webp",
      text: "Euskadi & Northern Spain",
    },
    {
      id: 6,
      src: "/images/Collections/Portada_baleares_11.webp",
      text: "Balearic & Canary Islands",
    },
  ];

  // For Journal Page
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

  // For Curators Page
  const fixedImagesDataCurators = [
    {
      id: 1,
      src: "/images/Curators/Mission.webp",
      number: "Mission",
      text: "Deliver outstanding travel experiences in Spain and Portugal that are authentic, supportive of local businesses and a source of inspiration to our own staff.",
    },
    {
      id: 2,
      src: "/images/Curators/vision.webp",
      number: "Vision",
      text: "To become the global ambassador for Spain and Portugal for discerning travelers who journey to connect and engage with cultures, traditions, and destinations in a sustainable, inclusive and mindful way with a touch of luxury.",
    },
    {
      id: 3,
      src: "/images/Curators/values.webp",
      number: "Values",
      text: "As a company we believe in a life-affirming, sense of purpose. We look for engagement, innovation, diversity and inclusion. We are mindful of others and sensitive to the environment. Communication is real, open and transparent, and our working relationships are mutually beneficial and respectful It is not what we do but the way we do it",
    },
  ];
  const overlappingCardsData = [
    {
      id: 1,
      name: "Juan Carlos Tejeda",
      text: "Collection Curator - Spain and Portugal",
      mainImg: "/images/Curators/jc.webp",
      maskImg: "/images/Curators/02-99.webp",
      left: true,
    },
    {
      id: 2,
      name: "Sonia Pájaro",
      text: "Collection Curator - Spain and Portugal",
      mainImg: "/images/Curators/sonia.webp",
      maskImg: "/images/Curators/01-381.webp",
      left: false,
    },
  ];
  const cardsDataCurators = [
    {
      id: 1,
      name: "Eneko Atxa",
      text: "3 Michelin Stars",
      src: "/images/Home/caratula_eneko.webp",
    },
    {
      id: 2,
      name: "Pedro Subijana",
      text: "3 Michelin Stars",
      src: "/images/Home/caratula_pedro.webp",
    },
    {
      id: 3,
      name: "Ned Capeleris",
      text: "General Manager at Hotel Maria Cristina",
      src: "/images/Curators/caratula_ned_new.webp",
    },
    {
      id: 4,
      name: "Germán Jiménez",
      text: "Journalist specialized in Fashion & Lifestyle",
      src: "/images/Curators/caratula_german.webp",
    },
  ];

  // Nav Bar Info
  const [isVisible, setIsVisible] = useState(false);
  const [isAppearing, setIsAppearing] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [state, setState] = useState({
    height: 0,
  });

  // Screen Width for responsive animations
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <>
      <Info.Provider
        value={{
          state,
          setState,
          AmbassadorsData,
          fixedImages,
          marqueesData,
          cardsData,
          yourExperienceData,
          yourDestinationData,
          leftStripData,
          middleStripData,
          rightStripData,
          fixedImagesDataCurators,
          overlappingCardsData,
          cardsDataCurators,
          isVisible,
          setIsVisible,
          isAppearing,
          setIsAppearing,
          clicked,
          setClicked,
          screenWidth,
          setScreenWidth,
        }}
      >
        {props.children}
      </Info.Provider>
    </>
  );
};

// Export the context
export const Info = createContext();
export default Context;
