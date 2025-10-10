// src/pages/NotFound.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] text-gray-100">
      {/* Animation du "bonhomme" */}
      <motion.div
        className="relative w-48 h-48 mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
      >
        {/* Tête */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#1834ebb5] rounded-full border-4 border-[#ba4b0bce]" />
        {/* Yeux */}
        <div className="absolute top-14 left-[42%] w-4 h-4 bg-white rounded-full animate-bounce" />
        <div className="absolute top-14 left-[58%] w-4 h-4 bg-white rounded-full animate-bounce" />
        {/* Corps */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-10 h-20 bg-[#e1760a] rounded-lg" />
        {/* Bras */}
        <motion.div
          className="absolute top-32 left-1/2 -translate-x-[140%] w-10 h-4 bg-[#586102] rounded-lg origin-right"
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.div
          className="absolute top-32 left-1/2 translate-x-[40%] w-10 h-4 bg-[#586102] rounded-lg origin-left"
          animate={{ rotate: [0, -20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

      {/* Texte principal */}
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-center mb-8 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Oups... Cette page n’existe pas ou a été déplacée.  
        Mais ne vous inquiétez pas, notre petit bonhomme cherche le chemin !
      </motion.p>

      {/* Bouton retour */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-[#1834ebb5] hover:bg-[#ba4b0bce] transition text-white font-semibold shadow-lg"
        >
          Retour à l’accueil
        </Link>
      </motion.div>
    </div>
  );
}
