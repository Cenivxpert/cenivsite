// src/components/section_head/Section1.tsx

import { motion } from "framer-motion";

const cards = [
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1636304508054-daf943221-h_mfpvphzd.jpg",
    title: "TV",
    text: "Notre dernière production télévisuelle promet de secouer le paysage médiatique avec son audace.",
    date: "2024-07-26",
    link: "#"
  },
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1543349689-b481d0472a54.jpeg",
    title: "Design",
    text: "Découvrez comment Ceniv Alberta Design transforme les idées en réalités visuelles époustouflantes.",
    date: "2024-07-25",
    link: "#"
  },
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1706452031249-1520c2a78-h_mfpvqes9.jpg",
    title: "News",
    text: "Un regard exclusif sur les événements qui façonnent notre monde, par CENIV News. Ne manquez pas notre dernière édition.",
    date: "2024-07-24",
    link: "#"
  },
];

export default function HeaderNews() {
  return (
    <section className="relative w-full py-16 bg-[#001822]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#001822] opacity-80 pointer-events-none"></div>
      <div className="relative container mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-white text-4xl md:text-5xl font-bold mb-12 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Dernières Nouvelles
        </motion.h2>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-20">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1D2200] border-2 border-[#586102] rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:border-[#D4A373] hover:bg-[#D4A373]/20 w-full md:w-1/3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
            >
              <div>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[280px] object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 py-5">
                <h4 className="text-[#9aa0a6] font-bold text-xl mb-2">{card.title}</h4>
                <p className="text-white mb-4">{card.text}</p>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-white text-sm">{card.date}</p>
                  <a href={card.link} className="text-[#FFFFFF] hover:text-[#D4A373] transition-colors">
                    <span className="material-icons text-[24px] align-middle">share</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Button */}
        <div className="mt-12 text-center">
          <a
            className="btn btn-primary bg-[#D4A373] text-[#1D2200] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#ba4b0bce] transition mb-16"
            href="#"
          >
            Toutes les News
          </a>
        </div>
      </div>
    </section>
  );
}