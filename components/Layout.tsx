import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SLIDES } from '../constants';
import { Menu, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentSlideIndex = SLIDES.findIndex(s => s.path === location.pathname);
  const currentSlide = SLIDES[currentSlideIndex];

  const handleNext = () => {
    if (currentSlide?.nextPath) navigate(currentSlide.nextPath);
  };

  const handlePrev = () => {
    if (currentSlide?.prevPath) navigate(currentSlide.prevPath);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isTextInputFocused =
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement ||
        activeElement?.getAttribute('contenteditable') === 'true';

      if (!isTextInputFocused) {
        // Next slide: Arrow Right, Space, Page Down, Enter, N, Down Arrow
        if (
          e.key === 'ArrowRight' ||
          e.key === ' ' ||
          e.key === 'PageDown' ||
          e.key === 'Enter' ||
          e.key === 'n' ||
          e.key === 'N' ||
          e.key === 'ArrowDown'
        ) {
          e.preventDefault();
          handleNext();
        }
        // Previous slide: Arrow Left, Page Up, Backspace, P, Up Arrow
        else if (
          e.key === 'ArrowLeft' ||
          e.key === 'PageUp' ||
          e.key === 'Backspace' ||
          e.key === 'p' ||
          e.key === 'P' ||
          e.key === 'ArrowUp'
        ) {
          e.preventDefault();
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="fixed inset-0 bg-slate-50 text-slate-900 flex flex-col font-sans overflow-hidden">
      {/* Top Bar */}
      <header className="flex-none flex justify-between items-center p-4 border-b border-slate-200 z-10 bg-white/90 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-white shadow-sm">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-wide text-slate-900">AMARILO</span>
            <span className="text-xs text-slate-500">El Maestro de Obra Aumentado</span>
          </div>
        </div>
        <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-500 hover:text-slate-800">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto w-full scroll-smooth">
        <div className="min-h-full w-full flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="max-w-5xl w-full">
            {children}
          </div>
        </div>
      </main>

      {/* Bottom Nav Bar */}
      <footer className="flex-none p-4 border-t border-slate-200 flex justify-between items-center bg-white z-10">
        <button
          onClick={handlePrev}
          disabled={!currentSlide?.prevPath}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${!currentSlide?.prevPath ? 'opacity-30 cursor-not-allowed text-slate-400' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900'}`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Atrás</span>
        </button>

        <div className="text-xs text-slate-400 font-mono">
          {currentSlideIndex >= 0 ? `${currentSlideIndex + 1} / ${SLIDES.length}` : ''}
        </div>

        <button
          onClick={handleNext}
          disabled={!currentSlide?.nextPath}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${!currentSlide?.nextPath ? 'opacity-30 cursor-not-allowed bg-slate-200 text-slate-400' : 'bg-amber-500 hover:bg-amber-400 text-white shadow-lg shadow-amber-200/50'}`}
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </footer>

      {/* Drawer Menu */}
      {isMenuOpen && (
        <div className="absolute inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="relative w-80 bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center">
              <h2 className="font-bold text-lg text-slate-800">Contenido</h2>
              <button onClick={() => setIsMenuOpen(false)} className="p-1 hover:bg-slate-100 rounded text-slate-500">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    navigate(slide.path);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition flex items-center gap-3 ${location.pathname === slide.path ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'hover:bg-slate-100 text-slate-600'}`}
                >
                  <span className="font-mono text-xs opacity-50 w-5">{idx + 1}</span>
                  <span className="truncate font-medium">{slide.title}</span>
                </button>
              ))}
            </div>
            <div className="p-4 border-t border-slate-200 text-xs text-slate-400 text-center">
              Taller de IA para Amarilo
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
