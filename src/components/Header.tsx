// src/components/Header.tsx

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Section1 from "./section_head/Section1";

// Slides du carousel
const slides = [
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1636304508054-daf943221-h_mg011u9d.jpg",
    title: "TV",
    text: "Vidéos qui captivent, histoires qui résonnent.",
    link: "#tv"
  },
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1543349689-b481d0472a54.jpeg",
    title: "Design",
    text: "Esthétique audacieuse pour vos projets.",
    link: "#design"
  },
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1706452031249-1520c2a78-h_mfpvqes9.jpg",
    title: "News",
    text: "L'information qui compte, livrée sans fard.",
    link: "#news"
  },
];

export default function Header() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  // Ajout pour stocker l'index du slide affiché
  const [currentIndex, setCurrentIndex] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  // --- EFFET PARALLAX DYNAMIQUE ---
  const [bgPos, setBgPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setBgPos(window.scrollY * 0.4); // 0.4 = vitesse parallax, ajuste si tu veux plus ou moins d'effet
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // --- FIN PARALLAX ---

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  // Exemple d'utilisation de headerRef
  useEffect(() => {
    if (headerRef.current) {
      // Manipuler l'élément DOM
      console.log(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <header ref={headerRef} className="w-full min-h-screen relative overflow-hidden">
      {/* Navbar en haut */}
      <div className="w-full z-20 relative">
        <Navbar />
      </div>

{/* Background image + overlay olive + PARALLAX dynamique */}
      <div
        className="
          absolute inset-0 w-full h-full
          bg-mobile-ceniv bg-contain
          sm:bg-desktop-ceniv sm:bg-contain
          bg-center bg-no-repeat
        "
        style={{
          backgroundPosition: `center ${bgPos}px`
        }}
      >
        <div className="absolute inset-0 bg-[#001822] opacity-60"></div>
      </div>

      {/* Contenu du header */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-8 pb-4">
        {/* Logo */}
        <motion.img
          src="https://r.mobirisesite.com/1844272/assets/images/photo-1543349689-727c21d183a6-h_mfpua919.jpg"
          alt="Logo CENIV"
          className="mx-auto mb-16 mt-32 w-28 h-28 object-cover"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
        {/* Titre */}
        <motion.h1
          className="text-white font-serif font-bold text-2xl md:text-5xl mb-20 text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Bienvenue chez CENIV
        </motion.h1>

        {/* Carousel */}
        <div className="w-full flex flex-col items-center mb-16 px-4">
          <div className="relative w-full max-w-xl mx-auto">
            <div ref={emblaRef} className="overflow-hidden rounded-2xl">
              <div className="flex">
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className="min-w-full flex items-center px-5 py-4 bg-[#23270094] rounded-2xl border-2 border-[#586102] hover:border-[#e1760a] transition-colors duration-300 cursor-pointer"
                    style={{ boxSizing: "border-box" }}
                  >
                    {/* Image à gauche */}
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-[160px] h-[112px] rounded-2xl object-cover mr-4"
                    />
                    {/* Texte à droite */}
                    <div className="flex-1">
                      <h4 className="font-serif text-white text-base font-semibold mb-1">{slide.title}</h4>
                      <p className="font-serif text-white text-base">{slide.text}</p>
                    </div>
                    {/* Flèche personnalisée en bas à droite, redirection dynamique */}
                    {idx === currentIndex && (
                      <div className="flex flex-col justify-end items-end h-full ml-6">
                        <button
                          onClick={() => window.location.assign(slide.link)}
                          className="bg-transparent p-0 m-0 focus:outline-none"
                          aria-label={`Voir plus sur ${slide.title}`}
                        >
                          <img
                            src="/assets/ico/fleche-courbe.png"
                            alt="Flèche"
                            className="w-8 h-8"
                            draggable={false}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Texte d'accroche et bouton après le carousel */}
        <motion.p
          className="font-serif text-white text-xl md:text-4xl font-medium mb-12 text-center max-w-sm leading-[2.2]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Plongez dans un univers où média et créativité fusionnent pour créer des expériences inoubliables.
        </motion.p>
        <motion.a
          href="#"
          className="inline-block bg-[#0f2adb84] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#ba4b0bce] transition mb-2"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Voir Plus
        </motion.a>
      </div>

      <Section1 />
    </header>
  );
}