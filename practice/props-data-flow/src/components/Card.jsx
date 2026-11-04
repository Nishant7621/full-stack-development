/**
 * ==============================================================================
 * INTERMEDIATE COMPONENT (Card.jsx)
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * 1. Receives { title, description, btnText, onAction } from App.jsx.
 * 2. Displays title and description.
 * 3. FORWARDS 'onAction' down to Button.jsx as 'onBtnClick':
 *      <Button text={btnText} onBtnClick={onAction} />
 * 
 * This is "Prop Forwarding": Card acts as a bridge between App and Button.
 */

import Button from './Button';

function Card({ title, description, btnText, onAction }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            width: '260px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
            backgroundColor: '#ffffff'
        }}>
            <h3 style={{ marginTop: 0, color: '#333' }}>{title}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>{description}</p>

            {/* Passes the callback function forward to the Button */}
            <Button text={btnText} onBtnClick={onAction} />
        </div>
    );
}

export default Card;
