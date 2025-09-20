// src/components/Navbar.tsx

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="w-full flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="hover:text-blue-400">CENIV</a>
        </motion.div>
        <ul className="flex space-x-6">
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="/" className="hover:text-blue-400">Accueil</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="/press" className="hover:text-blue-400">Presse</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="/about" className="hover:text-blue-400">À propos</a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
}