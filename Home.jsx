import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/');
    };

    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <h1>Welcome Home!</h1>
            <p>You are successfully logged in.</p>
            <button
                onClick={handleLogout}
                style={{ padding: '10px 20px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Logout
            </button>
        </div>
    );
};

export default Home;
