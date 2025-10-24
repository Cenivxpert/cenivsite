// src/components/section_head/Section8.tsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";


// Slides data
const slides = [
  {
    title: "CENIV TV : <br/>L'Écran Qui Parle",
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1485120819915-91622ebd2d00.jpeg",
  },
  {
    title: "Ceniv Albeta Design : <br/>L'Art en Mouvement",
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1660480339323-e4c6c588442e.jpeg",
  },
  {
    title: "Ceniv News : <br/>L'Information Qui Compte",
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1686256329888-91782b1cc9b3.jpeg",
  },
];

export default function Section8() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Définir l'index initial

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Content */}
      <div className="relative z-20 w-full  mx-auto px-2 py-20">
        <div className="content-wrapper">
          {/* Title & Description */}
          <div className="title-wrapper mb-16 flex flex-col items-center">
            <motion.h2
              className="font-serif text-white text-5xl md:text-6xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Nos Univers
            </motion.h2>
            <div className="text-wrapper w-full">
              <motion.p
                className="font-serif text-white text-xl md:text-2xl text-center w-full md:w-1/2 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Chaque facette de CENIV brille de sa propre lumière.
              </motion.p>
            </div>
          </div>
          {/* Carousel */}
          <div className="slider-wrapper">
            <div className="embla embla-section8 relative">
              <div className="embla__viewport embla__viewport-section8" ref={emblaRef}>
                <div className="embla__container embla__container-section8">
                  {slides.map((slide, idx) => (
                    <div
                      key={idx}
                      className="embla__slide slider-image item flex justify-center items-center min-w-full"
                    >
                      <div className="slide-content w-full flex flex-col md:flex-row items-center justify-center">
                        <div className="item-wrapper flex flex-col md:flex-row items-center w-full">
                          <div className="item-content flex flex-col items-start text-left ml-8 md:ml-4 lg:ml-2 xl:ml-0">  {/* Sortir de la boîte */}
                            <h4 
                              className="item-title font-section8 text-white text-2xl md:text-3xl font-medium mb-2 text-center md:text-left"
                              style={{ lineHeight: '1.8' }}
                              dangerouslySetInnerHTML={{ __html: slide.title }}
                            ></h4>
                          </div>
                          <div className="item-img -mb-4 w-full md:w-3/5 relative">
                            <div className="item-wrap p-1 md:p-3 border-2 border-[#D4A373] rounded-3xl shadow-lg">
                              <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-[360px] md:h-[360px] object-cover rounded-xl"
                              />
                            </div>
                            {/* Shadow gradient overlay */}
                            <div
                              className="absolute -bottom-2 left-0 w-full h-3/5 rounded-xl pointer-events-none"
                              style={{
                                background:
                                  "linear-gradient(0deg, #001822 35%, transparent 98%)",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Embla arrows */}
              <button
                className="embla__button embla__button--prev absolute -left-28 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1D2200] text-white rounded-full flex justify-center items-center shadow-lg hover:scale-105 transition"
                onClick={scrollPrev}
                aria-label="Précédent"
              >
                <span className="mobi-mbri mobi-mbri-left mbr-iconfont text-2xl">
                  &#8592;
                </span>
              </button>
              <button
                className="embla__button embla__button--next absolute -right-28 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1D2200] text-white rounded-full flex justify-center items-center shadow-lg hover:scale-105 transition"
                onClick={scrollNext}
                aria-label="Suivant"
              >
                <span className="mobi-mbri mobi-mbri-right mbr-iconfont text-2xl">
                  &#8594;
                </span>
              </button>
            </div>
          </div>
          {/* Exemple : Indicateurs de slides */}
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  selectedIndex === index 
                    ? "bg-[#D4A373]" 
                    : "bg-white/30"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Responsive styles spécifiques à Section8 */}
      <style>{`
        /* Desktop par défaut */
        .embla-section8 { padding-left: 0%; padding-right: 6%; }
        .embla-section8 .embla__viewport { overflow: hidden; width: 100%; }
        .embla-section8 .embla__container { display: flex; }
        .embla-section8 .embla__slide { min-width: 100%; max-width: 100%; }
        .embla-section8 .item-content { width: 50%; }
        .embla-section8 .item-img { width: 45%; }
        .embla-section8 .item-wrap img { height: 360px; }

        /* Tablette uniquement (768px à 992px) */
        @media (min-width: 768px) and (max-width: 992px) { 
          .embla-section8 { padding-left: 19%; padding-right: 0%; }
          .embla-section8 .item-content { 
            width: 40%; 
            margin-left: 0%;
            margin-right: -8%;
            min-width: 25%;
            flex-shrink: 2;
          }
          .embla-section8 .item-img { width: 60%; }
        }

        /* Mobile (moins de 768px) */
        @media (max-width: 767px) { 
          .embla-section8 { padding-left: 0; padding-right: 0; }
          .embla-section8 .item-content { width: 100%; }
          .embla-section8 .item-img { width: 100%; }
          .embla-section8 .item-wrap img { height: 300px; }
        }
      `}</style>
    </section>
  );
}