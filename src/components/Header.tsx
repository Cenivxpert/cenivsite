// src/components/Header.tsx

import { motion } from 'framer-motion';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header className="bg-gray-900 shadow">
      <div className="w-full px-4 py-6">
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold text-ceniv mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a href="/">CENIV</a>
        </motion.div>

        {/* Bannière animée responsive */}
        <motion.div
          className="relative overflow-hidden rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="/public/assets/image/ceniv-bannières.png" // Remplacez par votre fichier d'image (ex. public/assets/banner.jpg)
            alt="Bannière CENIV"
            className="w-full h-48 object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
          </div>
        </motion.div>

        {/* Navigation */}
        <Navbar />

        {/* Social Links */}
        <SocialLinks />

        {/* Placeholder pour Ceniv News */}
        <div className="mt-4 text-center">
          <a href="https://www.ceniv-news.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Découvrez CENIV News (bientôt disponible)
          </a>
        </div>
        
      </div>
    </header>
  );
}