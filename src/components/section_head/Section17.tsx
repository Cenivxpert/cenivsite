// src/components/section_head/Section17.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

// Déclaration TypeScript pour Google Analytics
declare const gtag: (command: string, action: string, parameters?: Record<string, unknown>) => void;

interface FormData {
  name: string;
  email: string;
}

export default function Section17() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Configuration EmailJS - même que dans Contact.tsx
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Préparer les données pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: 'Demande de contact - Parlons Affaires',
        message: `Nouvelle demande de contact rapide via la section "Parlons Affaires".\n\nNom: ${formData.name}\nEmail: ${formData.email}`,
        to_email: 'cenivxpert.mk96@outlook.com',
      };

      // Envoyer l'email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Tracking Google Analytics (optionnel)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          'event_category': 'contact_quick',
          'event_label': 'parlons_affaires',
          'value': 1
        });
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-16 md:py-24 flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-20 w-full container mx-auto px-4">
        <div className="row">
          <div className="col-12">
            <div className="content-wrapper relative flex justify-center items-center rounded-[1000px] border border-[#586102] overflow-hidden py-[100px] md:py-[100px] px-4 md:px-0 bg-transparent"
              style={{ minHeight: "500px" }}>
              {/* Image de fond */}
              <div className="image-wrapper absolute inset-0 w-full h-full">
                <img
                  src="/assets/image/parlonsaffaire.jpg"
                  alt="Mobirise"
                  className="w-full h-full object-cover absolute top-0 left-0"
                  style={{ zIndex: 0 }}
                />
                {/* Overlay sur l'image */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: "#0018227a",
                    opacity: 0.9,
                    zIndex: 1
                  }}
                ></div>
              </div>
              {/* Contenu */}
              <div className="content-wrap relative z-10 w-1/2 md:w-1/2 px-4 ">
                <div className="title-wrapper mb-8">
                  <motion.h2
                    className="mbr-section-title font-serif text-white text-3xl md:text-5xl font-bold mb-6 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    Parlons Affaires
                  </motion.h2>
                  <div className="text-wrapper">
                    <motion.p
                      className="mbr-text font-serif text-white text-lg md:text-2xl text-center mb-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                    >
                      Envoyez-nous un message, nous vous contacterons dans les plus brefs délais.
                    </motion.p>
                  </div>
                </div>
                {/* Formulaire */}
                <form
                  onSubmit={handleSubmit}
                  className="form-wrapper w-full mt-6"
                  autoComplete="off"
                >
                  <div className="dragArea row flex flex-col gap-4">
                    <div className="form-group mb-3 w-full">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nom"
                        className="form-control w-full px-4 py-3 rounded-lg border border-white bg-transparent text-white text-lg placeholder:text-white/70 focus:border-[#D4A373] transition"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="form-group mb-3 w-full">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="form-control w-full px-4 py-3 rounded-lg border border-white bg-transparent text-white text-lg placeholder:text-white/70 focus:border-[#D4A373] transition"
                        autoComplete="off"
                        required
                      />
                    </div>
                    
                    {/* Messages de statut */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 text-green-200 text-center"
                      >
                        ✅ Message envoyé avec succès ! Nous vous contacterons bientôt.
                      </motion.div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 text-red-200 text-center"
                      >
                        ❌ Erreur lors de l'envoi. Veuillez réessayer.
                      </motion.div>
                    )}
                    
                    <div className="mbr-section-btn w-full mt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn btn-primary w-full px-8 py-4 rounded-full font-semibold shadow-lg transition ${
                          isSubmitting 
                            ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                            : 'bg-[#D4A373] text-[#1D2200] hover:bg-[#ba4b0bce]'
                        }`}
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        /* Tablette uniquement */
        @media (min-width: 768px) and (max-width: 992px) {
          .content-wrapper { border-radius: 32px !important; padding: 24px !important; }
          .content-wrap { width: 100% !important; }
        }
        
        /* Mobile spécifique */
        @media (max-width: 767px) {
          .content-wrapper { border-radius: 24px !important; padding: 16px !important; }
          .content-wrap { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}