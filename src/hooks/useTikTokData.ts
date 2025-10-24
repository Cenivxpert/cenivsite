// src/hooks/useTikTokData.ts

import { useState, useEffect } from 'react';
import { latestTikTokVideo } from '../utils/tiktokData';
import type { TikTokVideoData } from '../utils/tiktokData';

export const useTikTokData = () => {
  const [videoData, setVideoData] = useState<TikTokVideoData>(latestTikTokVideo);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour vérifier s'il y a une nouvelle vidéo (simulation)
  const checkForUpdates = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Ici vous pouvez ajouter une logique pour vérifier les mises à jour
      // Pour l'instant, on retourne les données statiques
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulation d'appel API
      
      setVideoData(latestTikTokVideo);
    } catch (err) {
      setError('Erreur lors de la récupération des données TikTok');
      console.error('TikTok data error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Vérifier les mises à jour au montage du composant
  useEffect(() => {
    checkForUpdates();
  }, []);

  return {
    videoData,
    loading,
    error,
    refreshData: checkForUpdates
  };
};