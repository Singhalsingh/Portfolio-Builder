import React, { useState } from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = () => {
        console.log("Login Data:", formData);
        alert(`Welcome back, ${formData.email}!`);
    };

  return (
    <div className="login-container" style={{ paddingTop: '10rem', paddingBottom: '5rem', minHeight: '100vh' }}>
      <header className="navbar">
        <div className="logo">Portfolio <span>Builder</span></div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/register" className="nav-btn">Register</Link>
        </nav>
      </header>

      <main style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '1rem' }}>
          Welcome <span>Back</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-subtle)', marginBottom: '3rem' }}>
           Enter your credentials below to access your account.
        </p>
        
        <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '3rem', maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
          
          <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} 
                placeholder="you@company.com" 
              />
          </div>

          <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} 
                placeholder="••••••••" 
              />
          </div>

          <button 
            onClick={handleLogin}
            className="hero-btn-primary" 
            style={{ width: '100%', border: 'none', cursor: 'pointer', marginBottom: '1.5rem' }}>
            Log In
          </button>

          {/* Styled Register Link as an Outline Button */}
          <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-subtle)' }}>
              New here? 
              <Link 
                to="/register" 
                style={{ 
                    display: 'block', 
                    marginTop: '0.75rem',
                    padding: '0.75rem', 
                    borderRadius: '6px', 
                    border: '1px solid var(--accent-color)', 
                    color: 'var(--accent-color)', 
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontWeight: '600',
                    transition: 'all 0.2s ease-in-out'
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'var(--accent-color)';
                    e.target.style.color = 'var(--card-bg)';
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'var(--accent-color)';
                }}
              >
                Create an account
              </Link>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Login;