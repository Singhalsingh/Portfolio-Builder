import React, { useState } from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';

const CreatePortfolio = () => {
    // State to maintain form data
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        about: '',
        email: '',
        skills: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCreate = () => {
        // Just logs for now according to instructions
        console.log("Portfolio Data:", formData);
        alert(`Creating Portfolio for ${formData.name}`);
    };

    // Predefined skills for suggestion
    const suggestedSkills = ["React", "Node.js", "Python", "Design", "Java", "Typing", "C++", "Vite", "OS","HTML","HTML5","CSS","JAVASCRIPT","POWER BI","EXCEL","MICROSOFT WORD"];

  return (
    <div className="create-portfolio-container" style={{ paddingTop: '10rem', paddingBottom: '5rem', minHeight: '100vh' }}>
      <header className="navbar">
        <div className="logo">Portfolio <span>Builder</span></div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="#get-started" className="nav-btn">Get Started</a>
        </nav>
      </header>

      <main style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '1rem' }}>
          Build Your <span>Dream Portfolio</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-subtle)', marginBottom: '3rem' }}>
          Boss, fill in your details below to start creating your stunning professional presence.
        </p>
        
        {/* The form area */}
        <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '3rem', maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          
          <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Your Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} 
                placeholder="Boss, enter your full name" 
              />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Portfolio Title</label>
              <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} 
                placeholder="e.g., Senior Full Stack Developer" 
              />
          </div>

          {/* Email Input */}
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

          {/* Skills Input with Suggestions linked via list attribute */}
          <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Skills (comma separated)</label>
              <input 
                type="text" 
                name="skills"
                list="skill_suggestions"
                value={formData.skills}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} 
                placeholder="React, Node.js, Design, Typing" 
              />
              <datalist id="skill_suggestions">
                  {suggestedSkills.map((skill, index) => (
                      <option key={index} value={skill} />
                  ))}
              </datalist>
          </div>

          <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>About Yourself</label>
              <textarea 
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                rows="4" 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', resize: 'vertical' }} 
                placeholder="Talk about yourself, Boss"
              ></textarea>
          </div>

          <button 
            onClick={handleCreate}
            className="hero-btn-primary" 
            style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
            Create Portfolio
          </button>

        </div>
      </main>
    </div>
  );
};

export default CreatePortfolio;