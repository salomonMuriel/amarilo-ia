import React from 'react';
import { SlideData } from '../../types';

interface ContentSlideProps {
  slide: SlideData;
}

export const ContentSlide: React.FC<ContentSlideProps> = ({ slide }) => (
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className="flex-[2] space-y-4">
      {slide.bullets && (
        <ul className="space-y-4">
          {slide.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3 text-lg md:text-xl text-slate-700 font-light leading-relaxed">
              <span className="mt-2 w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
    {slide.visual && (
      <div className="w-full md:w-96 flex justify-center items-center p-6 bg-white shadow-inner rounded-3xl border border-slate-200 overflow-hidden shrink-0">
        {slide.visual}
      </div>
    )}
  </div>
);
