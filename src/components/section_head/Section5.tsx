// src/components/section_head/Section5.tsx

import { useEffect, useState } from "react";

export default function Section5() {
  const [bgPos, setBgPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setBgPos(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tu définis la HAUTEUR ici !
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fond image qui couvre toute la zone */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url('https://r.mobirisesite.com/1844272/assets/images/photo-1674108015366-95f4dbf94d4c.jpeg')",
          backgroundSize: "cover",
          // La position verticale varie doucement avec le scroll
          backgroundPosition: `center ${bgPos - 400}px`,
          zIndex: 0,
        }}
      />
      {/* Overlay pour le contraste */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      {/* Ajoute ici ton contenu */}
    </section>
  );
}