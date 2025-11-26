# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based presentation application for "El Maestro de Obra Aumentado" - an AI workshop for Amarilo (a construction company). The app is a slide deck viewer with keyboard navigation, built with Vite, React 19, and Tailwind CSS.

## Commands

- `pnpm dev` - Start development server on port 3000
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

## Architecture

### Slide System

The presentation uses a route-based slide system with HashRouter:

1. **Slide Data** (`types.ts`): Defines `SlideData` interface with `SlideType` enum (INTRO, CONTENT, SPLIT, SECTION_HEADER)
2. **Slide Registry** (`slides/index.ts`): Central `SLIDES` array that orders all slides and connects prev/next navigation
3. **Individual Slides** (`slides/*.tsx`): Each slide exports a `SlideData` object with content, paths, and optional speaker notes
4. **Slide Components** (`components/slides/*.tsx`): Reusable templates for different slide types

### Component Structure

- `App.tsx` - Router setup, maps SLIDES to routes
- `components/Layout.tsx` - Persistent header/footer with navigation controls and keyboard shortcuts
- `components/SlideRenderer.tsx` - Dispatches to appropriate slide component based on `SlideType`
- `components/slides/` - Template components (IntroSlide, ContentSlide, SplitSlide)

### Adding a New Slide

1. Create `slides/XX-name.tsx` exporting a `SlideData` object
2. Import and add to `SLIDES` array in `slides/index.ts`
3. Set `path`, `nextPath`, `prevPath` to maintain navigation chain

### Path Alias

`@/*` maps to project root via tsconfig and vite config.

### Styling

Uses Tailwind CSS via CDN (configured in `index.html`). Custom theme extends:
- Font: Inter
- Colors: slate-850/950, amber-450
- Animation: `animate-in` for slide transitions
