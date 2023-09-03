import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import './styles/responsive.css'
import FurnApp from './components/FurnApp';

const root = createRoot(document.getElementById('root'));
root.render(<FurnApp/>);