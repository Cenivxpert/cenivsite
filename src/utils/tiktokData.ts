// src/utils/tiktokData.ts

export interface TikTokVideoData {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  views?: string;
}

// Données de la dernière vidéo TikTok - À mettre à jour manuellement
export const latestTikTokVideo: TikTokVideoData = {
  id: "latest-video",
  thumbnail: "/press/photos-video-hd/Teasing 3 is coming soon...Ceniv TV YTB et TK.mp4", // Miniature locale temporaire
  title: "News",
  description: "L'information qui compte, livrée sans fard.",
  url: "http://www.tiktok.com/@cenivdiaspora",
  publishedAt: new Date().toISOString(),
  views: "1.2K"
};

// Fonction pour formater la date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return "Il y a moins d'une heure";
  if (diffInHours < 24) return `Il y a ${diffInHours}h`;
  if (diffInHours < 48) return "Hier";
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `Il y a ${diffInDays} jour${diffInDays > 1 ? 's' : ''}`;
};

// Instructions pour mise à jour :
// 1. Allez sur votre TikTok @cenivdiaspora
// 2. Prenez une capture d'écran de la miniature de votre dernière vidéo
// 3. Sauvegardez-la dans /public/press/photos-video-hd/
// 4. Mettez à jour les données ci-dessus