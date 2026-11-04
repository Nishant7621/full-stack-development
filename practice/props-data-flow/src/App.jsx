/**
 * ==============================================================================
 * STEP 2: PARENT COMPONENT (App.jsx)
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * 1. App.jsx holds a STATE variable: 'count' (starts at 0).
 * 
 * 2. COUNT TRIGGER VIA PROPS:
 *    - Parent defines: handleCardClick = (cardName) => setCount(count + 1)
 *    - Parent passes this function DOWN via props: onAction={() => handleCardClick(...)}
 * 
 * 3. EXECUTION FLOW:
 *    User clicks Button inside Card
 *      ➔ Button triggers onBtnClick()
 *      ➔ Card forwards to onAction()
 *      ➔ App executes handleCardClick()
 *      ➔ setCount(prev => prev + 1) updates state
 *      ➔ App re-renders showing the updated total click count!
 */

import { useState } from 'react';
import Card from './components/Card';
import Student from './components/Student';

function App() {
    // 1. STATE: Total clicks counter held in Parent
    const [count, setCount] = useState(0);

    // 2. TRIGGER FUNCTION: Increments count when any child button is clicked
    const handleCardClick = (cardName) => {
        setCount(prev => prev + 1);
        alert(`You clicked "${cardName}"! Total clicks recorded in App.jsx: ${count + 1}`);
    };

    const handleStudentAlert = (studentName) => {
        setCount(prev => prev + 1);
        alert(`Hello from Parent! Greeted ${studentName}. Total clicks: ${count + 1}`);
    };

    return (
        <div style={{ padding: '24px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Props Data Flow & Count Trigger Demo</h1>
            
            {/* Live State Counter in Parent */}
            <div style={{
                background: '#e7f1ff',
                border: '2px solid #007bff',
                padding: '12px 20px',
                borderRadius: '8px',
                display: 'inline-block',
                marginBottom: '20px'
            }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#007bff' }}>
                    Total Clicks Triggered: {count}
                </span>
            </div>

            <p style={{ color: '#555' }}>
                <strong>Execution Flow:</strong><br/>
                <code>[Click in Child Button]</code> ➔ <code>onBtnClick()</code> ➔ <code>onAction()</code> ➔ <code>handleCardClick()</code> ➔ <code>setCount(count + 1)</code>
            </p>

            <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #ddd' }} />

            <h2>1. Card ➔ Button Trigger Example:</h2>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <Card 
                    title="React Basics" 
                    description="Learn components, JSX, and Props data flow." 
                    btnText="Start Learning"
                    onAction={() => handleCardClick("React Basics")}
                />

                <Card 
                    title="MERN Stack" 
                    description="Master MongoDB, Express, React, and Node.js." 
                    btnText="Enroll Now"
                    onAction={() => handleCardClick("MERN Stack")}
                />
            </div>

            <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #ddd' }} />

            <h2>2. Student Profile Example:</h2>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <Student 
                    name="Nishant" 
                    rollNo={101} 
                    course="Full Stack Development" 
                    onAlert={handleStudentAlert}
                />
                <Student 
                    name="Aman" 
                    rollNo={102} 
                    course="React & Node.js" 
                    onAlert={handleStudentAlert}
                />
            </div>
        </div>
    );
}

export default App;
