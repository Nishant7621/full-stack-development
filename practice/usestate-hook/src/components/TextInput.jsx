/**
 * ==============================================================================
 * 3. TEXT INPUT COMPONENT (String useState Demo)
 * ==============================================================================
 * 
 * Demonstrates:
 * - Storing text strings in state.
 * - Binding input value to state: value={name}
 * - Listening to user typing: onChange={(e) => setName(e.target.value)}
 */

import { useState } from 'react';

function TextInput() {
    const [name, setName] = useState('');

    return (
        <div style={{
            border: '2px solid #fd7e14',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '340px',
            backgroundColor: '#fff9f5',
            fontFamily: 'sans-serif'
        }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fd7e14' }}>Example 3: Form Input</h3>
            
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem' }}>
                Enter your name:
            </label>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Nishant"
                style={{
                    width: '90%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    marginBottom: '10px'
                }}
            />

            <p style={{ margin: 0, color: '#333' }}>
                Hello, <strong>{name ? name : 'stranger'}</strong>! 👋
            </p>
        </div>
    );
}

export default TextInput;
