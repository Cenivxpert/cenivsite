// src/pages/Branch.tsx
import React from "react";
import { Helmet } from 'react-helmet';

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
        url: "https://www.facebook.com/CenivNews",
        icon: "📘",
      },
    ],
  },
  {
    name: "LinkedIn",
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
    ],
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/ceniv-design-digital-communication/",
        icon: "💼",
      },
    ],
  },
];

// Simple fade-in animation
const fadeInStyle: React.CSSProperties = {
  animation: "fadeIn 1s",
};

const responsiveContainer: React.CSSProperties = {
  maxWidth: 900,
  margin: "2rem auto",
  padding: "1rem",
  borderRadius: 12,
  background: "#fff",
  boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
};

const branchCard: React.CSSProperties = {
  margin: "1.5rem 0",
  padding: "1rem",
  borderRadius: 8,
  background: "#f7f8fa",
  boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
  transition: "transform 0.2s",
};

const playlistStyle: React.CSSProperties = {
  margin: "0.5rem 0",
  padding: "0.5rem",
  borderLeft: "4px solid #0077ff",
  background: "#eef6ff",
  borderRadius: 6,
};

const linkStyle: React.CSSProperties = {
  display: "inline-block",
  marginRight: 12,
  fontSize: "1.2rem",
  textDecoration: "none",
  color: "#0077ff",
};

export default function Branch() {
  return (
  <>
    <Helmet>
      <title>Branches & Pages - CENIV</title>
      <meta name="description" content="Découvrez les différentes branches et pages de CENIV, chacune dédiée à un aspect unique de notre écosystème média et créatif." />
      <meta name="keywords" content="CENIV, branches, pages, médias, design, communication, diaspora" />
    </Helmet>

    <div style={responsiveContainer}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @media (max-width: 600px) {
            .branch-card { padding: 0.5rem; }
            .playlist { font-size: 0.95rem; }
          }
        `}
      </style>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Branches & Pages CENIV</h1>
      {branches.map((branch, idx) => (
        <div
          key={branch.name}
          className="branch-card"
          style={{ ...branchCard, ...fadeInStyle, animationDelay: `${idx * 0.2}s` }}
        >
          <h2 style={{ color: "#0077ff" }}>{branch.name}</h2>
          {branch.links && (
            <div style={{ marginBottom: "0.5rem" }}>
              {branch.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  title={link.name}
                >
                  <span style={{ marginRight: 4 }}>{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>
          )}
          {branch.platforms.map((platform) => (
            <div key={platform.name}>
              <h3 style={{ marginTop: "1rem" }}>{platform.name}</h3>
              {platform.playlists.map((pl) => (
                <div key={pl.title} className="playlist" style={playlistStyle}>
                  <strong>{pl.title}</strong>
                  <div style={{ marginTop: 4, color: "#444" }}>
                    <span role="img" aria-label="objectif">
                      🎯
                    </span>{" "}
                    {pl.objective}
                  </div>
                </div>
              ))}
            </div>
          ))}
          {branch.live && (
            <div style={{ marginTop: "1rem", color: "#e91e63" }}>
              <strong>Live disponible</strong>
            </div>
          )}
          {branch.features && (
            <ul style={{ marginTop: "0.5rem", color: "#555", fontSize: "0.98rem" }}>
              {branch.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}
          {branch.services && (
            <div style={{ marginTop: "0.5rem" }}>
              <strong>Services :</strong>{" "}
              {branch.services.join(", ")}
            </div>
          )}
          {branch.audience && (
            <div style={{ marginTop: "0.5rem", fontStyle: "italic", color: "#666" }}>
              <strong>Public cible :</strong> {branch.audience}
            </div>
          )}
        </div>
      ))}
    </div>
  </>
  );
}