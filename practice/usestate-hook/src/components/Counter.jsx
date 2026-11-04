/**
 * ==============================================================================
 * 1. COUNTER COMPONENT (Classic useState Demo)
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * 1. const [count, setCount] = useState(0);
 *    - 0 is the initial value.
 *    - 'count' is the state variable (holds the current number).
 *    - 'setCount' is the updater function.
 * 
 * 2. WHY CAN'T WE DO count = count + 1?
 *    In regular JavaScript, count = count + 1 modifies the variable in memory,
 *    but React NEVER notices! The screen won't change.
 *    Calling setCount(count + 1) signals to React:
 *    "Hey, this component's data changed! Re-render this component on screen!"
 */

import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '340px',
            backgroundColor: '#f0f7ff',
            fontFamily: 'sans-serif',
            marginBottom: '20px'
        }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>Example 1: Counter</h3>
            <p id="para" style={{ fontSize: '1.1rem' }}>
                You have clicked <strong>{count}</strong> times
            </p>
            
            <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                    id="btn"
                    onClick={() => setCount(count + 1)}
                    style={{
                        padding: '8px 16px',
                        background: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    + Click me
                </button>

                <button 
                    onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))}
                    style={{
                        padding: '8px 16px',
                        background: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    - Decrease
                </button>

                <button 
                    onClick={() => setCount(0)}
                    style={{
                        padding: '8px 16px',
                        background: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;
