/**
 * ==============================================================================
 * ENTRY POINT: main.jsx
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * 1. Finds <div id="root"></div> in index.html.
 * 2. Mounts <App /> into that DOM container using createRoot().
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
