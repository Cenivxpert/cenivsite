// src/components/Footer.tsx

import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function Footer() {
  const [show, setShow] = useState(false);

  // Affiche le bouton si on scrolle
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll vers le haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full pb-2 pt-4 border-t border-white/10 bg-black/10">
      <div
        className="relative flex flex-col md:flex-row items-center md:items-center justify-between px-6 text-white text-xs md:text-sm"
        style={{ minHeight: "40px" }}
      >
        {/* Copyright à gauche */}
        <div className="w-full md:w-auto text-center md:text-left mb-3 md:mb-0">
          © {new Date().getFullYear()} CENIV — Tous droits réservés
        </div>
        {/* Liens à droite */}
        <nav className="hidden md:flex md:w-auto flex-row justify-end items-center gap-4 text-white/70">
          <a href="/" className="hover:text-[#D4A373] transition">
            Accueil
          </a>
          <span className="mx-1">/</span>
          <a href="/contact" className="hover:text-[#D4A373] transition">
            Contact
          </a>
          <span className="mx-1">/</span>
          <a href="/legal" className="hover:text-[#D4A373] transition">
            Mentions Légales
          </a>
          <span className="mx-1">/</span>
          <a href="/terms" className="hover:text-[#D4A373] transition">
            Conditions Générales
          </a>
        </nav>
        {/* Bouton scroll-to-top à droite */}
        <button
          onClick={scrollToTop}
          title="Remonter en haut"
          className="absolute right-4 md:right-8 bottom-8 flex items-center justify-center p-2 rounded bg-[#23272e] text-white hover:bg-[#D4A373] hover:text-[#001822] transition z-10 shadow-lg"
          style={{ display: show ? "flex" : "none" }}
        >
          <FaChevronUp size={18} />
        </button>
      </div>
    </footer>
  );
}