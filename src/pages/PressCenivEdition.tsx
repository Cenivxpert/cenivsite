import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const pressArticle = {
  path: '/press/ceniv-edition-marrakech',
  title: 'Ceniv Édition : des guides pour préparer un séjour à Marrakech',
  description: 'Choisir son quartier, prévoir son budget et organiser ses journées avec les articles gratuits et les extraits de Ceniv Édition.',
};

const edition = 'https://ceniv-editions.cenivxpert.com';

export default function PressCenivEdition() {
  return (
    <>
      <Helmet>
        <title>{pressArticle.title} | CENIV</title>
        <meta name="description" content={pressArticle.description} />
        <link rel="canonical" href={`https://cenivxpert.com${pressArticle.path}`} />
      </Helmet>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-28 text-gray-100 sm:px-6">
        <Link to="/press" className="text-[#D4A373] underline underline-offset-4">Retour à l’espace Presse</Link>
        <article className="mt-8 space-y-6">
          <h1 className="text-3xl font-bold sm:text-5xl">{pressArticle.title}</h1>
          <p className="text-lg leading-relaxed text-gray-300">Ceniv Édition est la branche éditoriale de CENIV. Sa collection Marrakech réunit des guides numériques illustrés en français et en anglais, accompagnés de conseils gratuits pour préparer son séjour.</p>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Choisir où dormir avant de tracer son itinéraire</h2>
            <p className="leading-relaxed text-gray-300">Pour un premier séjour, le quartier choisi influence les déplacements et le déroulement de la journée. Comparez la Médina et Guéliz selon votre heure d’arrivée, les visites qui vous intéressent et vos habitudes de déplacement. Un itinéraire de trois jours permet ensuite de répartir les visites et de garder du temps pour les pauses.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><a className="text-[#D4A373] underline underline-offset-4" href={`${edition}/marrakech/conseils/medina-ou-gueliz/`}>Comparer la Médina et Guéliz</a></li>
              <li><a className="text-[#D4A373] underline underline-offset-4" href={`${edition}/marrakech/conseils/marrakech-en-3-jours/`}>Préparer trois jours à Marrakech</a></li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Comparer les dépenses sur une même base</h2>
            <p className="leading-relaxed text-gray-300">Pour établir le budget, séparez les dépenses partagées, comme la chambre, des dépenses individuelles, comme certaines entrées. Pour une excursion, comparez ce que chaque offre inclut avant de comparer les prix.</p>
            <a className="text-[#D4A373] underline underline-offset-4" href={`${edition}/marrakech/conseils/budget-sejour-marrakech/`}>Préparer son budget à Marrakech</a>
          </section>

          <p><a className="text-[#D4A373] underline underline-offset-4" href={`${edition}/collections/travel/`}>Découvrir la collection Marrakech et ses extraits gratuits</a></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
