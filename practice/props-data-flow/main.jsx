/**
 * ==============================================================================
 * STEP 1: ENTRY POINT (main.jsx)
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * 1. This is the very first JavaScript file that executes in the browser.
 * 2. It finds <div id="root"></div> in index.html using document.getElementById('root').
 * 3. It creates the React root engine: createRoot(...).
 * 4. It renders <App /> into that root element.
 * 
 * NOTE ON PROPS:
 * - main.jsx does NOT directly manage UI props like 'name' or 'rollNo'.
 * - Its sole job is to kick off the entire React application by mounting App.jsx.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* main.jsx mounts App.jsx as the top-level parent */}
        <App />
    </StrictMode>
);
