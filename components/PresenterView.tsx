import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES } from '../constants';
import { usePresenterSync } from '../hooks/usePresenterSync';
import { ChevronRight, Clock, Pause, Play, RotateCcw } from 'lucide-react';
import { SlideRenderer } from './SlideRenderer';

export const PresenterView: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [currentScale, setCurrentScale] = useState(0.4);
  const [nextScale, setNextScale] = useState(0.25);
  const currentContainerRef = useRef<HTMLDivElement>(null);
  const nextContainerRef = useRef<HTMLDivElement>(null);

  const currentSlideIndex = SLIDES.findIndex(s => s.path === currentPath);
  const currentSlide = SLIDES[currentSlideIndex] || SLIDES[0];
  const nextSlide = SLIDES[currentSlideIndex + 1];

  const handleSlideChange = useCallback((path: string) => {
    setCurrentPath(path);
  }, []);

  usePresenterSync(currentPath, currentSlideIndex, handleSlideChange);

  // Timer
  useEffect(() => {
    if (!isTimerRunning) return;
    const interval = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const toggleTimer = () => setIsTimerRunning(prev => !prev);
  const resetTimer = () => {
    setElapsedTime(0);
    setIsTimerRunning(true);
  };

  // Calculate scale to fit slide in container - match main presentation dimensions
  const SLIDE_WIDTH = 1280;
  const SLIDE_HEIGHT = 720;

  useEffect(() => {
    const calculateScales = () => {
      if (currentContainerRef.current) {
        const { width, height } = currentContainerRef.current.getBoundingClientRect();
        const scaleX = width / SLIDE_WIDTH;
        const scaleY = height / SLIDE_HEIGHT;
        setCurrentScale(Math.min(scaleX, scaleY));
      }
      if (nextContainerRef.current) {
        const { width, height } = nextContainerRef.current.getBoundingClientRect();
        const scaleX = width / SLIDE_WIDTH;
        const scaleY = height / SLIDE_HEIGHT;
        setNextScale(Math.min(scaleX, scaleY));
      }
    };

    calculateScales();
    window.addEventListener('resize', calculateScales);
    return () => window.removeEventListener('resize', calculateScales);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-slate-900 text-white flex flex-col font-sans overflow-hidden">
      {/* Header */}
      <header className="flex-none flex justify-between items-center p-3 border-b border-slate-700 bg-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">
            A
          </div>
          <span className="font-semibold text-slate-300">Vista del Presentador</span>
        </div>
        <div className="flex items-center gap-6">
          {/* Timer */}
          <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-lg">
            <Clock className="w-5 h-5 text-amber-500" />
            <span className={`font-mono text-3xl font-bold tracking-wider ${isTimerRunning ? 'text-amber-400' : 'text-amber-400/50'}`}>
              {formatTime(elapsedTime)}
            </span>
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={toggleTimer}
                className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-400 hover:text-white"
                title={isTimerRunning ? 'Pausar' : 'Reanudar'}
              >
                {isTimerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={resetTimer}
                className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-400 hover:text-white"
                title="Reiniciar"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="text-sm text-slate-500 font-mono">
            {currentSlideIndex + 1} / {SLIDES.length}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex gap-4 p-4 overflow-hidden">
        {/* Left Column: Slide Previews */}
        <div className="flex-1 flex flex-col gap-3 min-w-0">
          {/* Current Slide Miniature - 2/3 height */}
          <div className="flex-[2] flex flex-col min-h-0">
            <h2 className="text-xs uppercase tracking-wide text-slate-500 mb-2 flex items-center gap-2 flex-none">
              <ChevronRight className="w-3 h-3" />
              Diapositiva Actual
            </h2>
            <div
              ref={currentContainerRef}
              className="flex-1 bg-slate-50 rounded-lg overflow-hidden shadow-lg border-2 border-amber-500/50 relative flex items-center justify-center"
            >
              <div
                className="pointer-events-none flex items-center justify-center"
                style={{
                  width: `${SLIDE_WIDTH}px`,
                  height: `${SLIDE_HEIGHT}px`,
                  transform: `scale(${currentScale})`,
                  transformOrigin: 'center center'
                }}
              >
                <SlideRenderer slide={currentSlide} />
              </div>
            </div>
          </div>

          {/* Next Slide Preview - 1/3 height */}
          <div className="flex-1 flex flex-col min-h-0">
            <h2 className="text-xs uppercase tracking-wide text-slate-500 mb-2 flex items-center gap-2 flex-none">
              <ChevronRight className="w-3 h-3" />
              Siguiente
            </h2>
            {nextSlide ? (
              <div
                ref={nextContainerRef}
                className="flex-1 bg-slate-50 rounded-lg overflow-hidden shadow-md border border-slate-600 opacity-75 relative flex items-center justify-center"
              >
                <div
                  className="pointer-events-none flex items-center justify-center"
                  style={{
                    width: `${SLIDE_WIDTH}px`,
                    height: `${SLIDE_HEIGHT}px`,
                    transform: `scale(${nextScale})`,
                    transformOrigin: 'center center'
                  }}
                >
                  <SlideRenderer slide={nextSlide} />
                </div>
              </div>
            ) : (
              <div className="flex-1 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center">
                <span className="text-slate-500 italic">Fin de la presentación</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Speaker Notes */}
        <div className="flex-1 flex flex-col min-w-0">
          <h2 className="text-xs uppercase tracking-wide text-slate-500 mb-2 flex items-center gap-2">
            <ChevronRight className="w-3 h-3" />
            Notas del Presentador
          </h2>
          <div className="flex-1 bg-slate-800 rounded-lg p-4 overflow-y-auto border border-slate-700">
            <h3 className="text-amber-400 font-semibold mb-3 text-lg">{currentSlide.title}</h3>
            {currentSlide.speakerNotes ? (
              <p className="text-slate-300 leading-relaxed text-base whitespace-pre-wrap">
                {currentSlide.speakerNotes}
              </p>
            ) : (
              <p className="text-slate-500 italic">No hay notas para esta diapositiva.</p>
            )}
          </div>
        </div>
      </main>

      {/* Footer with navigation hint */}
      <footer className="flex-none p-3 border-t border-slate-700 bg-slate-800 text-center text-sm text-slate-500">
        Usa las flechas del teclado en la ventana principal para navegar
      </footer>
    </div>
  );
};
