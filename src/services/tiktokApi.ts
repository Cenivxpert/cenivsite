// src/services/tiktokApi.ts

// IMPORTANT: Cette approche nécessite un backend
// TikTok n'a pas d'API publique simple pour récupérer les vidéos

interface TikTokApiResponse {
  success: boolean;
  data?: {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    views: string;
  };
  error?: string;
}

/**
 * Options pour un backend futur :
 * 
 * 1. Web Scraping (non recommandé - peut violer les ToS)
 * 2. TikTok Business API (nécessite approbation)
 * 3. TikTok Research API (académique seulement)
 * 4. Service tiers comme RapidAPI
 * 
 * Pour l'instant, utilisez la mise à jour manuelle dans tiktokData.ts
 */

export const fetchLatestTikTokVideo = async (): Promise<TikTokApiResponse> => {
  try {
    // Remplacez par votre endpoint backend quand prêt
    const response = await fetch('/api/tiktok/latest-video');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return { success: true, data };
    
  } catch (error) {
    console.error('Erreur lors de la récupération TikTok:', error);
    return { 
      success: false, 
      error: 'Impossible de récupérer la dernière vidéo TikTok' 
    };
  }
};

// Fonction de fallback pour retourner les données statiques
export const getFallbackData = () => ({
  id: "fallback",
  thumbnail: "/press/photos-video-hd/Ceniv-&-Centrafric-Community.jpg",
  title: "News",
  description: "L'information qui compte, livrée sans fard.",
  url: "http://www.tiktok.com/@cenivdiaspora",
  publishedAt: new Date().toISOString(),
  views: "1.2K"
});