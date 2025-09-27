// src/components/section_head/Section6.tsx

import { motion } from "framer-motion";

export default function Section6() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#001822]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#001822] opacity-80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full container mx-auto px-4 py-20">
        <div className="flex flex-col items-center content-wrapper px-0 md:px-[12%]">
          {/* Title & Description */}
          <div className="title-wrapper mb-16 md:mb-12 flex flex-col items-center">
            <motion.h2
              className="font-serif text-white text-2xl md:text-5xl font-medium mb-8 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Salle de Presse
            </motion.h2>
            <div className="text-wrapper w-full">
              <motion.p
                className="font-serif text-white text-xl md:text-xl text-center w-full mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Accédez à nos communiqués, notre kit presse complet <br />
                et tout ce qu'il faut savoir sur CENIV.
              </motion.p>
            </div>
          </div>
          {/* Image */}
          <div className="image-wrapper w-full flex justify-center mb-12 md:mb-16">
            <img
              src="https://r.mobirisesite.com/1844272/assets/images/photo-1713647266218-1a2eb84b6718.jpeg"
              alt="Salle de Presse CENIV"
              className="rounded-2xl object-cover w-full"
              style={{ height: "600px", maxHeight: "600px" }}
            />
          </div>
          {/* Button */}
          <div className="mbr-section-btn text-center">
            <a
              className="btn btn-secondary bg-[#D4A373] text-[#1D2200] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#ba4b0bce] transition"
              href="/press"
            >
              Accéder
            </a>
          </div>
        </div>
      </div>
      {/* Responsive image height */}
      <style>{`
        @media (max-width: 992px) {
          .image-wrapper img { height: 250px; max-height: 250px; }
        }
        .content-wrapper { padding-left: 12%; padding-right: 12%; }
        @media (max-width: 992px) {
          .content-wrapper { padding-left: 0; padding-right: 0; }
        }
      `}</style>
    </section>
  );
}