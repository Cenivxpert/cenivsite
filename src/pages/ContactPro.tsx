import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const contacts = [
  {
    department: "Direction Générale",
    name: "Équipe CENIV",
    email: "direction@ceniv.com",
    phone: "+33 (0)1 XX XX XX XX",
    description: "Pour les partenariats stratégiques et collaborations"
  },
  {
    department: "CENIV TV",
    name: "Production Audiovisuelle",
    email: "tv@ceniv.com", 
    phone: "+33 (0)1 XX XX XX XX",
    description: "Projets vidéo, documentaires et contenus audiovisuels"
  },
  {
    department: "Ceniv Alberta Design",
    name: "Studio Créatif",
    email: "design@ceniv.com",
    phone: "+33 (0)1 XX XX XX XX", 
    description: "Identité visuelle, branding et design graphique"
  },
  {
    department: "Ceniv News",
    name: "Rédaction",
    email: "news@ceniv.com",
    phone: "+33 (0)1 XX XX XX XX",
    description: "Couverture médiatique et relations presse"
  }
];

export default function ContactPro() {
  return (
    <>
      <Helmet>
        <title>Contact Professionnel - CENIV</title>
        <meta name="description" content="Contacts professionnels CENIV - Partenariats, collaborations et projets" />
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
              Contact Professionnel
            </motion.h1>
            
            <motion.p
              className="text-xl text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Collaborons ensemble sur vos projets créatifs et médiatiques
            </motion.p>
          </div>
        </header>

        {/* Contacts Grid */}
        <main className="container mx-auto px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {contacts.map((contact, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] border border-[#586102] rounded-xl p-8 hover:border-[#D4A373] transition-colors duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 * idx }}
                >
                  <h3 className="text-2xl font-bold text-[#D4A373] mb-2">{contact.department}</h3>
                  <h4 className="text-xl font-semibold text-white mb-4">{contact.name}</h4>
                  <p className="text-gray-300 mb-6">{contact.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-[#D4A373]" />
                      <a href={`mailto:${contact.email}`} className="text-white hover:text-[#D4A373] transition-colors">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-[#D4A373]" />
                      <a href={`tel:${contact.phone}`} className="text-white hover:text-[#D4A373] transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Informations générales */}
            <motion.div
              className="bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] border border-[#586102] rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-[#D4A373] mb-6">Informations générales</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[#D4A373]" />
                    Adresse
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    CENIV<br />
                    [Adresse complète à compléter]<br />
                    [Code postal] [Ville]<br />
                    France
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <FaLinkedin className="text-[#D4A373]" />
                    Réseaux professionnels
                  </h4>
                  <div className="space-y-2">
                    <a 
                      href="https://www.linkedin.com/company/ceniv-design-digital-communication" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-white hover:text-[#D4A373] transition-colors"
                    >
                      LinkedIn - Design & Communication
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-[#586102]">
                <h4 className="text-xl font-semibold text-white mb-4">Horaires d'ouverture</h4>
                <p className="text-gray-300">
                  Lundi - Vendredi : 9h00 - 18h00<br />
                  Samedi : 10h00 - 16h00<br />
                  Dimanche : Fermé
                </p>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}