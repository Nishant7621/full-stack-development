import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Dashboard() {
    const user = useSelector(state => state.user);

    return (
        <div>
            <h2>Welcome, {user?.name || 'User'}!</h2>
            <p>This is where wonders happen.</p>
            <div style={{ marginTop: '20px' }}>
                <Link to="/logout" style={{ 
                    padding: '8px 16px', 
                    backgroundColor: '#dc3545', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '4px' 
                }}>
                    Logout
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
