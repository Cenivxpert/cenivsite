// @ts-expect-error: allow importing CSS without type declarations
import './index.css'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import About from './pages/About'
import PressKit from './pages/PressKit'
import Branch from './pages/Branch'
import PhotosGallery from './pages/PhotosGallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import MentionsLegales from './pages/MentionsLegales'
import ContactPro from './pages/ContactPro'
import PolitiqueEditoriale from './pages/PolitiqueEditoriale'

import MainLayout from './layouts/MainLayout'

import Section1 from './components/section_head/Section1'
import Section2 from './components/section_head/Section2'
import Section3 from './components/section_head/Section3'
import Section4 from './components/section_head/Section4'
import Section5 from './components/section_head/Section5'
import Section6 from './components/section_head/Section6'
import Section7 from './components/section_head/Section7'
import Section8 from './components/section_head/Section8'
import Section9 from './components/section_head/Section9'
import Section10 from './components/section_head/Section10'
import Section11 from './components/section_head/Section11'
import Section12 from './components/section_head/Section12'
import Section13 from './components/section_head/Section13'
import Section14 from './components/section_head/Section14'
import Section15 from './components/section_head/Section15'
import Section16 from './components/section_head/Section16'
import Section17 from './components/section_head/Section17'
import Section18 from './components/section_head/Section18'

import SocialLinksLarge from './components/SocialLinksLarge'

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#001822] via-[#002a3a] to-[#001822] text-gray-100">
        <Routes>
        {/* Pages indépendantes (sans Header/Footer) */}
        <Route path="/about" element={<About />} />
        <Route path="/press" element={<PressKit />} />
        <Route path="/photos-gallery" element={<PhotosGallery />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/contact-pro" element={<ContactPro />} />
        <Route path="/politique-editoriale" element={<PolitiqueEditoriale />} />

        {/* Pages avec Header/Footer via MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="social-links-large" element={<SocialLinksLarge />} />

          {/* Sections */}
          <Route path="section1" element={<Section1 />} />
          <Route path="section2" element={<Section2 />} />
          <Route path="section3" element={<Section3 />} />
          <Route path="section4" element={<Section4 />} />
          <Route path="section5" element={<Section5 />} />
          <Route path="section6" element={<Section6 />} />
          <Route path="section7" element={<Section7 />} />
          <Route path="section8" element={<Section8 />} />
          <Route path="section9" element={<Section9 />} />
          <Route path="section10" element={<Section10 />} />
          <Route path="section11" element={<Section11 />} />
          <Route path="section12" element={<Section12 />} />
          <Route path="section13" element={<Section13 />} />
          <Route path="section14" element={<Section14 />} />
          <Route path="section15" element={<Section15 />} />
          <Route path="section16" element={<Section16 />} />
          <Route path="section17" element={<Section17 />} />
          <Route path="section18" element={<Section18 />} />

          {/* 404 dans le scope du layout */}
          <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
      </div>
    </HelmetProvider>
  )
}
