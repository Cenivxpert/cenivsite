// Utilitaire pour filtrer les warnings de développement spécifiques
// À utiliser uniquement en développement

export const filterDevWarnings = () => {
  // Vérifier si on est en mode développement (Vite utilise import.meta.env)
  if (import.meta.env.MODE !== 'development') return;

  const originalWarn = console.warn;
  
  console.warn = (...args: unknown[]) => {
    const message = args.join(' ');
    
    // Filtrer les warnings spécifiques des bibliothèques tierces
    if (
      message.includes('UNSAFE_componentWillMount') ||
      message.includes('react-side-effect') ||
      message.includes('SideEffect(NullComponent')
    ) {
      return; // Ignorer ces warnings spécifiques
    }
    
    // Garder tous les autres warnings
    originalWarn.apply(console, args);
  };
};