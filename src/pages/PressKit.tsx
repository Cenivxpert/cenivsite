// src/pages/PressKit.tsx

import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Data structure pour organiser les ressources
const pressResources = [
  {
    category: "Documents officiels",
    icon: "📋",
    items: [
      {
        title: "Communiqué de presse",
        description: "Document complet avec tous les détails officiels",
        url: "/press/CENIV_PressKit.pdf",
        type: "PDF",
        action: "download",
        icon: "📄"
      },
      {
        title: "Texte standard (Boilerplate)",
        description: "Description standard de CENIV pour vos articles",
        url: "/press/boilerplate.txt",
        type: "TXT",
        action: "view",
        icon: "📝"
      },
      {
        title: "Biographies des fondateurs",
        description: "Profils détaillés de l'équipe dirigeante",
        url: "/press/founders_bios.pdf",
        type: "PDF",
        action: "download",
        icon: "👥"
      }
    ]
  },
  {
    category: "Assets visuels",
    icon: "🎨",
    items: [
      {
        title: "Logo CENIV (Noir)",
        description: "Version haute résolution pour fond clair",
        url: "/press/Ceniv Black.png",
        type: "PNG",
        action: "view",
        icon: "⚫"
      },
      {
        title: "Logo CENIV (Blanc)",
        description: "Version haute résolution pour fond sombre",
        url: "/press/Ceniv White.png",
        type: "PNG",
        action: "view",
        icon: "⚪"
      },
      {
        title: "Logo vectoriel (Blanc)",
        description: "Format vectoriel pour impression",
        url: "/press/Ceniv-removebg white.svg",
        type: "SVG",
        action: "view",
        icon: "◻️"
      },
      {
        title: "Logo vectoriel (Noir)",
        description: "Format vectoriel pour impression",
        url: "/press/Ceniv-removebg black.svg",
        type: "SVG",
        action: "view",
        icon: "◼️"
      },
      {
        title: "Image de promotion",
        description: "Visuel officiel pour communication",
        url: "/assets/image/press-kit-image.png",
        type: "PNG",
        action: "view",
        icon: "🖼️"
      }
    ]
  },
  {
    category: "Galerie média",
    icon: "📸",
    items: [
      {
        title: "Photos & Vidéos HD",
        description: "Collection complète : équipe, behind-the-scenes, événements",
        url: "/photos-gallery",
        type: "Gallery",
        action: "navigate",
        icon: "🎬"
      }
    ]
  }
];

const contactInfo = {
  email: "cenivxpert.mk96@outlook.com",
  phone: "+212 601 058 129",
  address: "Marrakech, Maroc",
  website: "https://ceniv.vercel.app/",
  socials: [
    { name: "Twitter", url: "https://twitter.com/ceniv", icon: "🐦" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ceniv-design-digital-communication", icon: "💼" },
    { name: "YouTube", url: "https://www.youtube.com/@CENIV-Diaspora", icon: "▶️" },
    { name: "TikTok", url: "http://www.tiktok.com/@cenivdiaspora", icon: "🎵" },
    { name: "Facebook News", url: "https://www.facebook.com/cenivnews", icon: "📘" },
    { name: "Facebook Design", url: "https://www.facebook.com/CenivAlbetaDesign/", icon: "🎨" },
    { name: "Instagram", url: "https://www.instagram.com/ceniv_official/", icon: "📸" }
  ]
};

export default function PressKit() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Dossier de presse - CENIV</title>
        <meta name="description" content="Téléchargez le dossier de presse de CENIV, incluant le communiqué, les logos, et les bios des fondateurs." />
        <meta name="keywords" content="CENIV, dossier de presse, communiqué, logos, bios fondateurs, média, design, communication" />
      </Helmet>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] text-white">
        <div className="container mx-auto px-4 py-20">
          
          {/* Header Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
              <span className="text-2xl">📰</span>
              <span className="text-[#D4A373] font-semibold">Espace Presse</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold py-4 mb-6 bg-gradient-to-r from-[#D4A373] via-white to-[#D4A373] bg-clip-text text-transparent">
              Dossier de Presse
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Découvrez <span className="text-[#D4A373] font-semibold">CENIV</span>, une entité média et créative 
              dédiée à la communication digitale pour la diaspora. 
              <br />
              <span className="text-[#D4A373]">Fondé le 10 mars 2025 à Marrakech</span>
            </p>
          </div>

          {/* Resources Grid */}
          <div className="max-w-7xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#D4A373]">
              Ressources disponibles
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {pressResources.map((category, categoryIdx) => (
                <div
                  key={category.category}
                  className={`group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 
                    hover:bg-white/10 hover:border-[#D4A373]/50 transition-all duration-500
                    hover:scale-105 hover:shadow-2xl hover:shadow-[#D4A373]/20
                    animate-fade-in-up cursor-pointer`}
                  style={{ animationDelay: `${categoryIdx * 0.2}s` }}
                  onClick={() => setSelectedCategory(selectedCategory === categoryIdx ? null : categoryIdx)}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-[#D4A373] group-hover:text-white transition-colors duration-300">
                      {category.category}
                    </h3>
                  </div>

                  {/* Items List */}
                  <div className={`space-y-4 overflow-hidden transition-all duration-500 ${
                    selectedCategory === categoryIdx ? 'max-h-[1000px] opacity-100' : 'max-h-60 opacity-75'
                  }`}>
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={item.title}
                        className={`group/item bg-[#D4A373]/10 border border-[#D4A373]/30 rounded-xl p-4
                          hover:bg-[#D4A373]/20 hover:border-[#D4A373] transition-all duration-300 
                          transform hover:translate-x-2 hover:scale-102
                          animate-slide-in-right`}
                        style={{ animationDelay: `${categoryIdx * 0.2 + itemIdx * 0.1}s` }}
                      >
                        <a
                          href={item.url}
                          {...(item.action === 'download' ? { download: true } : {})}
                          target={item.action === 'navigate' ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-2xl flex-shrink-0 group-hover/item:animate-bounce">
                              {item.icon}
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-white group-hover/item:text-[#D4A373] transition-colors">
                                  {item.title}
                                </h4>
                                <span className="px-2 py-1 bg-[#D4A373]/20 text-[#D4A373] text-xs rounded-full font-medium">
                                  {item.type}
                                </span>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="text-[#D4A373] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                              {item.action === 'download' ? '⬇️' : '→'}
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Expand Indicator */}
                  <div className="flex justify-center mt-6">
                    <div className={`w-8 h-8 rounded-full bg-[#D4A373]/20 flex items-center justify-center
                      cursor-pointer hover:bg-[#D4A373]/40 transition-all duration-300
                      ${selectedCategory === categoryIdx ? 'rotate-180' : ''}`}>
                      <span className="text-[#D4A373] font-bold">↓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 animate-fade-in-up">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-[#D4A373]/10 rounded-full">
                  <span className="text-2xl">📞</span>
                  <span className="text-[#D4A373] font-semibold text-xl">Contact Presse</span>
                </div>
                <p className="text-gray-300">
                  Pour toute demande <br className="md:hidden" />d'information ou interview.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Contact Info */}
                <div className="space-y-6 -ml-4 md:ml-0 mx-auto md:mx-0 max-w-md md:max-w-none">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <p className="text-[#D4A373] font-semibold">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-[#D4A373] transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <div className="text-2xl">📱</div>
                    <div>
                      <p className="text-[#D4A373] font-semibold">Téléphone</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-[#D4A373] transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <div className="text-2xl">📍</div>
                    <div>
                      <p className="text-[#D4A373] font-semibold">Adresse</p>
                      <p className="text-white">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <div className="text-2xl">🌐</div>
                    <div>
                      <p className="text-[#D4A373] font-semibold">Site web</p>
                      <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" 
                         className="text-white hover:text-[#D4A373] transition-colors">
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Networks */}
                <div className="-ml-4 md:ml-0 mx-auto md:mx-0 max-w-md md:max-w-none">
                  <h4 className="text-xl font-bold text-[#D4A373] mb-6 text-center">
                    Suivez-nous
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {contactInfo.socials.map((social, idx) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-3 p-4 bg-[#D4A373]/10 rounded-xl 
                          hover:bg-[#D4A373] hover:text-[#001822] transition-all duration-300 
                          transform hover:scale-105 animate-slide-in-right`}
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <span className="text-xl group-hover:animate-bounce">{social.icon}</span>
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS personnalisé pour les animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>

      <Footer />
    </>
  );
}