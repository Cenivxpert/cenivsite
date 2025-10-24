// Utilitaire pour filtrer les warnings de développement spécifiques
// À utiliser uniquement en développement

export const filterDevWarnings = () => {
  // Vérifier si on est en mode développement (Vite utilise import.meta.env)
  if (import.meta.env.MODE !== 'development') return;

  const originalWarn = console.warn;
  const originalError = console.error;
  
  console.warn = (...args: unknown[]) => {
    const message = args.join(' ');
    
    // Filtrer les warnings spécifiques des bibliothèques tierces
    if (
      message.includes('UNSAFE_componentWillMount') ||
      message.includes('react-side-effect') ||
      message.includes('SideEffect(NullComponent') ||
      message.includes('removeChild') ||
      message.includes('Embla selection error') ||
      message.includes('Embla cleanup error')
    ) {
      return; // Ignorer ces warnings spécifiques
    }
    
    // Garder tous les autres warnings
    originalWarn.apply(console, args);
  };

  console.error = (...args: unknown[]) => {
    const message = args.join(' ');
    
    // Filtrer les erreurs DOM non-critiques
    if (
      message.includes('NotFoundError: Failed to execute \'removeChild\'') ||
      message.includes('The node to be removed is not a child')
    ) {
      console.warn('DOM Warning (filtered):', message);
      return;
    }
    
    // Garder les vraies erreurs
    originalError.apply(console, args);
  };
};