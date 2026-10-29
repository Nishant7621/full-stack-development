import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

/**
 * Logout Component
 * Requirement: Create Logout component which makes use of useDispatch to logout.
 */
function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        // Dispatch LOGOUT action to Redux store
        dispatch({ type: 'LOGOUT' });
    }, [dispatch]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Logged Out</h2>
            <p>You have been successfully logged out.</p>
            <div style={{ marginTop: '15px' }}>
                <Link to="/practice-5" style={{ marginRight: '15px' }}>Login Again</Link>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
}

export default Logout;
