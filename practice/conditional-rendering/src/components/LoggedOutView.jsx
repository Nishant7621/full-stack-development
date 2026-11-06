/**
 * ==============================================================================
 * 2. LoggedOutView.jsx (Child Component)
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * - This component is rendered conditionally when 'isLoggedIn === false'.
 * - It receives the 'onLogin' handler via props.
 */

function LoggedOutView({ onLogin }) {
    return (
        <div style={{
            padding: '20px',
            border: '2px solid #007bff',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
            maxWidth: '380px'
        }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#007bff' }}>Please Sign In</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
                You are currently logged out. Sign in to view your dashboard.
            </p>

            <button 
                onClick={onLogin}
                style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    marginTop: '8px'
                }}
            >
                Log In
            </button>
        </div>
    );
}

export default LoggedOutView;
