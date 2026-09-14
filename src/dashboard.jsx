import React from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';

const Dashboard = () => {
    // Mock user and portfolio data - Boss, replace with real data later!
    const user = { name: "User" }; 
    const portfolios = [
        { id: 1, title: "My Awesome Portfolio", status: "Published", lastUpdated: "2026-09-11" },
        { id: 2, title: "Developer Sample", status: "Draft", lastUpdated: "2026-09-10" },
    ];

  return (
    <div className="dashboard-container" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <header className="navbar">
        <div className="logo">Portfolio <span>Builder</span></div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login" className="nav-btn">Log Out</Link>
        </nav>
      </header>

      {/* Reduced top padding significantly to push content up */}
      <main style={{ padding: '2rem 4rem' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
            Welcome, <span>{user.name}</span>!
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-subtle)', marginBottom: '2rem' }}>
            Manage your professional personal brands from this central command unit.
        </p>

        <section>
            {/* Reduced margins and padding to align content higher */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', fontWeight: '700' }}>Your Portfolios</h2>
                <Link to="/create" className=" hero-btn-primary" style={{ textDecoration: 'none', fontSize: '1rem', padding: '0.7rem 1.6rem', borderRadius: '8px' }}>
                    + New Portfolio
                </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                {portfolios.map(p => (
                    <div key={p.id} style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem', transition: 'all 0.3s ease', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.2)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'; }}>
                        <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: '600' }}>{p.title}</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-subtle)', marginBottom: '1.5rem' }}>Last updated: {p.lastUpdated}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ padding: '0.4rem 0.9rem', borderRadius: '25px', fontSize: '0.8rem', fontWeight: '500', backgroundColor: p.status === 'Published' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(156, 163, 175, 0.15)', color: p.status === 'Published' ? 'var(--accent-color)' : 'var(--text-subtle)', border: p.status === 'Published' ? '1px solid var(--accent-color)' : '1px solid var(--border-color)' }}>
                                {p.status}
                            </span>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button style={{ background: 'none', border: 'none', color: 'var(--accent-color)', cursor: 'pointer', fontSize: '0.95rem', fontWeight: '500' }}>Edit</button>
                                <button style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.95rem', fontWeight: '500' }}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

      </main>

      {/* Reduced margin before footer */}
      <footer className="footer-area" style={{ marginTop: '3rem', borderTop: '1px solid var(--border-color)', padding: '1.5rem 2rem' }}>
        <p>&copy; 2026 Portfolio Builder AI | Command Center.</p>
      </footer>
    </div>
  );
};

export default Dashboard;