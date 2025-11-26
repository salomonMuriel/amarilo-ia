import React from 'react';
import { createRoot } from 'react-dom/client';
import { PresenterView } from './components/PresenterView';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <PresenterView />
    </React.StrictMode>
  );
}
