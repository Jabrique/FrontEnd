import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesApp from './NotesApp';
import { BrowserRouter } from 'react-router-dom';

import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NotesApp />
  </BrowserRouter>
);
