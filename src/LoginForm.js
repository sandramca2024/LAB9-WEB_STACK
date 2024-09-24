import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Path to your CSS file

const Login = ({ setUserDetails }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            setUserDetails({ username, password });
            navigate('/gallery'); // Navigate to gallery page
        } else {
            setError('Please enter both username and password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <h2>EUPHORIA - LOGIN</h2>
                {error && <p className="error-message">{error}</p>}
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
