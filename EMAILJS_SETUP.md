# 📧 Configuration EmailJS pour CENIV

## 🎯 Étapes de Configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://emailjs.com](https://emailjs.com)
2. Créez un compte gratuit
3. Confirmez votre email

### 2. Configurer un Service Email
1. Dans le dashboard EmailJS, cliquez sur "Email Services"
2. Cliquez "Add New Service" 
3. Choisissez votre fournisseur :
   - **Recommandé** : Gmail (si vous avez Gmail)
   - **Alternative** : Outlook (pour votre email CENIV)
4. Suivez les instructions de connexion
5. **Copiez le Service ID** généré

### 3. Créer un Template Email
1. Cliquez sur "Email Templates"
2. Cliquez "Create New Template"
3. **Template de base recommandé** :

```html
Nouveau message depuis CENIV.com

De: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis le formulaire de contact CENIV
```

4. **Copiez le Template ID**

### 4. Récupérer la Clé Publique
1. Cliquez sur "Account" dans le menu
2. Trouvez "API Keys"
3. **Copiez la Public Key**

### 5. Configuration des Variables
Remplacez dans le fichier `.env.local` :

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx  
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### 6. Test Local
1. Redémarrez votre serveur : `npm run dev`
2. Testez le formulaire sur http://localhost:5173/contact
3. Vérifiez que vous recevez l'email

### 7. Déploiement Vercel (GitHub Integration)
**Avec votre setup Vercel + GitHub, c'est automatique !**

1. **Configurez les variables d'environnement** dans Vercel :
   - Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
   - Sélectionnez votre projet CENIV
   - Cliquez sur "Settings" > "Environment Variables"
   - Ajoutez les 3 variables :
     ```
     VITE_EMAILJS_SERVICE_ID = votre_service_id
     VITE_EMAILJS_TEMPLATE_ID = votre_template_id  
     VITE_EMAILJS_PUBLIC_KEY = votre_public_key
     ```

2. **Push vers GitHub** (comme d'habitude) :
   ```bash
   git add .
   git commit -m "Add EmailJS contact form"
   git push origin main
   ```

3. **Vercel redéploie automatiquement** avec les nouvelles variables ! 🚀

**🔥 Avantage :** Pas besoin de redéployer manuellement - GitHub → Vercel le fait pour vous !

## 🔒 Sécurité
- ✅ EmailJS fonctionne côté client (pas de backend nécessaire)
- ✅ Les clés publiques EmailJS sont sécurisées
- ✅ Limite de 200 emails/mois gratuits
- ✅ Protection anti-spam intégrée

## 📊 Analytics (Optionnel)

### Configuration Google Analytics 4 :

1. **Créez un compte GA4** :
   - Allez sur [analytics.google.com](https://analytics.google.com)
   - Créez une propriété GA4 pour votre site
   - Copiez votre **Measurement ID** (format: `G-XXXXXXXXXX`)

2. **Ajoutez l'ID à .env.local** :
   ```env
   VITE_GA_MEASUREMENT_ID=G-VOTRE_ID_ICI
   ```

3. **Remplacez `GA_MEASUREMENT_ID`** dans `index.html` par votre vrai ID

4. **Le tracking est déjà intégré** dans Contact.tsx ! ✅

**Ce qui est trackbé :**
- ✅ Soumissions de formulaire de contact
- ✅ Sujet du message (pour analyser les demandes)
- ✅ Événements de conversion

## 🚀 Alternatives si needed
- **Formspree** : Plus simple mais payant rapidement
- **Netlify Forms** : Seulement si vous migrez vers Netlify
- **Backend custom** : Si vous voulez plus de contrôle (MongoDB + API)

## ✅ Avantages de cette solution
- ✅ Pas de backend à maintenir
- ✅ Compatible avec Vercel + Hostinger
- ✅ Gratuit jusqu'à 200 emails/mois
- ✅ Validation côté client ET serveur
- ✅ Interface d'administration EmailJS