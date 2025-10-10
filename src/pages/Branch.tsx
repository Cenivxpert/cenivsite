// src/pages/Branch.tsx
import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Data structure for branches and their content
const branches = [
  {
    name: "CENIV TV",
    platforms: [
      {
        name: "YouTube",
        playlists: [
          {
            title: "Motivation (Shorts)",
            objective: "Inspirer et motiver l’audience avec de courtes vidéos percutantes.",
          },
          {
            title: "Podcasts (Audio & Vidéos)",
            objective:
              "Partager des échanges approfondis sur des sujets variés liés à l’entrepreneuriat, la créativité et la société.",
          },
          {
            title: "News in 1 Min – Afrique de l’Ouest & Centrale (Shorts)",
            objective:
              "Informer rapidement sur l’actualité régionale en un format express.",
          },
          {
            title: "Vibes (Vidéos)",
            objective:
              "Créer un espace positif et divertissant, pour partager l’ambiance et l’énergie de CENIV et de ses projets.",
          },
          {
            title: "CENIV Tips (Shorts)",
            objective:
              "Offrir de la valeur avec des astuces et des conseils pratiques.",
          },
        ],
      },
      {
        name: "TikTok",
        playlists: [
          {
            title: "Motivation (Shorts)",
            objective:
              "Inspirer et créer un lien émotionnel avec le public, en utilisant un format rapide et impactant.",
          },
          {
            title: "Podcasts (Audio & Vidéos)",
            objective:
              "Partager des extraits marquants et engageants de vos podcasts complets pour attirer vers la version YouTube.",
          },
          {
            title: "News in 1 Min – Afrique de l’Ouest & Centrale (Shorts)",
            objective:
              "Informer de façon rapide et visuelle sur l’actualité régionale.",
          },
          {
            title: "Vibes (Vidéos)",
            objective:
              "Partager l’ambiance, les coulisses et les bons moments pour humaniser la marque.",
          },
          {
            title: "CENIV Tips (Shorts)",
            objective:
              "Donner de la valeur avec de courts conseils applicables immédiatement.",
          },
        ],
      },
    ],
    live: true,
    audience: "Diaspora, étudiants, stagiaires, professionnels",
    features: [
      "YouTube Short, vidéo format YouTube",
      "TikTok short, live",
    ],
    links: [
      {
        name: "YouTube",
        url: "https://www.youtube.com/@CENIV-Diaspora",
        icon: "▶️",
      },
      {
        name: "TikTok",
        url: "http://www.tiktok.com/@cenivdiaspora",
        icon: "🎵",
      },
    ],
  },
  {
    name: "Ceniv Albeta Design",
    platforms: [
      {
        name: "Facebook",
        playlists: [
          {
            title: "Ceniv Albeta Design : Λγσ$",
            objective: "Présentation de nos créations, tutoriels courts (Réels), processus de création, culture & inspiration, interaction avec le public.",
          },
        ],
      },
    ],
    services: [
      "Graphisme",
      "Branding",
      "Web design",
      "Gestion de pages réseaux sociaux",
    ],
    audience:
      "Tout profil ou toute personne désirant créer sa marque, lancer son business.",
    links: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/CenivAlbetaDesign/",
        icon: "📘",
      },
    ],
  },
  {
    name: "Ceniv News",
    platforms: [
      {
        name: "Facebook",
        playlists: [
          {
            title: "Actualités Afrique de l’Ouest & Afrique centrale",
            objective:
              "Actus locales, internationales, communautaires. Photos, extraits vidéos, résumés clairs, liens pour approfondir.",
          },
        ],
      },
    ],
    audience: "Tout profil confondu et concerné.",
    links: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/cenivnews",
        icon: "📘",
      },
    ],
  },
  {
    name: "CENIV Corporate",
    platforms: [
      {
        name: "LinkedIn",
        playlists: [
          {
            title: "CENIV | Design, Digital & Communication",
            objective:
              "Présentation de l’entreprise, promotion des produits & services, partage de contenus & actualités, organisation et développement des relations professionnelles.",
          },
        ],
      },
      {
        name: "Instagram",
        playlists: [
          {
            title: "CENIV Official",
            objective:
              "Contenu visuel, behind-the-scenes, culture d'entreprise, showcase des projets et inspiration créative pour la communauté CENIV.",
          },
        ],
      },
    ],
    audience: "Professionnels, clients, partenaires, communauté créative",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/ceniv-design-digital-communication",
        icon: "💼",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/ceniv_official/",
        icon: "📸",
      },
    ],
  },
];

// Styles supprimés - remplacés par Tailwind CSS

export default function Branch() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  const [selectedBranch, setSelectedBranch] = React.useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Branches & Pages - CENIV</title>
        <meta name="description" content="Découvrez les différentes branches et pages de CENIV, chacune dédiée à un aspect unique de notre écosystème média et créatif." />
        <meta name="keywords" content="CENIV, branches, pages, médias, design, communication, diaspora" />
      </Helmet>
      <Navbar />  

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header avec animation */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold py-4 mb-6 bg-gradient-to-r from-[#D4A373] via-white to-[#D4A373] bg-clip-text text-transparent">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'écosystème complet de <span className="text-[#D4A373] font-semibold">CENIV</span>, 
              chaque branche étant dédiée à un aspect unique de notre univers média et créatif.
            </p>
          </div>

          {/* Grid des branches */}
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {branches.map((branch, idx) => (
              <div
                key={branch.name}
                className={`group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 
                  hover:bg-white/10 hover:border-[#D4A373]/50 transition-all duration-500 cursor-pointer
                  hover:scale-105 hover:shadow-2xl hover:shadow-[#D4A373]/20
                  animate-fade-in-up`}
                style={{ animationDelay: `${idx * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedBranch(selectedBranch === idx ? null : idx)}
              >
                {/* Header de la carte */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#D4A373] group-hover:text-white transition-colors duration-300">
                    {branch.name}
                  </h2>
                  <div className={`w-6 h-6 rounded-full bg-[#D4A373] transform transition-all duration-300
                    ${hoveredCard === idx ? 'scale-125 bg-white' : ''}`} />
                </div>

                {/* Liens sociaux avec animations */}
                {branch.links && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {branch.links.map((link, linkIdx) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/link flex items-center gap-2 px-4 py-2 bg-[#D4A373]/20 
                          hover:bg-[#D4A373] rounded-full text-white hover:text-[#001822] 
                          transition-all duration-300 transform hover:scale-110
                          animate-slide-in-right`}
                        style={{ animationDelay: `${(idx * 0.2) + (linkIdx * 0.1)}s` }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-lg group-hover/link:animate-bounce">
                          {link.icon}
                        </span>
                        <span className="font-medium">{link.name}</span>
                      </a>
                    ))}
                  </div>
                )}

                {/* Contenu expandable */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  selectedBranch === idx ? 'max-h-[2000px] opacity-100' : 'max-h-32 opacity-75'
                }`}>
                  {branch.platforms.map((platform, platformIdx) => (
                    <div key={platform.name} className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#D4A373]" />
                        {platform.name}
                      </h3>
                      <div className="space-y-3">
                        {platform.playlists.map((playlist, playlistIdx) => (
                          <div
                            key={playlist.title}
                            className={`bg-[#D4A373]/10 border-l-4 border-[#D4A373] rounded-r-xl p-4
                              hover:bg-[#D4A373]/20 transition-all duration-300 transform hover:translate-x-2
                              animate-fade-in-left`}
                            style={{ 
                              animationDelay: `${(idx * 0.2) + (platformIdx * 0.1) + (playlistIdx * 0.05)}s` 
                            }}
                          >
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                              <span className="text-[#D4A373]">▶</span>
                              {playlist.title}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              🎯 {playlist.objective}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Informations supplémentaires */}
                  <div className="space-y-4 mt-6">
                    {branch.live && (
                      <div className="flex items-center gap-2 text-red-400 font-semibold">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                        Live disponible
                      </div>
                    )}

                    {branch.services && (
                      <div className="bg-blue-500/10 rounded-xl p-4">
                        <h4 className="font-bold text-blue-300 mb-2">Services :</h4>
                        <div className="flex flex-wrap gap-2">
                          {branch.services.map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm
                                hover:bg-blue-500/30 transition-colors duration-200"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {branch.features && (
                      <div className="bg-green-500/10 rounded-xl p-4">
                        <h4 className="font-bold text-green-300 mb-2">Fonctionnalités :</h4>
                        <ul className="space-y-1">
                          {branch.features.map((feature) => (
                            <li key={feature} className="text-green-200 text-sm flex items-center gap-2">
                              <span className="text-green-400">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {branch.audience && (
                      <div className="bg-purple-500/10 rounded-xl p-4">
                        <h4 className="font-bold text-purple-300 mb-2">Public cible :</h4>
                        <p className="text-purple-200 text-sm italic">{branch.audience}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Indicateur d'expansion */}
                <div className="flex justify-center mt-4">
                  <div className={`w-8 h-8 rounded-full bg-[#D4A373]/20 flex items-center justify-center
                    cursor-pointer hover:bg-[#D4A373]/40 transition-all duration-300
                    ${selectedBranch === idx ? 'rotate-180' : ''}`}>
                    <span className="text-[#D4A373] font-bold">↓</span>
                  </div>
                </div>
              </div>
            ))}
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
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      <Footer />
    </>
  );
}