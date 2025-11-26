import React from 'react';
import { SlideData } from '../../types';

interface SplitSlideProps {
  slide: SlideData;
}

export const SplitSlide: React.FC<SplitSlideProps> = ({ slide }) => (
  <div className="w-full">
    {slide.content}
  </div>
);
