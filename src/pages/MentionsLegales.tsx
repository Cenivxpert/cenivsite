import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - CENIV</title>
        <meta name="description" content="Mentions légales de CENIV - Informations juridiques et légales" />
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
              className="text-4xl md:text-6xl font-serif font-bold text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Mentions Légales
            </motion.h1>
          </div>
        </header>

        {/* Content */}
        <main className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] border border-[#586102] rounded-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-[#D4A373] mb-6">Informations légales</h2>
                
                <h3 className="text-xl font-semibold text-white mb-4">Éditeur du site</h3>
                <p className="mb-6 leading-relaxed">
                  <strong>CENIV</strong><br />
                  Entité média et créative<br />
                  Siège social : [Adresse à compléter]<br />
                  Téléphone : [Numéro à compléter]<br />
                  Email : contact@ceniv.com
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">Directeur de publication</h3>
                <p className="mb-6 leading-relaxed">
                  [Nom du directeur de publication à compléter]
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">Hébergement</h3>
                <p className="mb-6 leading-relaxed">
                  Site hébergé par Vercel Inc.<br />
                  340 S Lemon Ave #4133<br />
                  Walnut, CA 91789<br />
                  États-Unis
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">Propriété intellectuelle</h3>
                <p className="mb-6 leading-relaxed">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">Données personnelles</h3>
                <p className="mb-6 leading-relaxed">
                  CENIV s'engage à respecter la confidentialité des informations fournies par les utilisateurs. 
                  Les données collectées sont utilisées uniquement dans le cadre des services proposés et ne sont jamais transmises à des tiers.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">Cookies</h3>
                <p className="mb-6 leading-relaxed">
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                  Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
                <p className="mb-0 leading-relaxed">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter à :<br />
                  <strong>contact@ceniv.com</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}