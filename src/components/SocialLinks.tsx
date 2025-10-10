// src/components/SocialLinks.tsx

export default function SocialLinks() {
  const links = [
    { name: 'Twitter (Sky)', url: 'https://twitter.com/ceniv', icon: '/assets/ico/icone_réseaux/ico/twitter_logo.ico' },
    { name: 'LinkedIn (Design, Digital & Communication)', url: 'https://www.linkedin.com/company/ceniv-design-digital-communication', icon: '/assets/ico/icone_réseaux/ico/linkedin_logo.ico' },
    { name: 'YouTube (TV)', url: 'https://www.youtube.com/@CENIV-Diaspora', icon: '/assets/ico/icone_réseaux/ico/youtube_logo.ico' },
    { name: 'TikTok (TV cfie)', url: 'http://www.tiktok.com/@cenivdiaspora', icon: '/assets/ico/icone_réseaux/ico/tiktok_logo.ico' },
    { name: 'Facebook (News)', url: 'https://www.facebook.com/cenivnews', icon: '/assets/ico/icone_réseaux/ico/facebook_logo.ico' },
    { name: 'Facebook (Albeta Design)', url: 'https://www.facebook.com/CenivAlbetaDesign/', icon: '/assets/ico/icone_réseaux/ico/facebook_logo.ico' },
    { name: 'Instagram (Official)', url: 'https://www.instagram.com/ceniv_official/', icon: '/assets/ico/icone_réseaux/ico/instagram_logo_icon_186894.ico' },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-4">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity"
          title={link.name}
        >
          <img 
            src={link.icon} 
            alt={link.name}
            className="w-8 h-8 object-contain"
          />
        </a>
      ))}
    </div>
  );
}