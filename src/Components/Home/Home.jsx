import { useState, useRef } from "react";
import { IoPlay } from "react-icons/io5";
import Expander from "./Expander";
import Ambassadords from "./Ambassadors";
import FixedImages from "./FixedImages";
import Marquee from "./Marquee";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Cards from "./Cards";

const Home = () => {
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
  const marquees = [
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
      src: "/public/images/Home/01-278.webp",
    },
    {
      id: 2,
      strongHeading: "Fashion & Shopping",
      weakHeading: "IN Andalusia",
      title: "Flamenco Fashion",
      text: "The world of Flamenco is so rich that it not only encompasses dancing, music and art, but it also has a huge influence on Spanish fashion. Experience for yourself how a flamenco dress is not simply something you 'wear', it is about posture, the way you move and the way you feel.",
      src: "/public/images/Home/01-91.webp",
    },
    {
      id: 3,
      strongHeading: "Culture",
      weakHeading: "IN Barcelona",
      title: "Gaudi: Walking in The Footsteps of a Genius",
      text: "Gaudi, the genius of Modernist architecture, was a revolutionary Catalan artist who incorporated nature's geometry into wondrous shapes and buildings known and admired today across the world.",
      src: "/public/images/Home/01-303.webp",
    },
    {
      id: 4,
      strongHeading: "Sports",
      weakHeading: "IN Portugal",
      title: "Snorkeling with Seahorses",
      text: "The waterways and lagoons of the Ria Formosa Natural Park are a delight in themselves but let's also discover the underwater world of the Algarve, and the area's fascinating seahorse population.",
      src: "/public/images/Home/01-466.webp",
    },
    {
      id: 5,
      strongHeading: "Culture",
      weakHeading: "IN Madrid",
      title: "Cervantes, A Timeless Literary Journey",
      text: "Cervantes and his Don Quixote are arguably as universal as characters can get. No other fictional character has been so notorious and influential as the man from La Mancha.",
      src: "/public/images/Home/01-182.webp",
    },
    {
      id: 6,
      strongHeading: "Traditions",
      weakHeading: "IN Madrid",
      title: "Ceramics Of Talavera",
      text: "Talavera is home to communities of artisans who make ceramics for decorative and architectural use. The most significant aspect of their work, however, is that most of their manufacturing, decoration and glazing processes have remained unchanged since the 16th century.",
      src: "/public/images/Home/009-scaled.webp",
    },
    {
      id: 7,
      strongHeading: "Sports",
      weakHeading: "IN Madrid",
      title: "A Real Madrid Experience",
      text: "Football is an obsession for the Spanish and seeing Real Madrid in action tops the must-see list for any sports aficionado visiting the capital of Spain.",
      src: "/public/images/Home/01-213.webp",
    },
    {
      id: 8,
      strongHeading: "Fashion & Shopping",
      weakHeading: "IN Andalusia",
      title: "Flamenco Catwalk",
      text: "The catwalk is where fashion comes alive. Be a model for a day and lose yourself in the backstage world of nerves and frenetic preparations before stepping out into the spotlights and onto the catwalk.",
      src: "/public/images/Home/01-96.webp",
    },
  ];
  const AmbassadorsRef = useRef(null);
  const ExpanderRef = useRef(null);
  const [theme, setTheme] = useState("white");
  const { scrollYProgress: scrollYProgressAmbassador } = useScroll({
    target: AmbassadorsRef,
    offset: ["start 10%", "end start"],
  });
  const { scrollYProgress: scrollYProgressExpander } = useScroll({
    target: ExpanderRef,
    offset: ["start", "end"],
  });
  useMotionValueEvent(scrollYProgressAmbassador, "change", (l) =>
    l >= 0.1 ? setTheme("white") : setTheme("black")
  );
  useMotionValueEvent(scrollYProgressExpander, "change", (l) =>
    l >= 0.9 ? setTheme("black") : setTheme("white")
  );
  // For Image Holder
  const imageHolder = useRef(null);

  const { scrollYProgress: imageHolderScrolled } = useScroll({
    target: imageHolder,
    offset: ["start end", "end start"],
  });

  const LeftAndRightImgY = useTransform(imageHolderScrolled, [0, 1], [0, -100]);
  const MidImgY = useTransform(imageHolderScrolled, [0, 1], [0, 150]);

  // For Dragging Cards
  const DragConstraintRef = useRef(null);
  const cardsRef = useRef(null);
  const [isDragging, setDragging] = useState(true);
  const { scrollYProgress: cardsRefX } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"],
  });
  const cardsRefXValue = useTransform(cardsRefX, [0, 1], [0, -200]);
  return (
    <section>
      {/* This below div will act as a background */}
      <div
        style={{
          backgroundColor: theme,
          transition: "background-color 0.6s cubic-bezier(0.11, 0, 0.5, 0)",
        }}
        className="fixed inset-0 z-[-99]"
      ></div>
      {/* Expander */}
      <motion.div ref={ExpanderRef}>
        <Expander />
      </motion.div>
      {/* About US */}
      <div className="pt-64 pb-28">
        <p className="text-[#BD1826] text-center text-lg">ABOUT US</p>
        <div className="w-[50%] mx-auto mt-20 relative">
          <img
            className="object-cover opacity-40"
            src="/images/Home/caratula_video_abene_new.webp"
            alt=""
          />
          <div className="h-[72px] w-[72px] border-2 border-white rounded-full absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <IoPlay className="text-white h-5 " />
          </div>
        </div>
        <div className="mt-10 text-white">
          <p className="text-center text-xl">Abene Mendizabal</p>
          <p className="text-center">Founder & CEO Spain Collection</p>
        </div>
      </div>
      {/* Ambassadors */}
      <motion.div ref={AmbassadorsRef} className="pb-44">
        <p className="text-[#BD1826] text-center text-lg uppercase">
          Ambassadors
        </p>
        <div
          style={{
            transition: "color 0.6s linear",
          }}
          className="mt-20 flex justify-evenly"
        >
          {AmbassadorsData.map((item) => (
            <Ambassadords key={item.id} {...item} />
          ))}
        </div>
      </motion.div>
      {/* Why Choose Us */}
      <div className="pt-[68vh] relative">
        {/* Text */}
        <div
          style={{
            lineHeight: "0.9",
          }}
          className="text-center text-[170px] w-full absolute top-0 z-[2]"
        >
          <p className="text-red-600 italic">Why</p>
          <p>CHOOSE</p>
          <p>SPAIN</p>
          <p>COLLEC-</p>
          <p>TION?</p>
        </div>
        {/* ImagesHolder */}
        <div ref={imageHolder} className="flex justify-evenly">
          <motion.div
            style={{
              y: LeftAndRightImgY,
            }}
          >
            <FixedImages key={fixedImages[0].id} {...fixedImages[0]} />
          </motion.div>
          <motion.div
            style={{
              y: MidImgY,
            }}
          >
            <FixedImages key={fixedImages[1].id} {...fixedImages[1]} />
          </motion.div>
          <motion.div
            style={{
              y: LeftAndRightImgY,
            }}
          >
            <FixedImages key={fixedImages[2].id} {...fixedImages[2]} />
          </motion.div>
        </div>
      </div>
      {/* Marquees */}
      <div className="mt-80 flex flex-col overflow-hidden">
        <Marquee key={"forwardMarquee"} data={marquees[0]} />
        <Marquee key={"ReverseMarquee"} data={marquees[1]} reverse={true} />
      </div>
      {/* Discover the Luxury */}
      <div
        ref={DragConstraintRef}
        className="h-[120vh] w-full px-[10%] py-40 mx-auto bg-black text-white text-5xl relative overflow-x-clip border-4"
      >
        <p>Discover the</p>
        <p>
          <span
            style={{
              fontFamily: "SaolDisplay-Italic",
            }}
            className="text-red-700"
          >
            luxury
          </span>{" "}
          of
        </p>
        <p>traveling with</p>
        <p>us</p>
        <motion.div
          drag="x"
          dragConstraints={DragConstraintRef}
          dragMomentum={false}
          dragTransition={{ bounceStiffness: 150, bounceDamping: 10 }}
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
          ref={cardsRef}
          style={{
            top: "50%",
            left: cardsRefXValue,
          }}
          className="h-[75vh] flex flex-nowrap gap-7 pl-52 pr-36 absolute"
        >
          {cardsData.map((item) => (
            <Cards key={item.id} {...item} isDragging={isDragging} />
          ))}
        </motion.div>
      </div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
    </section>
  );
};

export default Home;
