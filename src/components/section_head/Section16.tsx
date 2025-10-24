// src/components/section_head/Section16.tsx

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const cards = [
  {
    img: "/assets/image/ceniv-actu-blog.png",
    date: "2024-07-26",
    text: "Nouveau projet lancé !",
    link: "#"
  },
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1686256329888-91782b1cc9b3.jpeg",
    date: "2024-07-25",
    text: "Interview exclusive fondateurs.",
    link: "#"
  }
];

export default function Section16() {
  return (
    <section className="relative w-full py-16 md:py-24 flex items-center justify-center overflow-hidden">

      {/* Content */}
      <div className="relative z-20 w-full container mx-auto px-4">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <div className="title-wrapper mb-16 md:mb-12 flex flex-col items-center">
              <motion.h2
                className="mbr-section-title font-serif text-white text-4xl md:text-5xl font-bold mb-2 text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Newsroom
              </motion.h2>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="row items-wrapper flex flex-col md:flex-row gap-8 mx-[-32px] justify-center">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="item features-image w-full md:w-1/2 px-8 md:px-4 mb-8 md:mb-0 flex"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
            >
              <div
                className="item-wrapper h-full border-2 border-transparent transition-all duration-300 rounded-2xl hover:border-[#D4A373] hover:bg-[#D4A373] focus:border-[#D4A373] focus:bg-[#D4A373]"
                tabIndex={0}
              >
                <div className="item-wrap p-2 md:p-4 border border-[#586102] bg-[#1D2200] flex h-full justify-between rounded-2xl flex-col md:flex-row">
                  {/* Image */}
                  <div className="item-img w-full md:w-1/2 flex-shrink-0">
                    <img
                      src={card.img}
                      alt={card.text}
                      className="w-full object-cover rounded-xl"
                      style={{
                        height: "150px",
                        borderRadius: "16px",
                        maxHeight: "150px"
                      }}
                    />
                  </div>
                  {/* Content */}
                  <div className="item-content w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-6 mt-6 md:mt-0">
                    <div className="text-wrap flex flex-col justify-center items-center w-full flex-1 text-center">
                      <p className="item-date font-serif text-white text-base mb-2">{card.date}</p>
                      <p className="item-text font-serif text-white text-lg md:text-xl mb-0">{card.text}</p>
                    </div>
                    <div className="icon-wrapper flex justify-end items-end mt-auto">
                      <a href={card.link} className="hover:text-[#D4A373] transition-colors">
                        <FaArrowRight className="mbr-iconfont text-white text-2xl" />
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
        
        /* Tablette uniquement */
        @media (min-width: 768px) and (max-width: 992px) {
          .item-wrap { flex-direction: column !important; }
          .item-img, .item-content { width: 100% !important; }
          .item-img img { height: 160px !important; max-height: 160px !important; }
          .item { margin-bottom: 24px !important; }
          .title-wrapper { margin-bottom: 40px !important; }
        }
        
        /* Mobile spécifique */
        @media (max-width: 767px) {
          .item-wrap { flex-direction: column !important; }
          .item-img, .item-content { width: 100% !important; }
          .item-img img { height: 120px !important; max-height: 120px !important; }
          .item { margin-bottom: 28px !important; }
          .title-wrapper { margin-bottom: 48px !important; }
        }
      `}</style>
    </section>
  );
}