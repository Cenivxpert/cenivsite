// src/pages/PhotosGallery.tsx

import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Styles du carousel
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Styles de la lightbox
import Video from 'yet-another-react-lightbox/plugins/video';
import type { Slide } from 'yet-another-react-lightbox'; // Import du type Slide

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

      <section className="min-h-screen bg-gray-50 text-slate-900 p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Photos et Vidéos HD - CENIV</h1>
        {/* Carousel pour les images */}
        <div className="mb-8">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={3000}
            showStatus={false}
          >
            {imagesOnly.slice(0, 5).map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                onClick={() => {
                  setSelectedIndex(index); // index dans imagesOnly.slice(0, 5)
                  setIsOpen(true);
                }}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-64 object-cover cursor-pointer"
                  loading="lazy"
                />
                <p className="legend text-center p-2 bg-black bg-opacity-50 text-white">{item.name}</p>
              </motion.div>
            ))}
          </Carousel>
        </div>

        {/* Grid pour les vidéos et images restantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {media.map((item, index) => {
            // Pour les images hors du carousel
            if (item.type === 'image' && !imagesOnly.slice(0, 5).includes(item)) {
              // Trouver l'index dans imagesOnly (pour Lightbox)
              const imgIndex = imagesOnly.indexOf(item);
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setSelectedIndex(imgIndex); // index dans imagesOnly/slides
                    setIsOpen(true);
                  }}
                >
                  <img src={item.src} alt={item.name} className="w-full h-48 object-cover" loading="lazy" />
                  <p className="p-4 text-center font-semibold">{item.name}</p>
                </motion.div>
              );
            }
            // Pour les vidéos
            if (item.type === 'video') {
              const vidIndex = videosOnly.indexOf(item);
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                  onClick={() => {
                    setSelectedVideoIndex(vidIndex); // index dans videosOnly/videoSlides
                    setIsVideoOpen(true);
                  }}
                >
                  <video controls className="w-full h-48">
                    <source src={item.src} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                  </video>
                  <p className="p-4 text-center font-semibold">{item.name}</p>
                </motion.div>
              );
            }
            return null;
          })}
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
      </section>
    </>
  );
}