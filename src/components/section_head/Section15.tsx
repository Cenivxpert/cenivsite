// src/components/section_head/Section15.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faq = [
  {
    question: "Qu'est-ce que CENIV ?",
    answer:
      "CENIV est une entité média et créative dynamique, regroupant diverses branches pour offrir des expériences uniques et percutantes.",
  },
  {
    question: "Comment nous contacter ?",
    answer:
      "Utilisez notre formulaire de contact ou envoyez un email à notre adresse professionnelle.",
  },
  {
    question: "Où trouver nos réseaux ?",
    answer:
      "Nos liens sont disponibles en pied de page pour vous connecter à notre univers.",
  },
  {
    question: "Quelle est notre politique ?",
    answer:
      "Consultez nos mentions légales et notre politique éditoriale pour plus de détails.",
  },
 
];

export default function Section15() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative w-full py-8 md:py-16 flex items-center justify-center overflow-hidden">
      <div className="relative z-20 w-full container mx-auto px-4">
        <div className="row items-wrapper flex flex-col lg:flex-row gap-4 lg:gap-6 mx-[-32px] justify-center">
          {/* Titre à gauche */}
          <div className="col-12 lg:col-lg-7 card flex items-start px-8 lg:px-4">
            <div className="content-wrapper w-full">
              <div className="title-wrapper lg:mb-12 flex flex-col items-center lg:items-start">
                <motion.h2
                  className="mbr-section-title font-serif text-white text-4xl lg:text-5xl font-medium mb-6 mt-4 lg:pr-48 lg:whitespace-nowrap text-center lg:text-left"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  Questions Fréquentes
                </motion.h2>
              </div>
            </div>
          </div>
          {/* Accordion à droite */}
          <div className="col-12 lg:col-lg-5 card px-8 lg:px-4">
            <div
              id="bootstrap-accordion"
              className="panel-group accordionStyles"
              role="tablist"
              aria-multiselectable="true"
            >
              {faq.map((item, idx) => (
                <div
                  className={`card bg-[#1D2200] border border-[#586102] rounded-3xl mt-3 transition-all duration-300 ${open === idx ? "border-[#D4A373]" : ""}`}
                  key={idx}
                  tabIndex={0}
                  onFocus={() => setOpen(idx)}
                  onBlur={() => setOpen(null)}
                >
                  <div className="card-header bg-transparent border-none px-0">
                    <button
                      className="panel-title flex justify-between items-center w-full px-0 py-3 focus:outline-none"
                      aria-expanded={open === idx}
                      aria-controls={`collapse${idx}`}
                      onClick={() => setOpen(open === idx ? null : idx)}
                    >
                      <h4 className="panel-title-edit font-serif text-white text-lg md:text-xl mb-0">
                        {item.question}
                      </h4>
                      <div
                        className={`icon-wrapper w-12 h-12 min-w-12 flex items-center justify-center ml-4 rounded-full bg-[#586102] transition-all duration-300 shadow-lg`}
                      >
                        {open === idx ? (
                          <FaMinus className="text-[#D4A373] text-2xl transition-all duration-300" />
                        ) : (
                          <FaPlus className="text-black text-2xl transition-all duration-300" />
                        )}
                      </div>
                    </button>
                  </div>
                  <div
                    id={`collapse${idx}`}
                    className={`panel-collapse noScroll transition-all duration-300 ${open === idx ? "block" : "hidden"}`}
                  >
                    <div className="panel-body mt-4">
                      <p className="panel-text font-serif text-white text-base md:text-lg mb-0">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        .items-wrapper { margin-left: -32px; margin-right: -32px; }
        .card { padding-left: 32px; padding-right: 32px; }
        
        /* Tablette uniquement */
        @media (min-width: 768px) and (max-width: 1023px) {
          .title-wrapper { margin-bottom: 1.5rem !important; }
          .items-wrapper { gap: 1rem !important; }
          .card { margin-bottom: 1rem !important; }
        }
        
        /* Mobile spécifique */
        @media (max-width: 767px) {
          .title-wrapper { margin-bottom: 1rem !important; }
          .items-wrapper { gap: 0.75rem !important; }
          .mbr-section-title { font-size: 2rem !important; }
        }
      `}</style>
    </section>
  );
}