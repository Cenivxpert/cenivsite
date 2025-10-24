// src/components/section_head/Section13.tsx

import { motion } from "framer-motion";

const cards = [
  {
    title: "Mentions Légales",
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1546542755-81ef2fa60800.jpeg",
    link: "/mentions-legales",
    btn: "Lire Ici",
  },
  {
    title: "Contact Pro",
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1604092039917-7c153e632619.jpeg",
    link: "/contact-pro",
    btn: "Lire Ici",
  },
  {
    title: "Politique Éditoriale",
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1694095748042-a659a51a1d52.jpeg",
    link: "/politique-editoriale",
    btn: "Lire Ici",
  },
];

export default function Section13() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">

      {/* Content */}
      <div className="relative z-20 w-full container mx-auto px-4">
        {/* Title & Description */}
        <div className="row">
          <div className="col-12">
            <div className="title-wrapper mb-16 md:mb-12 flex flex-col items-center">
              <motion.h2
                className="mbr-section-title font-serif text-white text-4xl md:text-5xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Légalité &amp; Contact
              </motion.h2>
              <div className="text-wrapper w-full">
                <motion.p
                  className="mbr-text font-serif text-white text-lg md:text-2xl text-center w-full md:w-1/2 mx-auto mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  Les détails qui comptent.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="row items-wrapper flex flex-col md:flex-row gap-8 mx-[-32px] justify-center">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="item features-image w-full md:w-1/3 px-8 md:px-4 mb-8 md:mb-0 flex"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
            >
              <div className="item-wrapper h-full transition-all duration-300 flex flex-col justify-between">
                <div className="item-wrap flex flex-col h-full justify-between">
                  <div className="item-img relative">
                    <div className="image-wrap mb-8 md:mb-8">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full object-cover rounded-xl"
                        style={{
                          height: "300px",
                          maxHeight: "300px"
                        }}
                      />
                    </div>
                    <div className="item-content">
                      <h4 className="item-title font-serif text-white text-xl md:text-2xl font-bold mb-4 text-center">
                        {card.title}
                      </h4>
                    </div>
                  </div>
                  <div className="mbr-section-btn flex justify-center mt-2 mb-4">
                    <a
                      className="btn btn-primary bg-[#D4A373] text-[#1D2200] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#ba4b0bce] transition"
                      href={card.link}
                    >
                      {card.btn}
                    </a>
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
          .image-wrap img { height: 280px !important; max-height: 280px !important; }
          .item { margin-bottom: 24px !important; }
          .title-wrapper { margin-bottom: 40px !important; }
        }
        
        /* Mobile spécifique */
        @media (max-width: 767px) {
          .image-wrap img { height: 220px !important; max-height: 220px !important; }
          .item { margin-bottom: 28px !important; }
          .title-wrapper { margin-bottom: 48px !important; }
        }
      `}</style>
    </section>
  );
}