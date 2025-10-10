// src/components/section_head/Section7.tsx

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1571107983363-e9591aa18639.jpeg",
    title: "Mission",
    text: "Propulser la créativité, amplifier les voix, <br/>et construire des ponts entre les cultures grâce <br/>à des récits percutants.",
  },
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1694098255907-a9e4a6ce96e2.jpeg",
    title: "Vision",
    text: "Devenir la référence mondiale pour l'innovation média <br/>et l'expression artistique audacieuse, <br/>inspirant l'avenir créatif.",
  },
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1707914688546-5e9499a95d92.jpeg",
    title: "Valeurs",
    text: "Intégrité, audace, collaboration <br/>et une passion dévorante pour l'excellence créative, <br/>guidant nos actions quotidiennes.",
  },
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1518106483637-3370c2448997.jpeg",
    title: "Histoire",
    text: "Né d'une étincelle vive, CENIV a grandi <br/>pour devenir un phare d'innovation, <br/>réunissant les esprits les plus brillants.",
  },
  {
    img: "https://r.mobirisesite.com/1844272/assets/images/photo-1724339289597-6d562f096dad.jpeg",
    title: "Branches",
    text: "Découvrez nos divisions : <br/>CENIV TV, Ceniv Alberta Design, Ceniv News, <br/>et notre présence LinkedIn déjà forte et active.",
  }
];

export default function Section7() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoScrollRef = useRef<number | null>(null);

  // Initialize Embla and set up selection callback
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    onSelect(); // Set initial selected index
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      return;
    }

    autoScrollRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      // Pause auto-scroll temporarily when user interacts
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
        // Restart auto-scroll after 6 seconds
        setTimeout(() => {
          if (emblaApi) {
            autoScrollRef.current = setInterval(() => {
              emblaApi.scrollNext();
            }, 10000);
          }
        }, 12000);
      }
    }
  };
  
  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      // Pause auto-scroll temporarily when user interacts
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
        // Restart auto-scroll after 6 seconds
        setTimeout(() => {
          if (emblaApi) {
            autoScrollRef.current = setInterval(() => {
              emblaApi.scrollNext();
            }, 10000);
          }
        }, 12000);
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Content */}
      <div className="relative z-20 w-full container mx-auto px-12 py-20">
        <div className="content-wrapper flex flex-col items-center">
          {/* Title & Description */}
          <div className="title-wrapper mb-14 md:mb-12 flex flex-col items-center">
            <div className="desc-wrapper w-full flex justify-center mb-4">
              <motion.p
                className="font-serif text-white text-xl md:text-2xl text-center w-full md:w-1/2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Notre ADN Créatif
              </motion.p>
            </div>
            <motion.h2
              className="font-serif text-white text-4xl md:text-6xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              CENIV : Plus Qu'un Média
            </motion.h2>
            <div className="text-wrapper w-full flex justify-center">
              <motion.p
                className="font-serif text-white text-lg md:text-xl text-center w-full md:w-1/2 mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Bienvenue dans l'univers CENIV, où les idées prennent vie et les histoires captivent. <br />
                Nous sommes un collectif dynamique de créateurs et de penseurs, façonnant l'avenir du contenu média. Préparez-vous à être ébloui.
              </motion.p>
            </div>
          </div>
          {/* Slider */}
          <div className="slider-wrapper w-full max-w-6xl mx-auto">
            <div className="embla relative" ref={emblaRef}>
              <div className="embla__container flex">
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className="embla__slide flex-[0_0_100%] min-w-0 px-0"
                  >
                    <div className="slide-content flex flex-col items-center">
                      <div className="item-img mb-8 w-full max-w-4xl">
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="rounded-2xl object-cover w-full transition-all duration-300 border border-transparent hover:border-[#D4A373] hover:shadow-md hover:scale-[1.005] cursor-pointer"
                          style={{ height: "480px" }}
                        />
                      </div>
                      <div className="item-content flex flex-col items-center text-center max-w-2xl">
                        <h4 className="font-serif text-white text-3xl md:text-4xl font-bold mb-4">
                          {slide.title}
                        </h4>
                        <p 
                          className="font-serif text-white text-base md:text-lg leading-relaxed"
                          style={{ 
                            paddingLeft: "16px", 
                            paddingRight: "16px",
                            marginLeft: "8px",
                            marginRight: "8px"
                          }}
                          dangerouslySetInnerHTML={{ __html: slide.text }}
                        ></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Buttons */}
              <button
                className="absolute -left-48 -bottom-32 w-14 h-14 bg-[#1D2200] text-white rounded-full flex items-center justify-center text-3xl shadow-lg transition-all hover:scale-110 hover:bg-[#2a3300] z-10"
                onClick={scrollPrev}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="absolute -right-48 -bottom-32 w-14 h-14 bg-[#1D2200] text-white rounded-full flex items-center justify-center text-3xl shadow-lg transition-all hover:scale-110 hover:bg-[#2a3300] z-10"
                onClick={scrollNext}
                aria-label="Next"
              >
                ›
              </button>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    selectedIndex === idx 
                      ? 'bg-[#D4A373] scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  aria-label={`Aller à la slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Button */}
          <div className="mbr-section-btn text-center mt-10">
            <a
              className="btn btn-primary bg-[#D4A373] text-[#1D2200] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#ba4b0bce] transition mt-24 inline-block"
              href="#"
            >
              En Savoir Plus
            </a>
          </div>
        </div>
      </div>
      {/* Responsive image height */}
      <style>{`
        @media (max-width: 1200px) {
          .embla__slide img { height: 350px !important; max-height: 350px !important; }
          .embla__slide { min-width: 650px !important; max-width: 650px !important; }
        }
        @media (max-width: 767px) {
          .embla__slide img { height: 250px !important; max-height: 250px !important; }
          .embla__slide { min-width: 100vw !important; max-width: 100vw !important; }
        }
      `}</style>
    </section>
  );
}