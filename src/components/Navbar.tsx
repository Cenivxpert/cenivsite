// src/components/Navbar.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow absolute top-0 left-0 w-full z-50 h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4 relative h-16">
        {/* Logo + Brand avec Motion */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="relative">
            <img
              src="https://r.mobirisesite.com/1844272/assets/images/g17b7c588e6d78ba3a14d5d145ee3-h_mfzwfjv3.jpg"
              alt="CENIV"
              className="h-12 w-12 rounded-full object-contain"
            />
          </Link>
        </motion.div>
        {/* Menu items desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/" className="text-white px-4 py-2 rounded hover:bg-[#ba4b0bce] hover:underline decoration-black decoration-2 underline-offset-[6px] transition-all">
              Accueil
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/about" className="text-white px-4 py-2 rounded hover:bg-[#ba4b0bce] hover:underline decoration-black decoration-2 underline-offset-[6px] transition-all">
              À Propos
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/branch" className="text-white px-4 py-2 rounded hover:bg-[#ba4b0bce] hover:underline decoration-black decoration-2 underline-offset-[6px] transition-all">
              Branches
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/press" className="text-white px-4 py-2 rounded hover:bg-[#ba4b0bce] hover:underline decoration-black decoration-2 underline-offset-[6px] transition-all">
              PressKit
            </Link>
          </motion.li>
        </ul>
        {/* Bouton principal desktop */}
        <motion.div
          className="hidden md:flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/contact" className="btn btn-primary bg-[#D4A373] text-black px-5 py-2 rounded-full hover:bg-[#ba4b0bce] transition-colors">
            Nous Joindre
          </Link>
        </motion.div>
        {/* Bouton Hamburger mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="w-10 h-10 flex flex-col items-center justify-center rounded-full bg-[#1a202c] text-white space-y-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Menu mobile drawer */}
      {isOpen && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-64 max-w-full h-screen bg-[#1a202c] shadow-lg flex flex-col py-6 px-8 md:hidden z-50"
        >
          <button
            className="self-end mb-8 text-white text-2xl"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu"
          >
            &times;
          </button>
          <Link 
            to="/" 
            className="text-white px-4 py-2 rounded hover:bg-[#ba4b0bce] hover:underline decoration-black decoration-2 underline-offset-[6px] transition-all" 
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            to="/about" 
            className="text-white px-4 py-2 rounded hover:bg-[#ba4b0bce] hover:underline decoration-black decoration-2 underline-offset-[6px] transition-all" 
            onClick={() => setIsOpen(false)}
          >
            À Propos
          </Link>
          <Link 
            to="/branch" 
            className="text-white px-4 py-2 rounded hover:bg-[#ba4b0bce] hover:underline decoration-black decoration-2 underline-offset-[6px] transition-all" 
            onClick={() => setIsOpen(false)}
          >
            Branches
          </Link>
          <Link 
            to="/press" 
            className="text-white px-4 py-2 rounded hover:bg-[#ba4b0bce] hover:underline decoration-black decoration-2 underline-offset-[6px] transition-all" 
            onClick={() => setIsOpen(false)}
          >
            PressKit
          </Link>
          <Link 
            to="/contact" 
            className="mt-6 btn btn-primary bg-[#5c72fd] text-white px-5 py-2 rounded hover:bg-[#ba4b0bce] transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            Nous Joindre
          </Link>
        </motion.div>
      )}
    </nav>
  );
}