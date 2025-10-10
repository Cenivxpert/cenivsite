# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Projet CENIV - Dossier de presse

## Dossier de presse
Ce projet héberge le site vitrine de CENIV, un écosystème média et créatif dédié à la communication digitale et visuelle pour la diaspora. La page "Dossier de presse" (accessible via /press) fournit un aperçu des ressources, y compris :

- Le communiqué de presse (CENIV_PressKit.pdf) téléchargeable.
- Les logos (Ceniv Black.png, Ceniv White.png, Ceniv-removebg white.svg, Ceniv-removebg black.svg) visibles directement dans le navigateur pour un aperçu rapide.
- L'image de promotion (press-kit-image.png) pour référence.

** Note importante :** Les logos et autres ressources visuelles sont également disponibles dans leur intégralité dans le fichier CENIV_PressKit.pdf pour une consultation complète et détaillée. Aucun téléchargement séparé n'est requis pour ces éléments, sauf pour le PDF principal.

## Instructions
- Pour tester le site, exécutez `npm run dev` et visitez `http://localhost:5173/press`.
- Assurez-vous que tous les fichiers sont dans le dossier `public/press/`.