// src/App.tsx

import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PressKit from './pages/PressKit'
import Branch from './pages/Branch'
import PhotosGallery from './pages/PhotosGallery'

import Header from './components/Header'
import Section1 from './components/section_head/Section1'
import Section2 from './components/section_head/Section2'
import Section3 from './components/section_head/Section3'

import Footer from './components/Footer';
// Supprimez complètement cette ligne
// import { i } from 'framer-motion/client'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100"> {/* Changé bg-gray-50 en bg-gray-900, text-slate-900 en text-gray-100 */}
    
      <Header />

      <main className="w-full p-6">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/press" element={<PressKit />} />
          <Route path="/photos-gallery" element={<PhotosGallery />} />
          <Route path="/branch" element={<Branch />} />

          <Route path="/section1" element={<Section1 />} />
          <Route path="/section2" element={<Section2 />} />
          <Route path="/section3" element={<Section3 />} />
           {/* Ajout de la route */}
        </Routes>
        
      </main>

      <Footer />
    </div>
  )
}