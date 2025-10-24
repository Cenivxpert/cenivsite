# 🎵 TikTok Integration - Guide d'utilisation

## 📋 **Vue d'ensemble**

Le système intègre automatiquement votre dernière vidéo TikTok dans le carousel du Header. Actuellement configuré pour une mise à jour manuelle simple, avec possibilité d'évolution vers une automatisation complète.

## 🚀 **Utilisation actuelle (Mise à jour manuelle)**

### 1. **Quand publier une nouvelle vidéo TikTok :**

1. Allez sur votre TikTok [@cenivdiaspora](http://www.tiktok.com/@cenivdiaspora)
2. Prenez une capture d'écran de la miniature de votre nouvelle vidéo
3. Sauvegardez l'image dans `/public/press/photos-video-hd/` avec un nom descriptif
4. Ouvrez `src/utils/tiktokData.ts`
5. Mettez à jour les informations :

```typescript
export const latestTikTokVideo: TikTokVideoData = {
  id: "video-2024-xxx",
  thumbnail: "/press/photos-video-hd/votre-nouvelle-miniature.jpg",
  title: "News", // ou autre titre
  description: "Description de votre nouvelle vidéo",
  url: "http://www.tiktok.com/@cenivdiaspora",
  publishedAt: new Date().toISOString(), // Date de publication
  views: "5.2K" // Nombre de vues actuel
};
```

### 2. **Résultat dans le Header :**

- ✅ Miniature de votre dernière vidéo affichée automatiquement
- ✅ Badge "LIVE" avec logo TikTok
- ✅ Nombre de vues affiché
- ✅ Lien direct vers votre profil TikTok
- ✅ Animation fluide dans le carousel

## 🔄 **Évolutions futures possibles**

### **Option 1 : Backend simple**
Créer un endpoint qui met à jour `tiktokData.ts` via une interface admin

### **Option 2 : API externe**
Utiliser un service comme RapidAPI pour TikTok (payant)

### **Option 3 : Web scraping**
Créer un script qui scrape votre profil (attention aux ToS TikTok)

### **Option 4 : Webhook TikTok**
Si TikTok ouvre une API webhook publique à l'avenir

## 📁 **Structure des fichiers**

```
src/
├── utils/
│   └── tiktokData.ts          # Données TikTok (À METTRE À JOUR)
├── hooks/
│   └── useTikTokData.ts       # Hook React pour gérer les données
├── services/
│   └── tiktokApi.ts           # Future API backend (optionnel)
└── components/
    └── Header.tsx             # Carousel intégré
```

## ⚡ **Avantages de cette approche**

- ✅ **Simple** : Pas besoin de backend complexe
- ✅ **Fiable** : Pas de dépendance à des APIs externes
- ✅ **Rapide** : Chargement instantané
- ✅ **Contrôlé** : Vous maîtrisez le contenu affiché
- ✅ **Évolutif** : Facile d'ajouter l'automatisation plus tard

## 🎨 **Personnalisation**

Vous pouvez modifier l'apparence dans `Header.tsx` :
- Couleurs du badge "LIVE"
- Taille des miniatures
- Texte affiché
- Animations

## ❓ **Questions fréquentes**

**Q: Pourquoi pas d'API automatique ?**
R: TikTok n'a pas d'API publique gratuite pour récupérer les vidéos. Les solutions existantes sont complexes ou payantes.

**Q: À quelle fréquence mettre à jour ?**
R: Idéalement après chaque nouvelle publication TikTok importante.

**Q: Peut-on automatiser partiellement ?**
R: Oui ! Vous pourriez créer un simple formulaire admin pour mettre à jour plus facilement.

## 🔧 **Support**

Si vous avez des questions ou voulez évoluer vers une solution plus automatisée, n'hésitez pas à demander !