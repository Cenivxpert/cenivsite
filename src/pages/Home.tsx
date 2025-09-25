// src/pages/Home.tsx

import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>CENIV - Accueil</title>
        <meta name="description" content="Découvrez CENIV, une entité média et créative dédié à la diaspora." />
        <meta name="keywords" content="CENIV, diaspora, média, design, communication" />
      </Helmet>

      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">CENIV</h1>
        <p className="text-lg mb-6">Une entité média et créative dédié à la diaspora.</p>
        <a href="/about" className="text-blue-500 hover:underline">En savoir plus</a>
      </div>
    </>
  );
}