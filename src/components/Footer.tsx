// src/components/Footer.tsx

import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} CENIV — Tous droits réservés</p>
      <SocialLinks />
    </footer>
  );
}