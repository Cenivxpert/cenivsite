import React, { Component } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#001822]">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Une erreur s'est produite</h1>
            <p className="text-gray-300 mb-4">
              Désolé, quelque chose s'est mal passé.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-[#D4A373] text-[#001822] rounded hover:bg-[#D4A373]/80 transition"
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
