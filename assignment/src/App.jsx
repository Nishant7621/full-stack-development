// Developer's entry point. Start writing business logic from here.
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Practice1 from './pages/Practice1';
import Practice2 from './pages/Practice2';
import Practice3 from './pages/Practice3';
import Practice4 from './pages/Practice4';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AppLayout from './components/AppLayout';
import Logout from './components/Logout';
import { useSelector } from 'react-redux';

function App() {
    const user = useSelector(state => state.user);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice-1" element={<Practice1 />} />
            <Route path="/practice-2" element={<Practice2 />} />
            <Route path="/practice-3" element={<Practice3 />} />
            <Route path="/practice-4" element={<Practice4 />} />
            <Route path="/practice-5" element={user ? 
                    <Navigate to="/dashboard" /> : 
                    <AppLayout>
                        <Login />
                    </AppLayout>
                    } 
            />
            <Route path="/dashboard" element={user ? 
                    <AppLayout>
                        <Dashboard />
                    </AppLayout>
                    : <Navigate to="/practice-5" />} 
            />
            {/* Assignment Route: Logout */}
            <Route path="/logout" element={
                    <AppLayout>
                        <Logout />
                    </AppLayout>
            } />
        </Routes>
    );
}

export default App;
