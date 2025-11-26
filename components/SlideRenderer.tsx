import React from 'react';
import { SlideData, SlideType } from '../types';
import { IntroSlide } from './slides/IntroSlide';
import { ContentSlide } from './slides/ContentSlide';
import { SplitSlide } from './slides/SplitSlide';

interface SlideProps {
  slide: SlideData;
}

export const SlideRenderer: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      {/* Standard Header */}
      <div className="mb-6 text-center md:text-left">
        {slide.type !== SlideType.INTRO && (
          <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2">
            {slide.title}
          </h1>
        )}
        {slide.subtitle && slide.type !== SlideType.INTRO && (
          <p className="text-xl md:text-2xl text-slate-500">{slide.subtitle}</p>
        )}
      </div>

      {/* Body Content */}
      <div className="w-full">
        {slide.type === SlideType.INTRO && <IntroSlide slide={slide} />}
        {slide.type === SlideType.CONTENT && <ContentSlide slide={slide} />}
        {slide.type === SlideType.SPLIT && <SplitSlide slide={slide} />}
      </div>
    </div>
  );
};
