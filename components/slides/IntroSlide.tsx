import React from 'react';
import { SlideData } from '../../types';
import { HardHat, Cloud } from 'lucide-react';

interface IntroSlideProps {
  slide: SlideData;
}

export const IntroSlide: React.FC<IntroSlideProps> = ({ slide }) => (
  <div className="flex flex-col items-center justify-center text-center min-h-[50vh]">
    {/* Visual icons */}
    <div className="flex items-center gap-4 mb-6">
      <HardHat className="w-12 h-12 text-amber-500" />
      <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-blue-500 rounded-full" />
      <Cloud className="w-12 h-12 text-blue-500" />
    </div>

    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
      {slide.title}
    </h1>
    <p className="text-xl md:text-2xl text-amber-600 font-light max-w-2xl mb-6">
      {slide.subtitle}
    </p>

    <div className="mt-4 p-6 border border-slate-200 bg-white shadow-xl shadow-slate-200/50 rounded-xl max-w-md">
      <p className="text-slate-400 text-sm uppercase tracking-wider font-bold mb-4">Taller para</p>
      <img
        src="/amarilo-logo.png"
        alt="Amarilo"
        className="h-24 w-auto object-contain mx-auto"
      />
    </div>

    <p className="mt-6 text-base text-slate-400">
      Usa las flechas ← → o haz clic en "Siguiente" para navegar
    </p>
  </div>
);
