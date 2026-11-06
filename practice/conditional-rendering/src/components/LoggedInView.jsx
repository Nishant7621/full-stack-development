/**
 * ==============================================================================
 * 1. LoggedInView.jsx (Child Component)
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * - This component is rendered conditionally when 'isLoggedIn === true'.
 * - It receives 'userName' and the 'onLogout' handler via props.
 */

function LoggedInView({ userName, onLogout }) {
    return (
        <div style={{
            padding: '20px',
            border: '2px solid #28a745',
            borderRadius: '8px',
            backgroundColor: '#f6fff8',
            maxWidth: '380px'
        }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#28a745' }}>Welcome, {userName}! 🎉</h3>
            <p style={{ color: '#555', fontSize: '0.9rem' }}>
                You have full access to your account and private dashboard.
            </p>

            <button 
                onClick={onLogout}
                style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    marginTop: '8px'
                }}
            >
                Log Out
            </button>
        </div>
    );
}

export default LoggedInView;
