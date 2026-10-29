import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const user = useSelector(state => state.user);

    return (
        <header style={{ padding: '10px 0', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
            <nav style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Link to='/'>Home</Link>
                {user ? (
                    <>
                        <Link to='/dashboard'>Dashboard</Link>
                        {/* Hint 2: Add link to Logout in the Header */}
                        <Link to='/logout' style={{ color: 'red' }}>Logout</Link>
                        <span style={{ marginLeft: 'auto', fontWeight: 'bold' }}>👤 {user.name}</span>
                    </>
                ) : (
                    <>
                        <Link to='/practice-5'>Login</Link>
                        <span style={{ marginLeft: 'auto', color: '#666' }}>Guest</span>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
