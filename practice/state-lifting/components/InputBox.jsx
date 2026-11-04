/**
 * ==============================================================================
 * SIBLING A (WRITER): InputBox.jsx
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * 1. This component CANNOT talk directly to DisplayCard.jsx (its sibling).
 * 2. Instead, it receives:
 *    - 'value': Current state value from App.jsx
 *    - 'onTextChange': The setter function (setText) passed down from App.jsx
 * 
 * 3. Whenever user types:
 *    onChange={(e) => onTextChange(e.target.value)}
 *    This runs 'setText' up in App.jsx.
 *    Because state lives in the parent, changing it causes App.jsx to re-render,
 *    which automatically sends the new value down to Sibling B (DisplayCard.jsx)!
 */

function InputBox({ value, onTextChange }) {
    return (
        <div style={{
            border: '2px solid #28a745',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px',
            maxWidth: '340px',
            backgroundColor: '#f6fff8'
        }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#28a745' }}>Sibling A: Input Box (Writer)</h4>
            <p style={{ fontSize: '0.85em', color: '#555' }}>
                Typing here calls parent's setter via props!
            </p>
            <input 
                type="text" 
                value={value} 
                onChange={(e) => onTextChange(e.target.value)}
                placeholder="Type a message..."
                style={{
                    width: '90%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                }}
            />
        </div>
    );
}

export default InputBox;
