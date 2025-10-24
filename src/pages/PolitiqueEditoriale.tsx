import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaUsers, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';

export default function PolitiqueEditoriale() {
  return (
    <>
      <Helmet>
        <title>Politique Éditoriale - CENIV</title>
        <meta name="description" content="Politique éditoriale de CENIV - Nos principes, valeurs et standards de qualité" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] text-white">
        {/* Header */}
        <header className="relative py-20">
          <div className="container mx-auto px-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[#D4A373] hover:text-white transition-colors mb-8"
            >
              <FaArrowLeft />
              Retour à l'accueil
            </Link>
            
            <motion.h1
              className="text-4xl md:text-6xl font-serif font-bold text-center mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Politique Éditoriale
            </motion.h1>
            
            <motion.p
              className="text-xl text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Nos principes et engagements pour une information de qualité
            </motion.p>
          </div>
        </header>

        {/* Content */}
        <main className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Mission */}
            <motion.section
              className="bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] border border-[#586102] rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <FaEdit className="text-3xl text-[#D4A373]" />
                <h2 className="text-3xl font-bold text-white">Notre Mission</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  CENIV s'engage à fournir un contenu de qualité, authentique et créatif à travers ses différentes plateformes. 
                  Notre mission est de promouvoir l'innovation, la créativité et l'excellence dans tous nos projets médiatiques.
                </p>
                <p>
                  Nous croyons en la puissance de la communication visuelle et narrative pour inspirer, informer et rassembler 
                  les communautés autour de valeurs partagées.
                </p>
              </div>
            </motion.section>

            {/* Principes éditoriaux */}
            <motion.section
              className="bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] border border-[#586102] rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <FaBalanceScale className="text-3xl text-[#D4A373]" />
                <h2 className="text-3xl font-bold text-white">Nos Principes Éditoriaux</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#D4A373]">Authenticité</h3>
                  <p className="text-gray-300">
                    Tous nos contenus reflètent notre engagement sincère envers nos valeurs et notre vision créative.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#D4A373]">Qualité</h3>
                  <p className="text-gray-300">
                    Nous maintenons les plus hauts standards de production dans tous nos projets audiovisuels et graphiques.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#D4A373]">Innovation</h3>
                  <p className="text-gray-300">
                    Nous explorons constamment de nouvelles approches créatives et technologiques.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#D4A373]">Respect</h3>
                  <p className="text-gray-300">
                    Nous respectons la diversité, l'inclusion et les droits de toutes les personnes représentées.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Standards de contenu */}
            <motion.section
              className="bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] border border-[#586102] rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <FaShieldAlt className="text-3xl text-[#D4A373]" />
                <h2 className="text-3xl font-bold text-white">Standards de Contenu</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#D4A373] mb-3">Processus de Création</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Recherche approfondie et documentation des sujets traités</li>
                    <li>• Vérification des sources et validation des informations</li>
                    <li>• Révision et édition par notre équipe qualifiée</li>
                    <li>• Test et validation avant publication</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#D4A373] mb-3">Critères de Publication</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Pertinence et valeur ajoutée pour notre audience</li>
                    <li>• Conformité avec nos valeurs et notre ligne éditoriale</li>
                    <li>• Qualité technique et esthétique irréprochable</li>
                    <li>• Respect des droits d'auteur et de la propriété intellectuelle</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Équipe et gouvernance */}
            <motion.section
              className="bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] border border-[#586102] rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <FaUsers className="text-3xl text-[#D4A373]" />
                <h2 className="text-3xl font-bold text-white">Équipe et Gouvernance</h2>
              </div>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-[#D4A373] mb-3">Responsabilités Éditoriales</h3>
                  <p>
                    Notre équipe éditoriale est composée de professionnels expérimentés dans les domaines du design, 
                    de l'audiovisuel et de la communication. Chaque membre contribue à maintenir la cohérence et 
                    la qualité de notre ligne éditoriale.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#D4A373] mb-3">Processus de Révision</h3>
                  <p>
                    Tous les contenus passent par un processus de révision rigoureux impliquant multiple niveaux 
                    de validation. Nous nous réservons le droit de modifier, corriger ou retirer tout contenu 
                    qui ne respecterait pas nos standards.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Contact éditorial */}
            <motion.section
              className="bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] border border-[#586102] rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-[#D4A373] mb-4">Contact Éditorial</h2>
              <div className="text-gray-300 space-y-2">
                <p>
                  Pour toute question concernant notre politique éditoriale ou pour signaler un contenu :
                </p>
                <p>
                  <strong>Email :</strong> <a href="mailto:editorial@ceniv.com" className="text-[#D4A373] hover:text-white transition-colors">editorial@ceniv.com</a>
                </p>
                <p className="text-sm text-gray-400 mt-6">
                  Cette politique éditoriale est susceptible d'évoluer. Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </motion.section>

          </div>
        </main>
      </div>
    </>
  );
}