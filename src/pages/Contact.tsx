import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence } from "framer-motion";

// Déclaration TypeScript pour Google Analytics
declare const gtag: (command: string, action: string, parameters?: Record<string, unknown>) => void;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (): ValidationErrors => {
    const newErrors: ValidationErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur du champ modifié
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation du formulaire
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length > 0) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Configuration EmailJS - À remplacer par vos vraies clés
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Préparer les données pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'cenivxpert.mk96@outlook.com', // Votre email CENIV
      };

      // Envoyer l'email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Tracking Google Analytics (optionnel)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          'event_category': 'contact',
          'event_label': formData.subject,
          'value': 1
        });
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = {
    email: "cenivxpert.mk96@outlook.com",
    phone: "+212 601 058 129",
    address: "Marrakech, Maroc",
    website: "https://ceniv.vercel.app",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/company/ceniv-design-digital-communication", icon: "💼" },
      { name: "Instagram", url: "https://www.instagram.com/ceniv_official/", icon: "📸" },
      { name: "Facebook Design", url: "https://www.facebook.com/CenivAlbetaDesign/", icon: "🎨" },
      { name: "YouTube", url: "https://www.youtube.com/@CENIV-Diaspora", icon: "▶️" },
      { name: "TikTok", url: "http://www.tiktok.com/@cenivdiaspora", icon: "🎵" }
    ]
  };

  const services = [
    { name: "Design Graphique", icon: "🎨", description: "Logo, identité visuelle, branding" },
    { name: "Web Design", icon: "💻", description: "Sites web, applications, UI/UX" },
    { name: "Communication", icon: "📢", description: "Stratégie, réseaux sociaux, content" },
    { name: "Audiovisuel", icon: "🎬", description: "Vidéos, podcasts, montage" }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - CENIV</title>
        <meta name="description" content="Contactez CENIV pour vos projets de design, communication digitale et création de contenu. Devis gratuit disponible." />
        <meta name="keywords" content="CENIV, contact, devis, design, communication digitale, Marrakech" />
      </Helmet>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] text-white">
        <div className="container mx-auto px-4 py-20">
          
          {/* Header Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
              <span className="text-2xl">✉️</span>
              <span className="text-[#D4A373] font-semibold">Contact</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold py-4 mb-6 bg-gradient-to-r from-[#D4A373] via-white to-[#D4A373] bg-clip-text text-transparent">
              Contactez-Nous
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Prêt à donner vie à vos projets ? <span className="text-[#D4A373] font-semibold">CENIV</span> est là pour vous accompagner 
              dans votre transformation digitale et créative.
            </p>
          </div>

          {/* Services rapides */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#D4A373]/50 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#D4A373] mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Formulaire de contact */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#D4A373] mb-8">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#D4A373] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#D4A373] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-[#D4A373] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 transition-all"
                  >
                    <option value="" className="bg-[#001822]">Choisir un sujet</option>
                    <option value="design" className="bg-[#001822]">Design & Branding</option>
                    <option value="web" className="bg-[#001822]">Développement Web</option>
                    <option value="communication" className="bg-[#001822]">Communication Digitale</option>
                    <option value="audiovisuel" className="bg-[#001822]">Audiovisuel & Média</option>
                    <option value="partenariat" className="bg-[#001822]">Partenariat</option>
                    <option value="autre" className="bg-[#001822]">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#D4A373] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 transition-all resize-none"
                    placeholder="Décrivez votre projet en détail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e48a1f] text-[#001822] font-bold py-4 px-6 rounded-xl hover:bg-[#ba4b0bce]/90 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#001822]"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <span>🚀</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-300"
                  >
                    ✅ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-300"
                  >
                    ❌ Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
                  </motion.div>
                )}

                {/* popup */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
                    >
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#001f2b] border border-[#D4A373]/40 rounded-3xl p-8 shadow-2xl text-center max-w-sm mx-auto"
                      >
                        <div className="text-6xl mb-4 animate-bounce">✅</div>
                        <h3 className="text-2xl font-bold text-[#D4A373] mb-2">Message envoyé !</h3>
                        <p className="text-gray-300 mb-6">
                          Merci de nous avoir contactés. Notre équipe vous répondra sous 24h.
                        </p>
                        <button
                          onClick={() => setSubmitStatus('idle')}
                          className="mt-4 px-6 py-3 rounded-xl bg-[#D4A373] text-[#001822] font-semibold hover:bg-[#e6b87b] transition-colors"
                        >
                          Fermer
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* fin popup */}

              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Coordonnées */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-[#D4A373] mb-6">Nos Coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <p className="text-[#D4A373] font-semibold">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-[#D4A373] transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="text-2xl">📱</div>
                    <div>
                      <p className="text-[#D4A373] font-semibold">Téléphone</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-[#D4A373] transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="text-2xl">📍</div>
                    <div>
                      <p className="text-[#D4A373] font-semibold">Localisation</p>
                      <p className="text-white">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
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
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-[#D4A373] mb-6">Suivez-nous</h3>
                <div className="grid grid-cols-1 gap-3">
                  {contactInfo.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-4 bg-[#D4A373]/10 rounded-xl hover:bg-[#D4A373] hover:text-[#001822] transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-xl group-hover:animate-bounce">{social.icon}</span>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-[#D4A373] mb-6">Disponibilités</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Lundi - Vendredi</span>
                    <span className="text-white font-semibold">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Samedi</span>
                    <span className="text-white font-semibold">10h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Dimanche</span>
                    <span className="text-red-300">Fermé</span>
                  </div>
                  <div className="mt-4 p-3 bg-[#D4A373]/10 rounded-xl">
                    <p className="text-sm text-[#D4A373]">
                      💡 Réponse garantie sous 24h les jours ouvrables
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
}