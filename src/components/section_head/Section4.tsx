// src/components/section_head/Section4.tsx

import { motion } from "framer-motion";

// Icônes font-awesome ou socicon : adapter selon ton système d'icône
const icons = [
    {
        name: "ceniv-tv",
        icon: (
            <div className="relative flex flex-col items-center">
                <img
                    src="/assets/logo/Logo-Ceniv-black-pur-Bg-White.png"
                    alt="CENIV TV"
                    className="w-[80px] h-[80px] object-contain rounded-xl"
                />
                <div className="absolute bottom-[-40px] flex gap-2">
                    <a href="https://www.youtube.com/@CENIV-Diaspora" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/ico/youtube1.png" alt="YouTube" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="http://www.tiktok.com/@cenivdiaspora" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/ico/tiktok2.png" alt="TikTok" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                    </a>
                </div>
            </div>
        ),
        link: "https://www.youtube.com/@CENIV-Diaspora"
    },
    {
        name: "ceniv-alberta-design",
        icon: (
            <div className="relative flex flex-col items-center">
                <img
                    src="/assets/logo/Logo-Ceniv-Discord.png"
                    alt="Ceniv Albeta Design"
                    className="w-[80px] h-[80px] object-contain rounded-xl"
                />
                <div className="absolute bottom-[-40px] flex gap-2">
                    <a href="https://www.facebook.com/CenivAlbetaDesign/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/ico/facebook1.png" alt="Facebook" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                    </a>
                </div>
            </div>
        ),
        link: "https://www.facebook.com/CenivAlbetaDesign/"
    },
    {
        name: "ceniv-news",
        icon: (
            <div className="relative flex flex-col items-center">
                <img
                    src="/assets/logo/Ceniv-White.png"
                    alt="Ceniv News"
                    className="w-[80px] h-[80px] object-contain rounded-xl"
                />
                <div className="absolute bottom-[-40px] flex gap-2">
                    <a href="https://www.facebook.com/cenivnews" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/ico/facebook1.png" alt="Facebook" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                    </a>
                </div>
            </div>
        ),
        link: "https://www.facebook.com/cenivnews"
    },
];

const cards = [
  {
    title: "CENIV TV",
    text: "Contenu vidéo percutant qui ne laisse personne indifférent.",
    icon: icons[0].icon,
    link: icons[0].link
  },
  {
    title: "Ceniv Alberta Design",
    text: "L'art de la conception visuelle au service de votre identité.",
    icon: icons[1].icon,
    link: icons[1].link
  },
  {
    title: "Ceniv News",
    text: "Actualités brutes et analyses pertinentes, comprendre le monde.",
    icon: icons[2].icon,
    link: icons[2].link
  }
];

export default function Section4() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#001822]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#001822] opacity-80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full container mx-auto px-4 py-20">
        {/* Title & Description */}
        <div className="mb-16 flex flex-col items-center">
          <motion.h2
            className="font-serif text-white text-5xl md:text-5xl font-medium mb-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Nos Piliers Créatifs
          </motion.h2>
          <motion.p
            className="font-serif text-white text-xl md:text-xl text-center w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Chaque branche de CENIV est une étoile dans notre constellation.
          </motion.p>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1D2200] border border-[#586102] rounded-xl shadow-lg flex flex-col items-center justify-between px-8 py-10 md:w-1/3 w-full h-full transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 * idx }}
            >
              <div className="flex flex-col items-center mb-6">
                <div className="icon-wrapper flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h4 className="item-title font-serif text-white text-2xl md:text-3xl font-bold mb-2 mt-6 text-center">
                  {card.title}
                </h4>
              </div>
              <p className="item-text font-serif text-white text-lg md:text-xl text-center mb-0">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}