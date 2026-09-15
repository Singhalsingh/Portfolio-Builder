import React, { useState } from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = () => {
        if(formData.password !== formData.confirmPassword) {
            alert("Passwords do not match, Boss!");
            return;
        }
        console.log("Register Data:", formData);
        alert(`Welcome aboard, ${formData.name}!`);
    };

  return (
    <div className="register-container" style={{ paddingTop: '10rem', paddingBottom: '5rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header className="navbar">
        <div className="logo">Portfolio <span>Builder</span></div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login" className="nav-btn">Log In</Link>
        </nav>
      </header>

      <main style={{ textAlign: 'center', width: '100%', maxWidth: '900px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
          Get <span>Started</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-subtle)', marginBottom: '4rem' }}>
          Create your account to begin building your professional portfolio.
        </p>
        
        <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '4rem', textAlign: 'left', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '1rem' }} 
                placeholder="Boss, enter your full name" 
              />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '1rem' }} 
                placeholder="you@company.com" 
              />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '1rem' }} 
                placeholder="••••••••" 
              />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '1rem' }} 
                placeholder="••••••••" 
              />
          </div>

          <button 
            onClick={handleRegister}
            className="hero-btn-primary" 
            style={{ width: '100%', border: 'none', cursor: 'pointer', marginBottom: '2rem', padding: '1rem', fontSize: '1.2rem' }}>
            Register
          </button>

          <div style={{ textAlign: 'center', color: 'var(--text-subtle)' }}>
              <span>Already have an account?</span>
                <Link to="/login" style={{ color: 'var(--accent)', marginLeft: '0.5rem', textDecoration: 'none', fontWeight: 'bold' }}>
                  Log in instead
                </Link>
          </div>

        </div>
      </main>
              
      <footer className="footer-area" style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: 'auto', width: '100%', maxWidth: '1400px' }}>
        <p style={{ color: 'var(--text-subtle)' }}>&copy; 2026 Portfolio Builder AI. Created for the future.</p>
      </footer>
    </div>
  );
};

export default Register;
