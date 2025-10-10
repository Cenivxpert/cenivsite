// src/components/section_head/Section11.tsx

import { useEffect, useRef } from "react";

const images = [
  "https://r.mobirisesite.com/1844272/assets/images/photo-1686769606431-63acc87f9a41.jpeg",
  "https://r.mobirisesite.com/1844272/assets/images/photo-1658483497492-7b87fdcdcedb.jpeg",
  "https://r.mobirisesite.com/1844272/assets/images/photo-1691786320721-1f0832e97c42.jpeg",
  "https://r.mobirisesite.com/1844272/assets/images/photo-1739732119808-0aeef88d14d9.jpeg"
];

export default function Section11() {
  // Animation défilement horizontal
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animFrame: number;
    let position = 0; // Position initiale
    const animate = () => {
      if (trackRef.current) {
        position -= 1; // Vitesse du scroll
        const containerWidth = trackRef.current.scrollWidth / 2; // Moitié car on duplique
        if (position <= -containerWidth) {
          position = 0; // Reboucle quand on atteint la moitié
        }
        trackRef.current.style.transform = `translate3d(${position}px, 0px, 0px)`;
      }
      animFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container-fluid gallery-wrapper relative z-20 overflow-hidden">
        <div className="row justify-center">
          <div className="col-12 content-head mx-auto max-w-[800px]">
            <div className="mbr-section-head">
            </div>
          </div>
        </div>
        <div className="grid-container overflow-hidden">
          <div
            className="grid-container-3 moving-left flex gap-1"
            ref={trackRef}
            style={{
              willChange: "transform"
            }}
          >
            {[...images, ...images].map((src, idx) => (
              <div className="grid-item" key={idx}>
                <img
                  src={src}
                  alt={`Gallery ${(idx % images.length) + 1}`}
                  className="rounded-lg border-2 border-transparent transition-all duration-300 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        .gallery-wrapper { overflow: hidden; }
        .grid-container { display: flex; width: 200vw; }
        .grid-container-3 { display: flex; gap: 1rem; }
        .grid-item { flex-shrink: 0; }
        .grid-item img { 
          width: 30vw; 
          height: 480px; 
          object-fit: cover; 
        }
        @media (max-width: 1200px) {
          .grid-item img { height: 350px; width: 35vw; }
        }
        @media (max-width: 767px) {
          .grid-item img { height: 200px; width: 40vw; }
        }
      `}</style>
    </section>
  );
}