// src/components/section_head/Section18.tsx

import SocialLinks from "../SocialLinks";

const contacts = [
  "+212 601 058 129",
  "cenivxpert.mk96@outlook.com",
  "Marrakech, Maroc",
];

export default function Section18() {
  return (
    <section className="relative w-full flex items-start justify-center overflow-hidden py-6">
      <div className="relative z-20 w-full container mx-auto px-4">
        <div className="row">
          <div className="col-12">
            <h2 className="mbr-section-title font-serif text-white text-4xl md:text-5xl font-bold mb-16 text-center">
              Contactez-Nous
            </h2>
          </div>
          <div className="col-12 flex flex-col md:flex-row gap-12">
            {/* Liste contacts */}
            <div className="col-12 md:col-lg-6 list-wrapper flex flex-col items-start">
              <ul className="list font-serif text-white text-xl md:text-2xl p-0 m-0">
                {contacts.map((line, idx) => (
                  <li
                    className="item-wrap mb-2 cursor-pointer opacity-70 hover:opacity-100 focus:opacity-100 transition"
                    tabIndex={0}
                    key={idx}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            {/* Réseaux sociaux */}
            <div className="col-12 md:col-lg-6 social-wrapper flex items-start justify-end md:justify-end ml-auto">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        .list-wrapper { margin-bottom: 36px; }
        .list { color: #FFFFFF; }
        .item-wrap:last-child { margin-bottom: 0; }
        /* Tablette uniquement */
        @media (min-width: 768px) and (max-width: 992px) {
          .mbr-section-title { margin-bottom: 40px !important; }
          .google-map { margin-bottom: 40px !important; }
          .social-wrapper { text-align: center !important; justify-content: center !important; }
        }
        
        /* Mobile spécifique */
        @media (max-width: 767px) {
          .mbr-section-title { margin-bottom: 48px !important; }
          .google-map { margin-bottom: 48px !important; }
          .social-wrapper { text-align: left !important; justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}