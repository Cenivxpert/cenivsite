// src/components/section_head/Section14.tsx
import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";


interface Card {
  mainIcon: ReactElement;
  mainIconColor: string;
  desc: string;
  title: string;
  text: string;
  icon: ReactElement;
  iconColor: string;
  link: string;
}

const cards: Card[] = [
  {
    mainIcon: <FaCheckCircle />,
    mainIconColor: "#FFFFFF",
    desc: "Presse",
    title: "Communiqués",
    text: "Les dernières nouvelles.",
    icon: <FaArrowRight />,
    iconColor: "#FFFFFF",
    link: "#"
  },
  {
    mainIcon: <FaCheckCircle />,
    mainIconColor: "#FFFFFF",
    desc: "Kit",
    title: "Press Kit",
    text: "Nos outils.",
    icon: <FaArrowRight />,
    iconColor: "#FFFFFF",
    link: "#"
  },
  {
    mainIcon: <FaCheckCircle />,
    mainIconColor: "#FFFFFF",
    desc: "Fondateurs",
    title: "Bios",
    text: "Nos visages.",
    icon: <FaArrowRight />,
    iconColor: "#FFFFFF",
    link: "#"
  }
];

export default function Section14() {
  return (
    <section className="relative w-full py-16 md:py-24 flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-20 w-full container mx-auto px-4">
        {/* Title & Description */}
        <div className="row">
          <div className="col-12">
            <div className="title-wrapper mb-8 md:mb-6 flex flex-col items-center">
              
              <motion.h2
                className="mbr-section-title font-serif text-white text-4xl md:text-5xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Au Cœur de l'Action
              </motion.h2>
              <div className="text-wrapper w-full">
                <motion.p
                  className="mbr-text font-serif text-white text-lg md:text-2xl text-center w-full md:w-1/2 mx-auto mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Accédez à notre univers médiatique.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="row items-wrapper flex flex-col md:flex-row gap-2 md:gap-4 mx-[-32px] justify-center">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="item features-without-image w-full md:w-1/3 px-8 md:px-4 mb-8 md:mb-0 flex"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
            >
              <div
                className="item-wrapper w-full border-2 border-transparent transition-all duration-300 flex flex-col rounded-3xl hover:border-[#D4A373] hover:bg-[#D4A373] focus:border-[#D4A373] focus:bg-[#D4A373]"
                style={{ minHeight: '500px' }}
                tabIndex={0}
              >
                <div className="item-wrap border border-[#586102] bg-[#1D2200] flex flex-col overflow-hidden h-full rounded-3xl">
                  {/* Main Icon */}
                  <div className="icon-wrapper-main flex items-center justify-center bg-[#586102] h-[280px] rounded-t-3xl">
                    <a href={card.link} className="flex items-center justify-center">
                      <span style={{ fontSize: 132, color: card.mainIconColor }}>
                        {card.mainIcon}
                      </span>
                    </a>
                  </div>
                  {/* Texts */}
                  <div className="text-wrap px-6 py-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="item-desc font-serif text-white text-lg mb-2">{card.desc}</p>
                      <h4 className="item-title font-serif text-white text-2xl font-bold mb-2">
                        {card.title}
                      </h4>
                      <p className="item-text font-serif text-white text-base md:text-lg mb-4">{card.text}</p>
                    </div>
                    {/* Secondary Icon */}
                    <div className="icon-wrapper flex justify-end mt-auto">
                      <a href={card.link}>
                        <span style={{ fontSize: 24, color: card.iconColor }}>
                          {card.icon}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        .items-wrapper { margin-left: -32px; margin-right: -32px; }
        .item { padding-left: 32px; padding-right: 32px; }
        .item.features-without-image { flex: 0 0 auto; }
        
        /* Desktop */
        @media (min-width: 1200px) {
          .item.features-without-image { width: calc(33.333% - 12px) !important; max-width: 400px !important; }
          .items-wrapper { justify-content: center !important; gap: 1.5rem !important; }
        }
        
        /* Tablette */
        @media (min-width: 768px) and (max-width: 1199px) {
          .item.features-without-image { width: calc(33.333% - -8px) !important; max-width: 360px !important; }
          .items-wrapper { justify-content: center !important; gap: 0.1rem !important; }
          .item-wrapper { min-height: 380px !important; }
          .item-wrapper .icon-wrapper-main { height: 160px !important; }
          .text-wrap { padding: 0.875rem !important; }
        }
        
        /* Tablette uniquement */
        @media (min-width: 768px) and (max-width: 992px) {
          .item-wrapper .mbr-iconfont { font-size: 75px !important; }
          .item { margin-bottom: 24px !important; }
          .title-wrapper { margin-bottom: 40px !important; }
        }
        
        /* Mobile spécifique */
        @media (max-width: 767px) {
          .item-wrapper { min-height: 350px !important; }
          .item-wrapper .icon-wrapper-main { height: 160px !important; }
          .item-wrapper .mbr-iconfont { font-size: 60px !important; }
          .item { margin-bottom: 28px !important; }
          .title-wrapper { margin-bottom: 48px !important; }
        }
      `}</style>
    </section>
  );
}