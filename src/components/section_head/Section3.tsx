// src/components/section_head/Section3.tsx

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Section3() {
  // Parallax dynamique
  const [bgPos, setBgPos] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setBgPos(window.scrollY * 0.3); // Ajuste la vitesse parallax ici
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#001822]"
    >
      {/* Background image + Overlay + Parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url('https://r.mobirisesite.com/1844272/assets/images/g42c20c3ccd6a0cdcb11767e967e8-h_mg04tzia.jpg')",
          backgroundSize: "contain",
          backgroundPosition: `center ${bgPos}px`,
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 bg-[#060606] opacity-70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-center container mx-auto py-20 px-4">
        {/* Text Card */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-8 py-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <h2 className="font-serif text-white text-4xl md:text-5xl font-bold mb-6">
              Prêt à Créer?
            </h2>
            <div className="text-wrapper">
              <p className="font-serif text-white text-xl md:text-2xl mb-6">
                Que vous ayez une idée folle, un projet ambitieux ou simplement l'envie de collaborer, notre équipe est là pour donner vie à vos ambitions.
              </p>
            </div>
            <div className="mbr-section-btn mt-2">
              <a
                className="btn btn-primary bg-[#D4A373] text-[#1D2200] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#ba4b0bce] transition"
                href="#"
              >
                Contactez-nous
              </a>
            </div>
          </motion.div>
        </div>
        {/* Image Card */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="image-wrapper w-full flex items-center justify-center"
          >
            <img
              src="https://r.mobirisesite.com/1844272/assets/images/photo-1561382781-76dd6a2ce0b6.jpeg"
              alt="Création"
              className="rounded-xl object-cover w-full h-[400px] md:h-[480px] shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}