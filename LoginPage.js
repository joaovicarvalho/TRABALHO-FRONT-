import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/characters');
    };

    return (
        <div className="login-page-container">
            <h1 className="login-title">Login</h1>
            <div className="rick-and-morty-title">POKEMON</div>
            <Login onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
