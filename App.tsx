import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SlideRenderer } from './components/SlideRenderer';
import { SLIDES } from './constants';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {SLIDES.map((slide) => (
            <Route
              key={slide.id}
              path={slide.path}
              element={<SlideRenderer slide={slide} />}
            />
          ))}
          {/* Fallback redirect to first slide */}
          <Route path="*" element={<SlideRenderer slide={SLIDES[0]} />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
