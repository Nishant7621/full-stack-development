/**
 * ==============================================================================
 * 2. TOGGLE VISIBILITY COMPONENT (Boolean useState Demo)
 * ==============================================================================
 * 
 * Demonstrates storing boolean true/false in state:
 * - const [isVisible, setIsVisible] = useState(false);
 * - Toggling state with: setIsVisible(!isVisible)
 */

import { useState } from 'react';

function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div style={{
            border: '2px solid #28a745',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '340px',
            backgroundColor: '#f6fff8',
            fontFamily: 'sans-serif',
            marginBottom: '20px'
        }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#28a745' }}>Example 2: Boolean Toggle</h3>
            
            <button 
                onClick={() => setIsVisible(!isVisible)}
                style={{
                    padding: '8px 16px',
                    background: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    marginBottom: '10px'
                }}
            >
                {isVisible ? 'Hide Secret Message' : 'Show Secret Message'}
            </button>

            {isVisible && (
                <div style={{
                    padding: '10px',
                    background: '#d4edda',
                    border: '1px solid #c3e6cb',
                    borderRadius: '4px',
                    color: '#155724'
                }}>
                    🎉 You toggled state to <strong>true</strong>!
                </div>
            )}
        </div>
    );
}

export default ToggleVisibility;
