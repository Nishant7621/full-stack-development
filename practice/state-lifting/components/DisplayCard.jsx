/**
 * ==============================================================================
 * SIBLING B (READER): DisplayCard.jsx
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * 1. This component only needs to READ the shared data.
 * 2. It receives 'message' as a prop from App.jsx.
 * 3. Whenever Sibling A (InputBox) changes the state in App.jsx:
 *    App.jsx passes the updated message prop to DisplayCard.
 * 4. DisplayCard instantly updates and displays the new text in real time!
 */

function DisplayCard({ message }) {
    return (
        <div style={{
            border: '2px solid #fd7e14',
            borderRadius: '8px',
            padding: '16px',
            maxWidth: '340px',
            backgroundColor: '#fff9f5'
        }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#fd7e14' }}>Sibling B: Display Card (Reader)</h4>
            <p style={{ fontSize: '0.85em', color: '#555' }}>
                Displays the text that was typed into Sibling A:
            </p>
            <div style={{
                background: '#fff',
                padding: '10px',
                borderRadius: '4px',
                border: '1px dashed #ccc',
                minHeight: '24px',
                fontWeight: 'bold',
                color: '#333'
            }}>
                {message || "(Waiting for you to type in Sibling A...)"}
            </div>
        </div>
    );
}

export default DisplayCard;
