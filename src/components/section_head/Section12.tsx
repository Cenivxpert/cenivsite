// src/components/section_head/Section12.tsx

import { motion } from "framer-motion";
import SocialLinksLarge from "../SocialLinksLarge";

export default function Section12() {

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">

      <div className="relative z-20 w-full container mx-auto px-4">
        {/* GRID - desktop: 2 cols, mobile 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* G A U C H E : Titre + Tabs + Texte */}
          <div className="flex flex-col h-full justify-start">
            {/* Ligne horizontal : titre + onglets */}
            <div className="flex flex-row items-start gap-8 mb-0">
              <motion.h2
                className="mbr-section-title font-serif text-white text-2xl md:text-3xl font-bold mb-0 mt-8 text-left whitespace-pre-line"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                style={{ minWidth: "260px" }}
              >
                Restons Connectés :{'\n'}Vos Liens Vers l'Infini
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <SocialLinksLarge />
              </motion.div>
            </div>
            {/* Texte d'intro, sous le titre/tabs */}
            <div className="mt-16 md:mt-24">
              <motion.p
                className="item-text font-serif text-white text-lg md:text-xl mb-0 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{ maxWidth: "620px" }}
              >
                Rejoignez notre univers digital et découvrez nos contenus exclusifs sur toutes nos plateformes. De YouTube à LinkedIn, en passant par TikTok et Facebook, nous vous offrons une expérience unique adaptée à chaque réseau social.
              </motion.p>
            </div>
          </div>
          {/* D R O I T E : IMAGE */}
          <div className="image-wrapper w-full flex items-start justify-end">
            <motion.img
              src="https://r.mobirisesite.com/1844272/assets/images/photo-1470090606874-79e96ff4d3e3.jpeg"
              alt="Réseaux sociaux CENIV"
              className="w-full max-w-[560px] object-cover rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                height: "580px",
                maxHeight: "580px",
                borderRadius: "20px"
              }}
            />
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 992px) {
          .grid { grid-template-columns: 1fr !important; }
          .image-wrapper img { height: 350px !important; max-height: 350px !important; }
          .nav-tabs { gap: 8px !important; }
          .mbr-section-title { margin-bottom: 12px !important; }
        }
      `}</style>
    </section>
  );
}