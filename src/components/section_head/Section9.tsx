// src/components/section_head/Section9.tsx

import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1674108015075-14605f55fba9.jpeg",
    title: "Newsroom",
    text: "Accédez aux dernières nouvelles et aux ressources presse.",
    icon: <span className="mbr-iconfont mobi-mbri-right mobi-mbri text-white text-xl" />,
    link: "#",
  },
  {
    number: "02",
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1703936205356-11814e31bfda.jpeg",
    title: "Press Kit",
    text: "Téléchargez logos, photos et bios pour vos besoins.",
    icon: <span className="mbr-iconfont mobi-mbri-right mobi-mbri text-white text-xl" />,
    link: "#",
  },
];

export default function Section9() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Content */}
      <div className="relative z-20 w-full container mx-auto px-4 py-20">
        {/* Title & Description */}
        <div className="mb-16 flex flex-col items-center title-wrapper">
          <motion.h2
            className="font-serif text-white text-5xl md:text-6xl font-bold mb-6 text-center mbr-section-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Au Cœur de l'Action
          </motion.h2>
          <motion.p
            className="font-serif text-white text-xl md:text-xl text-center w-full md:w-1/2 mbr-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Plongez dans notre centre névralgique de l'information.
          </motion.p>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 items-wrapper justify-center">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="item features-image w-full md:w-1/2 px-8 md:px-4 mb-8 md:mb-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 * idx }}
            >
              <div
                className="item-wrapper transition-all duration-300 border-2 border-transparent rounded-xl shadow-lg h-full hover:border-[#D4A373] hover:bg-[#D4A373] hover:scale-[1.02] focus:border-[#D4A373] focus:bg-[#D4A373]"
                tabIndex={0}
              >
                <div className="item-wrap border border-[#586102] bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] rounded-xl flex flex-col justify-between h-full overflow-hidden transition-all duration-300">
                  <div className="item-img relative">
                    <div className="image-wrap">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full object-cover"
                        style={{
                          height: "680px",
                          borderRadius: "0px",
                          maxHeight: "680px",
                        }}
                      />
                    </div>
                    <div className="number-wrap absolute top-0 left-0 w-full px-6 pt-6">
                      <p className="item-number inline-block px-6 py-1 bg-[#111400] text-white font-bold text-xl m-0 rounded-lg">
                        {card.number}
                      </p>
                    </div>
                    <div className="item-content px-6 py-6">
                      <h4 className="item-title font-serif text-white text-2xl mb-2">{card.title}</h4>
                      <p className="item-text font-serif text-white text-lg mb-0">{card.text}</p>
                    </div>
                  </div>
                  <div className="icon-wrapper text-right px-6 pb-6">
                    <a href={card.link} className="inline-block">
                      {card.icon}
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
        /* Tablette uniquement */
        @media (min-width: 768px) and (max-width: 992px) {
          .image-wrap img { height: 500px !important; max-height: 500px !important; }
          .title-wrapper { margin-bottom: 40px !important; }
        }
        
        /* Mobile spécifique */
        @media (max-width: 767px) {
          .image-wrap img { height: 350px !important; max-height: 350px !important; }
          .title-wrapper { margin-bottom: 48px !important; }
        }
      `}</style>
    </section>
  );
}