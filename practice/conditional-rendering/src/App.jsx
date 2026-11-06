/**
 * ==============================================================================
 * App.jsx (Root Parent Demonstrating All 3 Conditional Rendering Techniques)
 * ==============================================================================
 * 
 * 1. TERNARY OPERATOR: (isLoggedIn ? <LoggedInView /> : <LoggedOutView />)
 *    Used when you want to choose between TWO components (A or B).
 * 
 * 2. LOGICAL AND (&&): (isLoggedIn && <VipDashboard />)
 *    Used when you want to show ONE component ONLY if the condition is true.
 * 
 * 3. EARLY RETURN PATTERN (Documented below):
 *    Used to guard an entire screen before executing further rendering.
 */

import { useState } from 'react';
import LoggedInView from './components/LoggedInView';
import LoggedOutView from './components/LoggedOutView';

function App() {
    // 1. STATE: Keeps track of login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName] = useState("Nishant");

    return (
        <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '750px', margin: '0 auto' }}>
            <h1>⚡ Conditional Rendering in React</h1>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
                Conditional rendering means displaying different UI elements based on whether a condition is <code>true</code> or <code>false</code>.
            </p>

            {/* Current State Indicator */}
            <div style={{
                display: 'inline-block',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                backgroundColor: isLoggedIn ? '#d4edda' : '#f8d7da',
                color: isLoggedIn ? '#155724' : '#721c24'
            }}>
                State: isLoggedIn = {isLoggedIn ? 'true' : 'false'}
            </div>

            <hr style={{ margin: '16px 0', border: 'none', borderTop: '1px solid #ddd' }} />

            {/* =========================================================
                TECHNIQUE 1: TERNARY OPERATOR (condition ? <A /> : <B />)
                Swaps between LoggedInView and LoggedOutView
               ========================================================= */}
            <h2>1. Ternary Operator Demo (Either Component A OR B):</h2>
            <div style={{ marginBottom: '24px' }}>
                {isLoggedIn ? (
                    <LoggedInView 
                        userName={userName} 
                        onLogout={() => setIsLoggedIn(false)} 
                    />
                ) : (
                    <LoggedOutView 
                        onLogin={() => setIsLoggedIn(true)} 
                    />
                )}
            </div>

            <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #ddd' }} />

            {/* =========================================================
                TECHNIQUE 2: LOGICAL AND (condition && <JSX />)
                Renders ONLY if isLoggedIn is true
               ========================================================= */}
            <h2>2. Logical AND (&&) Demo (Show ONLY if True):</h2>
            {isLoggedIn && (
                <div style={{
                    padding: '16px',
                    border: '1px solid #b8daff',
                    backgroundColor: '#e7f1ff',
                    borderRadius: '8px',
                    maxWidth: '380px'
                }}>
                    <h4 style={{ margin: '0 0 6px 0', color: '#004085' }}>🔒 Premium VIP Dashboard</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#004085' }}>
                        This exclusive content is rendered because <code>isLoggedIn === true</code>.
                        If you log out, this entire box vanishes from the DOM!
                    </p>
                </div>
            )}
            {!isLoggedIn && (
                <p style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9rem' }}>
                    (Log in above to unlock the secret VIP Dashboard via <code>&&</code>)
                </p>
            )}
        </div>
    );
}

export default App;
