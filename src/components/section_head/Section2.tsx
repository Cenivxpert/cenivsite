// src/components/section_head/Section2.tsx

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Section2() {
  // Parallax dynamique
  const [bgPos, setBgPos] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Parallax speed ajustable: 0.4 = effet visible mais subtil
      setBgPos(window.scrollY * 0.4);
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
            "url('https://r.mobirisesite.com/1844272/assets/images/g2d0682af82af162c67166596daa8-h_mfpw9mng.jpg')",
          backgroundSize: "cover",
          backgroundPosition: `center ${bgPos}px`,
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 bg-[#001822] opacity-70 z-10"></div>

      {/* Contenu principal */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="font-serif text-white text-8xl md:text-8xl font-bold mb-2 leading-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Notre ADN
        </motion.h1>

        <motion.p
          className="font-serif text-white text-2xl md:text-2xl mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Mission, Vision, Valeurs : Le cœur battant de CENIV.
        </motion.p>

        <motion.p
          className="font-serif text-white text-3xl md:text-4xl font-normal leading-relaxed md:leading-loose max-w-3xl mb-0 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Nous sommes une force motrice, <br />
          façonnant l'avenir des médias <br />
          et de la création <br />
          avec passion et intégrité.
        </motion.p>

        <div className="mbr-section-btn text-center mt-12">
          <a
            className="btn btn-primary bg-[#D4A373] text-[#1D2200] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#ba4b0bce] transition"
            href="#"
          >
            Notre Histoire
          </a>
        </div>
      </div>
    </section>
  );
}