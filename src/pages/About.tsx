// src/pages/About.tsx

import { Helmet } from 'react-helmet';


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CENIV",
  "url": "https://www.ceniv.example",
  "logo": "https://www.ceniv.example/assets/ceniv-logo.svg",
  "sameAs": [
    "https://www.youtube.com/@CENIVTV",
    "https://www.tiktok.com/@cenivdiaspora",
    "https://www.facebook.com/cenivnews",
    "https://www.linkedin.com/company/ceniv"
  ],
  "founder": [
    {"@type": "Person", "name": "Nalimo Gongo Prince Dieu Merci"},
    {"@type": "Person", "name": "Azane Christian Serge"}
  ],
  "foundingDate": "2025-03-10",
  "description": "CENIV est une entité média et créative dédiée à la communication digitale et visuelle."
}

export default function About() {
  return (
    <>
    
    <Helmet>
      <title>À propos de CENIV</title>
      <meta name="description" content="Découvrez CENIV, une entité média et créative dédié à la diaspora." />
      <meta name="keywords" content="CENIV, diaspora, média, design, communication" />
    </Helmet>
    
    <section>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

        <h1 className="text-3xl font-bold mb-4">À propos de CENIV</h1>
        <p className="mb-4">Fondé le 10 mars 2025 à Marrakech (Maroc), CENIV est un écosystème média et créatif ...</p>

        <h2 className="text-xl font-semibold mt-6">Mission</h2>
        <p>Propulser les marques vers le succès grâce à une communication visuelle et digitale puissante.</p>

        <h2 className="text-xl font-semibold mt-6">Valeurs</h2>
        <ul className="list-disc ml-6">
          <li>Création</li>
          <li>Motivation</li>
          <li>Innovation</li>
        </ul>
      </section>
      
    </>
  )
}