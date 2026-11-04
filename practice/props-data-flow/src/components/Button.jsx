/**
 * ==============================================================================
 * CHILD COMPONENT (Button.jsx)
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * 1. Receives 'text' (button label) and 'onBtnClick' (function reference from Card).
 * 2. Connects to DOM event: onClick={onBtnClick}
 * 3. When clicked, it fires the function without knowing or caring what it does!
 */

function Button({ text, onBtnClick }) {
    return (
        <button 
            onClick={onBtnClick}
            style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginTop: '10px'
            }}
        >
            {text}
        </button>
    );
}

export default Button;
