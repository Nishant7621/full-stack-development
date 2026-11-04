/**
 * ==============================================================================
 * COMMON PARENT: App.jsx (Where State Is Lifted Up)
 * ==============================================================================
 * 
 * WHY IS STATE LIFTED HERE?
 * - InputBox and DisplayCard are SIBLINGS.
 * - Sibling components cannot pass props or communicate directly with each other!
 * - Therefore, we "LIFT" the shared state variable (sharedText) up to their
 *   closest common parent: App.jsx.
 * 
 * HOW IT SHARES WITH BOTH SIBLINGS:
 * 1. App.jsx gives the state variable (sharedText) and updater function (setSharedText)
 *    to InputBox so InputBox can write changes.
 * 2. App.jsx gives the same state variable (sharedText) to DisplayCard
 *    so DisplayCard can read and display it.
 */

import { useState } from 'react';
import InputBox from './components/InputBox';
import DisplayCard from './components/DisplayCard';

function App() {
    // 1. STATE IS LIFTED UP INTO THIS COMMON PARENT:
    const [sharedText, setSharedText] = useState("");

    return (
        <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
            <h1>State Lifting Demo</h1>
            <p>
                <strong>The Core Problem:</strong> Sibling A (InputBox) and Sibling B (DisplayCard) cannot talk sideways.<br/>
                <strong>The Solution:</strong> State is lifted up to App.jsx, which connects them both.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
                {/* Sibling A gets state value AND the updater function to write changes */}
                <InputBox 
                    value={sharedText} 
                    onTextChange={setSharedText} 
                />

                {/* Sibling B receives the updated state to read and render it */}
                <DisplayCard 
                    message={sharedText} 
                />
            </div>
        </div>
    );
}

export default App;
