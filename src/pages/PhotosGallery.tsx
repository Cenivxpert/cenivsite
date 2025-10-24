// src/pages/PhotosGallery.tsx

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Styles du carousel
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Styles de la lightbox
import Video from 'yet-another-react-lightbox/plugins/video';
import type { Slide } from 'yet-another-react-lightbox'; // Import du type Slide

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PhotosGallery() {
  // Liste des fichiers (basée sur votre dir photos-video-hd)
  const media = [
    { name: 'Ceniv-&-Centrafric-Community.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-&-Centrafric-Community.jpg' },
    { name: 'Ceniv-coding.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-coding.jpg' },
    { name: 'Ceniv-Founder-1-work-1.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-Founder-1-work-1.jpg' },
    { name: 'Ceniv-Founder-1-work-2.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-Founder-1-work-2.jpg' },
    { name: 'Ceniv-Founder-1-work-3.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-Founder-1-work-3.jpg' },
    { name: 'Ceniv-Founder-1-work-4.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-Founder-1-work-4.jpg' },
    { name: 'Ceniv-Founder-1-work-5.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-Founder-1-work-5.jpg' },
    { name: 'Ceniv-Founder-1-work-7.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-Founder-1-work-7.jpg' },
    { name: 'Ceniv-Founder-1-work.MOV', type: 'video', src: '/press/photos-video-hd/Ceniv-Founder-1-work.MOV' },
    { name: 'Ceniv-founder-1.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-founder-1.jpg' },
    { name: 'Ceniv-Founder-2-pro.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-Founder-2-pro.jpg' },
    { name: 'Ceniv-Founder-2.jpeg', type: 'image', src: '/press/photos-video-hd/Ceniv-Founder-2.jpeg' },
    { name: 'Ceniv-founder1-work.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-founder1-work.jpg' },
    { name: 'Ceniv-Founders easy.jpeg', type: 'image', src: '/press/photos-video-hd/Ceniv-Founders easy.jpeg' },
    { name: 'Ceniv-Founders-2-vibes.jpeg', type: 'image', src: '/press/photos-video-hd/Ceniv-Founders-2-vibes.jpeg' },
    { name: 'Ceniv-Founders.jpeg', type: 'image', src: '/press/photos-video-hd/Ceniv-Founders.jpeg' },
    { name: 'Ceniv-vacance.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-vacance.jpg' },
    { name: 'Ceniv-Vibes.jpg', type: 'image', src: '/press/photos-video-hd/Ceniv-Vibes.jpg' },
    { name: 'Studio-Ceniv-1-work.mp4', type: 'video', src: '/press/photos-video-hd/Studio-Ceniv-1-work.mp4' },
    { name: 'Studio-Ceniv-1.jpg', type: 'image', src: '/press/photos-video-hd/Studio-Ceniv-1.jpg' },
    { name: 'Studio-Ceniv-1.mp4', type: 'video', src: '/press/photos-video-hd/Studio-Ceniv-1.mp4' },
    { name: 'Studio-Ceniv-2-Goodies.jpg', type: 'image', src: '/press/photos-video-hd/Studio-Ceniv-2-Goodies.jpg' },
    { name: 'Studio-Ceniv-2-Set.MP4', type: 'video', src: '/press/photos-video-hd/Studio-Ceniv-2-Set.MP4' },
    { name: 'Studio-Ceniv-2-work.MP4', type: 'video', src: '/press/photos-video-hd/Studio-Ceniv-2-work.MP4' },
    { name: 'Studio-Ceniv-2.MP4', type: 'video', src: '/press/photos-video-hd/Studio-Ceniv-2.MP4' },
    { name: 'Teasing 1 is coming...Cenv TV.mp4', type: 'video', src: '/press/photos-video-hd/Teasing 1 is coming...Cenv TV.mp4' },
    { name: 'Teasing 2 Ceniv TV TK.mp4', type: 'video', src: '/press/photos-video-hd/Teasing 2 Ceniv TV TK.mp4' },
    { name: 'Teasing 3 is coming soon...Ceniv TV YTB et TK.mp4', type: 'video', src: '/press/photos-video-hd/Teasing 3 is coming soon...Ceniv TV YTB et TK.mp4' },
  ];

  // État pour la lightbox (uniquement pour images)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // État pour la lightbox vidéo
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  // Préparer listes d'images et vidéos
  const imagesOnly = media.filter((m) => m.type === "image");
  const videosOnly = media.filter((m) => m.type === "video");

  // helper pour mime-type vidéo
  const getVideoMime = (src: string) => {
    const s = src.toLowerCase();
    if (s.endsWith(".mp4")) return "video/mp4";
    if (s.endsWith(".mov")) return "video/quicktime";
    return "video/mp4";
  };

  // slides images (typed)
  const slides: Slide[] = imagesOnly.map((item) => ({
    src: encodeURI(item.src),
    title: item.name,
  }));

  // Définir le type pour les slides vidéo
  type VideoSlide = {
    src: string;
    title: string;
    type: "video";
    sources: { src: string; type: string }[];
  };

  // slides vidéos (typed)
  const videoSlides: VideoSlide[] = videosOnly.map((item) => ({
    src: encodeURI(item.src),
    title: item.name,
    type: "video",
    sources: [{ src: encodeURI(item.src), type: getVideoMime(item.src) }],
  }));

  return (
    <>
      <Helmet>
        <title>Photos et Vidéos HD - CENIV</title>
        <meta name="description" content="Téléchargez des photos et vidéos HD de l'équipe CENIV, des coulisses, et plus encore." />
        <meta name="keywords" content="CENIV, photos HD, vidéos HD, équipe, coulisses, média, design, communication" />
      </Helmet>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] text-white">
        <div className="container mx-auto px-4 py-20">
          
          {/* Header Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
              <span className="text-2xl">📸</span>
              <span className="text-[#D4A373] font-semibold">Galerie Média</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold py-4 mb-6 bg-gradient-to-r from-[#D4A373] via-white to-[#D4A373] bg-clip-text text-transparent">
              Photos & Vidéos HD
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explorez l'univers <span className="text-[#D4A373] font-semibold">CENIV</span> à travers notre collection exclusive 
              de photos et vidéos haute définition
            </p>
          </div>

          {/* Featured Carousel */}
          <div className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#D4A373]">À la Une</h2>
            <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-4 border border-white/10">
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={4000}
                showStatus={false}
                className="featured-carousel"
              >
                {imagesOnly.slice(0, 5).map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => {
                      setSelectedIndex(index);
                      setIsOpen(true);
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={item.src}
                        alt={item.name}
                        className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{item.name.replace(/\.(jpg|jpeg|png)$/i, '')}</h3>
                        <p className="text-gray-300">Cliquez pour agrandir</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Carousel>
            </div>
          </div>

          {/* Photos Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#D4A373]">Collection Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {media.filter(item => item.type === 'image' && !imagesOnly.slice(0, 5).includes(item)).map((item, index) => {
                const imgIndex = imagesOnly.indexOf(item);
                return (
                  <motion.div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-[#D4A373]/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onClick={() => {
                      setSelectedIndex(imgIndex);
                      setIsOpen(true);
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.src} 
                        alt={item.name} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 bg-[#D4A373]/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm">🔍</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold truncate group-hover:text-[#D4A373] transition-colors">
                        {item.name.replace(/\.(jpg|jpeg|png)$/i, '')}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">Photo HD</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Videos Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#D4A373]">Collection Vidéos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videosOnly.map((item, index) => {
                const vidIndex = videosOnly.indexOf(item);
                return (
                  <motion.div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-[#D4A373]/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onClick={() => {
                      setSelectedVideoIndex(vidIndex);
                      setIsVideoOpen(true);
                    }}
                  >
                    <div className="relative">
                      <video 
                        ref={(videoRef) => {
                          if (videoRef) {
                            const handleMouseEnter = () => {
                              videoRef.currentTime = 0;
                              videoRef.play().catch(() => {});
                            };
                            const handleMouseLeave = () => {
                              videoRef.pause();
                              videoRef.currentTime = 0;
                            };
                            
                            const parent = videoRef.closest('.group');
                            if (parent) {
                              parent.addEventListener('mouseenter', handleMouseEnter);
                              parent.addEventListener('mouseleave', handleMouseLeave);
                            }
                          }
                        }}
                        className="w-full h-64 object-cover rounded-t-2xl"
                        muted
                        preload="metadata"
                        loop
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-[#D4A373]/80 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <span className="text-white text-2xl">▶️</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold truncate group-hover:text-[#D4A373] transition-colors">
                        {item.name.replace(/\.(mp4|mov|MP4|MOV)$/i, '')}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">Vidéo HD</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lightbox (images) */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={selectedIndex}
        />

        {/* Lightbox (vidéos) */}
        <Lightbox
          open={isVideoOpen}
          close={() => setIsVideoOpen(false)}
          slides={videoSlides}
          index={selectedVideoIndex}
          plugins={[Video]}
        />

        {/* CSS personnalisé pour les animations et styles */}
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
          
          .featured-carousel .carousel .slide {
            background: transparent;
          }
          
          .featured-carousel .carousel .control-dots {
            bottom: -50px;
          }
          
          .featured-carousel .carousel .control-dots .dot {
            background: rgba(212, 163, 115, 0.5);
            box-shadow: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin: 0 8px;
            transition: all 0.3s ease;
          }
          
          .featured-carousel .carousel .control-dots .dot.selected {
            background: #D4A373;
            transform: scale(1.2);
          }
          
          .featured-carousel .carousel .control-prev,
          .featured-carousel .carousel .control-next {
            background: rgba(212, 163, 115, 0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(212, 163, 115, 0.3);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            top: 50%;
            transform: translateY(-50%);
            transition: all 0.3s ease;
          }
          
          .featured-carousel .carousel .control-prev:hover,
          .featured-carousel .carousel .control-next:hover {
            background: rgba(212, 163, 115, 0.4);
            border-color: #D4A373;
          }
          
          .featured-carousel .carousel .control-prev {
            left: 20px;
          }
          
          .featured-carousel .carousel .control-next {
            right: 20px;
          }
          
          /* Responsive improvements */
          @media (max-width: 768px) {
            .featured-carousel .carousel .control-prev,
            .featured-carousel .carousel .control-next {
              width: 40px;
              height: 40px;
            }
            
            .featured-carousel .carousel .control-prev {
              left: 10px;
            }
            
            .featured-carousel .carousel .control-next {
              right: 10px;
            }
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
}