import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CENIV",
  "url": "https://www.ceniv.com",
  "logo": "https://www.ceniv.com/assets/ceniv-logo.svg",
  "sameAs": [
    "https://www.youtube.com/@CENIVTV",
    "https://www.tiktok.com/@cenivdiaspora",
    "https://www.facebook.com/cenivnews",
    "https://www.linkedin.com/company/ceniv-design-digital-communication",
    "https://www.instagram.com/ceniv_official"
  ],
  "founder": [
    {"@type": "Person", "name": "Nalimo Gongo Prince Dieu Merci"},
    {"@type": "Person", "name": "Azane Christian Serge"}
  ],
  "foundingDate": "2025-03-10",
  "description": "CENIV est une entité média et créative dédiée à la communication digitale et visuelle."
}

const tabs = [
  {
    label: "Visual Designer",
    name: "Christian Azane",
    role: "Visual Identity Designer",
    img: "/press/photos-video-hd/about-us/visual_designer.jpg",
    text: "Chris crée des systèmes visuels audacieux et mémorables — des logos aux modèles sociaux — qui aident les marques personnelles à se démarquer avec style et cohérence sur toutes les plateformes. Création et maintenance sites web. Assure une qualité constante."
  },
  {
    label: "Brand Strategist",
    name: "Prince Nalimo",
    role: "Brand Strategist",
    img: "/press/photos-video-hd/about-us/brand_strategist.jpg",
    text: "Prince gère les marchés/opportunités CENIV et suit les partenariats. Aide les entrepreneurs et les créatifs à révéler leur histoire unique et à la positionner pour un impact maximal. Fort d'une expérience en storytelling et en marketing, il transforme leur vision personnelle en messages percutants."
  },
  {
    label: "Reporter terrain",
    name: "Diakité Mamadou",
    role: "Reporter terrain",
    img: "/press/photos-video-hd/about-us/reporter_terrain.jpeg",
    text: "Diakité réalise des interviews, micros-trottoirs et vidéos de motivation. Assure la présence de CENIV sur le terrain et le lien direct avec le public. Propose des sujets pertinents en accord avec la vision de CENIV et diffuse les contenus sur Tiktok et les autres canaux adaptés."
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  // Défilement automatique toutes les 15 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(current => (current + 1) % tabs.length);
    }, 15000); // 15 secondes

    return () => clearInterval(interval);
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une fois au montage

  return (
    <>
      <Helmet>
        <title>À propos de CENIV</title>
        <meta name="description" content="Découvrez CENIV, une entité média et créative dédiée à la diaspora." />
        <meta name="keywords" content="CENIV, diaspora, média, design, communication" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] text-gray-100 pt-20">
        <div className="w-full px-4 py-8">
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Qui sommes-nous ?</h1>
          <div className="w-full space-y-8">
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              Nous sommes <span className="text-[#D4A373] font-semibold">CENIV</span>, un collectif vibrant qui façonne le futur des médias et de la création. <br />
              <span className="text-[#D4A373] font-semibold">Notre mission</span> est de propulser les idées audacieuses et de raconter des histoires qui résonnent. <br />
              <span className="text-[#D4A373] font-semibold">Notre vision ? </span> Un monde où la créativité n'a pas de limites et où l'information est accessible et engageante pour tous. <br />
              <span className="text-[#D4A373] font-semibold">Nos valeurs</span> sont le courage, l'innovation et l'authenticité.
            </p>
            {/* Section Tabs Mobirise style */}
            <section className="w-full bg-[#001822] rounded-xl py-10 px-8 md:px-16 lg:px-24 xl:px-32 shadow-lg mt-8 mx-auto">
              <div className="flex flex-col md:flex-row gap-16 items-start justify-between">
                {/* Colonne gauche : Tabs + texte */}
                <div className="w-full md:w-3/5 flex flex-col">
                  <div className="flex flex-row gap-4 mb-8">
                    {tabs.map((tab, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`px-6 py-2 rounded-lg font-serif text-lg transition outline-none
                          ${activeTab === idx
                            ? "bg-white text-black font-semibold"
                            : "bg-[#232323] text-white"}`}
                        style={{ border: "none" }}
                        aria-selected={activeTab === idx}
                        role="tab"
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2">
                    <p 
                      className="font-serif text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-0"
                      dangerouslySetInnerHTML={{ __html: tabs[activeTab].text }}
                    />
                  </div>
                </div>
                {/* Colonne droite : image + nom + rôle */}
                <div className="w-full md:w-2/5 flex flex-col items-start justify-center">
                  <div className="image-wrap mb-4">
                    <img
                      src={tabs[activeTab].img}
                      alt={tabs[activeTab].name}
                      className="rounded-2xl object-cover h-[220px] w-[220px] md:h-[300px] md:w-[300px] shadow"
                    />
                  </div>
                  <h4 className="font-serif text-white text-3xl md:text-4xl font-bold mb-2 text-left leading-relaxed">
                    {tabs[activeTab].name}
                  </h4>
                  <p className="item-role text-white text-lg md:text-xl font-medium text-left leading-relaxed">
                    {tabs[activeTab].role}
                  </p>
                </div>
              </div>
            </section>
            <div className="mt-12 text-center">
              <p className="text-white text-sm opacity-70 leading-relaxed">
                Fondé le 10 mars 2025 à Marrakech, Maroc
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}