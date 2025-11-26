import { ReactNode } from 'react';

export enum SlideType {
  INTRO = 'INTRO',
  CONTENT = 'CONTENT',
  SPLIT = 'SPLIT',
  SECTION_HEADER = 'SECTION_HEADER'
}

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  type: SlideType;
  content?: ReactNode;
  bullets?: string[];
  visual?: ReactNode;
  path: string;
  nextPath?: string;
  prevPath?: string;
  speakerNotes?: string;
}
