// src/components/section_head/Section10.tsx

import { motion } from "framer-motion";

const cards = [
  {
    title: "Transparence Totale",
    text: "Notre politique éditoriale garantit une information honnête et captivante. Pas de blabla inutile ici.",
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1708651950011-41558c65a135.jpeg",
    link: "#",
    btn: "Notre Ligne"
  },
  {
    title: "Partenariats Stratégiques",
    text: "Collaborons pour créer des campagnes publicitaires qui marquent les esprits et génèrent de l'impact.",
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1717769165971-c81dfab13a1c.jpeg",
    link: "#",
    btn: "Notre Ligne"
  }
];

export default function Section10() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Content */}
      <div className="relative z-20 w-full container mx-auto px-4 py-20">
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
                className="item-wrapper flex flex-col justify-between h-full transition-all duration-300 border border-[#586102] bg-[#1D2200] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-2xl"
                tabIndex={0}
              >
                <div className="item-content px-6 py-6 md:py-8 mb-0">
                  <h4 className="item-title font-serif text-white text-2xl md:text-3xl font-bold mb-2">
                    {card.title}
                  </h4>
                  <p className="item-text font-serif text-white text-lg md:text-xl mb-0">
                    {card.text}
                  </p>
                </div>
                <div className="item-img relative">
                  <div className="image-wrap">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full object-cover"
                      style={{
                        height: "320px",
                        borderRadius: "0px",
                        maxHeight: "320px"
                      }}
                    />
                  </div>
                  <div className="mbr-section-btn absolute left-0 bottom-0 w-full px-6 py-6">
                    <a
                      className="btn btn-primary bg-[#D4A373] text-[#1D2200] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#ba4b0bce] transition w-full"
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
        @media (max-width: 992px) {
          .image-wrap img { height: 220px !important; max-height: 220px !important; }
          .item-wrapper { margin-bottom: 28px !important; }
        }
        .items-wrapper { margin-left: -32px; margin-right: -32px; }
        .item { padding-left: 32px; padding-right: 32px; }
      `}</style>
    </section>
  );
}