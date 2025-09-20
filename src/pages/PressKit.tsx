// src/pages/PressKit.tsx

import { Helmet } from 'react-helmet';

export default function PressKit() {
  // Note : Les logos (Ceniv Black, Ceniv White, Ceniv-removebg white, Ceniv-removebg black) sont également disponibles dans le fichier CENIV_PressKit.pdf pour une consultation complète.
  return (
    <>
      <Helmet>
        <title>Dossier de presse - CENIV</title>
        <meta name="description" content="Téléchargez le dossier de presse de CENIV, incluant le communiqué, les logos, et les bios des fondateurs." />
        <meta name="keywords" content="CENIV, dossier de presse, communiqué, logos, bios fondateurs, média, design, communication" />
      </Helmet>

    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Dossier de presse - CENIV</h1>
      <p className="mb-4">
        Bienvenue dans le dossier de presse de CENIV, une entité média et créative dédiée à la communication digitale et visuelle pour la diaspora. 
        Fondé le 10 mars 2025 à Marrakech, CENIV propulse les marques grâce à des solutions innovantes.
      </p>

      <h2 className="text-xl font-semibold mt-6">Ressources disponibles</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <a href="/press/CENIV_PressKit.pdf" className="text-blue-500 hover:underline" download>
            Télécharger le communiqué de presse (PDF)
          </a>
        </li>
        <li>
          <a href="/press/boilerplate.txt" className="text-blue-500 hover:underline">
            Lire le texte standard (Boilerplate)
          </a>
        </li>
        <li>
          <a href="/press/Ceniv Black.png" className="text-blue-500 hover:underline" >
            Voir l'image du logo couleur black (PNG)
          </a>
        </li>
        <li>
          <a href="/press/Ceniv White.png" className="text-blue-500 hover:underline" >
            Voir l'image du logo couleur white (PNG)
          </a>
        </li>
        <li>
          <a href="/press/Ceniv-removebg white.svg" className="text-blue-500 hover:underline" >
            Voir l'image du logo white (SVG)
          </a>
        </li>
        <li>
          <a href="/press/Ceniv-removebg black.svg" className="text-blue-500 hover:underline" >
            Voir l'image du logo black (SVG)
          </a>
        </li>
        <li>
          <a href="/assets/image/press-kit-image.png" className="text-blue-500 hover:underline">
            Voir l'image de promotion
          </a>
        </li>
        <li>
          <a href="/press/founders_bios.pdf" className="text-blue-500 hover:underline" download>
            Télécharger les bios des fondateurs (PDF)
          </a>
        </li>
        <li>
          <a href="/photos-gallery" className="text-blue-500 hover:underline">
            Voir les photos et vidéos HD (team, Vibes, behind the scenes)
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Contact presse</h2>
      <p>
        Pour plus d'informations, veuillez contacter : <br />
        Email : cenivxpert.mk96@outlook.com <br />
        Téléphone : +212 601 058 129 <br />
        Adresse : Marrakech, Maroc <br />
        Site web : <a href="https://ceniv.com" className="text-blue-500 hover:underline">https://ceniv.com</a> <br />
        Réseaux sociaux : <a href="https://twitter.com/ceniv" className="text-blue-500 hover:underline">Twitter</a>, <a href="https://linkedin.com/company/ceniv" className="text-blue-500 hover:underline">LinkedIn</a> <br />
      </p>
    </section>
  </>
  );
}