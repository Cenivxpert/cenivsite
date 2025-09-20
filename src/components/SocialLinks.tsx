// src/components/SocialLinks.tsx

export default function SocialLinks() {
  const links = [
    { name: 'Twitter', url: 'https://twitter.com/ceniv', icon: '🐦' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ceniv', icon: '💼' },
    { name: 'YouTube', url: 'https://www.youtube.com/@CENIV-Diaspora', icon: '▶️' },
    { name: 'TikTok', url: 'http://www.tiktok.com/@cenivdiaspora', icon: '🎵' },
    { name: 'Facebook', url: 'https://www.facebook.com/cenivnews', icon: '📘' },
    { name: 'Facebook (Ceniv Albeta Design)', url: 'https://www.facebook.com/CenivAlbetaDesign/', icon: '📘' },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-4">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-blue-500 transition-colors"
          title={link.name}
        >
          <span className="text-2xl">{link.icon}</span>
        </a>
      ))}
    </div>
  );
}