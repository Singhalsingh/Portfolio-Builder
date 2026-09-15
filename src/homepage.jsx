import React, { useState } from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';
import WebThreads from './WebThreads'; // Assuming WebThreads.jsx exists in the same folder

const HomePage = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey there! How can I assist you?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = { text: inputValue, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    
    let botResponse = "Sorry, I can only answer simple things like 'hello' or 'features'.";
    
    if (inputValue.toLowerCase().includes('hello') || inputValue.toLowerCase().includes('hi')) {
        botResponse = "Hello, Boss! How can I assist you?";
    } else if (inputValue.toLowerCase().includes('features')) {
      botResponse = "We have flashing fast editing, modern templates, and easy export!";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);

    setInputValue('');
  };

  // Inline style for glow effect on hover
  const featureCardStyle = {
    padding: '2rem',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    backgroundColor: 'black' // Remove black background
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="homepage-container" style={{ position: 'relative', overflow: 'hidden' }}> 
      {/* Dynamic Background: WebThreads Integration */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <WebThreads
          color1="#3f22be"
          color2="#4f15d5"
          color3="#FFFFFF"
          speed={0.2}
          threadCount={6}
          frequency={5}
          spread={0.18}
          taper={1}
          position={0.5}
          fanMode="center"
          glow={0.02}
          falloff={0.6}
          thickness={1.1}
          brightness={0.6}
          opacity={1}
          mirror
          shimmer={false}
          grain
          grainIntensity={0.05}
          mouseInteraction
          mouseStrength={0.3}
        />
      </div>

      <header className="navbar">
        <div className="logo">Portfolio <span>Builder</span></div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <Link to="/login" className="nav-btn">Get Started</Link>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Create A Portfolio That <br/><span>Truly Stands Out</span></h1>
            <p>Design, develop, and deploy your professional personal brand effortlessly.</p>
            <div className="hero-btns">
              <Link to="/create" className="hero-btn-primary">
                Build My Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--text-main)', position: 'relative', zIndex: 1 }}>Core Features</h2>
          <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            
            <div 
              className="feature-card" 
              style={ hoveredCard === 1 ? {...featureCardStyle, boxShadow: '0 0 20px 5px rgba(56, 189, 248, 0.4)' } : featureCardStyle }
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Blazing Fast Editing</h3>
              <p style={{ color: 'var(--text-subtle)' }}>Lightweight interface for quick updates.</p>
            </div>

            <div 
              className="feature-card" 
              style={ hoveredCard === 2 ? {...featureCardStyle, boxShadow: '0 0 20px 5px rgba(56, 189, 248, 0.4)' } : featureCardStyle }
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Modern Templates</h3>
              <p style={{ color: 'var(--text-subtle)' }}>Beautiful, responsive designs to choose from.</p>
            </div>

            <div 
              className="feature-card" 
              style={ hoveredCard === 3 ? {...featureCardStyle, boxShadow: '0 0 20px 5px rgba(56, 189, 248, 0.4)' } : featureCardStyle }
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Easy Deployment</h3>
              <p style={{ color: 'var(--text-subtle)' }}>Push your site live with just a few clicks.</p>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section" style={{ padding: '4rem 2rem', backgroundColor: 'rgba(31, 41, 55, 0.5)', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>About Us</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-subtle)', lineHeight: '1.6' }}>We provide the ultimate platform for building professional portfolios with cutting-edge design and ease of use.</p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section" style={{ padding: '5rem 2rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'var(--card-bg)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Get In Touch</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-subtle)', marginBottom: '2rem' }}>Ready to elevate your personal brand? Our team is यहाँ to help. Shoot us an email!</p>
            <a href="mailto:support@portfoliobuilder.ai" style={{ display: 'inline-block', padding: '1rem 2.5rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'white', backgroundColor: 'var(--accent-color)', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 5px 15px rgba(56, 189, 248, 0.4)', transition: 'transform 0.2s easse' }}
               onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
               onMouseLeave={(e) => e.target.style.transform = 'translateY(0px)'}>
              Contact via Email
            </a>
          </div>
        </section>
        
      </main>

      {/* Modern Floating Chatbot UI remains */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
        {showChat && (
          <div style={{ width: '300px', height: '400px', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <div style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: 'bold', color: 'var(--text-main)' }}>AI Support (Simple)</div>
            {/* Messages... */}
            <div style={{ padding: '0.8rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem' }}>
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type 'hello'..." style={{ flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} />
              <button onClick={handleSendMessage} style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', backgroundColor: 'var(--accent-color)', color: 'white', cursor: 'pointer' }}>Send</button>
            </div>
          </div>
        )}
        <button onClick={() => setShowChat(!showChat)} style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', boxShadow: '0 5px 15px rgba(56, 189, 248, 0.4)' }}>
          {showChat ? 'X' : '💬'}
        </button>
      </div>

      <footer className="footer-area" style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--border-color)', position: 'relative', zIndex: 1 }}>
        <p style={{ color: 'var(--text-subtle)' }}>&copy; 2026 Portfolio Builder AI. Created for the future.</p>
      </footer>
    </div>
  );
};

export default HomePage;
