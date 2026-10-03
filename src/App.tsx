import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app">
      <div className="hero">
        <div className="container" style={{ position: 'relative', height: '100%' }}>
          <nav className="navbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--accent-lime)', borderRadius: '8px', transform: 'rotate(45deg)' }}></div>
              <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>NOVACORE</span>
            </div>
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">Solutions</a>
              <a href="#">About us</a>
              <a href="#">Resources</a>
              <a href="#">Pages v</a>
            </div>
            <a href="#" className="btn btn-lime">Get in touch →</a>
          </nav>

          <div className="hero-content">
            <h1>
              Smarter decisions.<br />
              <span style={{ color: 'var(--primary-color)' }}>Stronger tomorrow.</span>
            </h1>
            <p>
              We help organizations turn data, AI and strategy into measurable impact through smart consulting and intelligent automation.
            </p>
            <div className="hero-actions">
              <button className="btn btn-lime">
                Explore solutions
                <span className="btn-icon" style={{ width: '24px', height: '24px', fontSize: '14px' }}>→</span>
              </button>
              <button className="btn" style={{ background: 'transparent', padding: 0 }}>
                Watch overview <span style={{ marginLeft: '8px', border: '1px solid currentColor', borderRadius: '50%', width: '24px', height: '24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>▶</span>
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex' }}>
                {[1,2,3,4].map(i => (
                  <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ddd', border: '2px solid white', marginLeft: i > 1 ? '-12px' : 0, backgroundImage: `url(https://i.pravatar.cc/100?img=${i})`, backgroundSize: 'cover' }}></div>
                ))}
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                <div style={{ color: 'var(--text-gray)' }}>4.9/5 from 1,200+ clients</div>
                <div style={{ color: 'gold', marginTop: '4px' }}>★★★★★</div>
              </div>
            </div>
          </div>
        </div>
        
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
          alt="Professional woman" 
          className="hero-image" 
        />
      </div>

      <div className="container">
        <div className="bento-grid">
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'auto' }}>
              <h3 style={{ fontSize: '1.1rem' }}>AI Strategy</h3>
              <span style={{ width: '24px', height: '24px', border: '1px solid #ccc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</span>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>Roadmap to scale</p>
            <div style={{ height: '80px', background: 'linear-gradient(to top, #e0f2fe, transparent)', borderRadius: '8px' }}></div>
          </div>
          
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'auto' }}>
              <h3 style={{ fontSize: '1.1rem' }}>Data intelligence</h3>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>Turn data into actionable insights</p>
            <div style={{ height: '80px', background: 'linear-gradient(to top, #dcfce7, transparent)', borderRadius: '8px' }}></div>
          </div>

          <div className="card card-dark">
            <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--accent-lime)', borderRadius: '50%', marginBottom: '32px' }}></div>
            <h3 style={{ fontSize: '1.2rem', lineHeight: 1.4 }}>
              Where data meets strategy, <span style={{ color: 'var(--accent-lime)' }}>transformation</span> happens.
            </h3>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'auto' }}>
              <h3 style={{ fontSize: '1.1rem' }}>Automation</h3>
              <span style={{ width: '24px', height: '24px', border: '1px solid #ccc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</span>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>Smarter workflows, better outcomes</p>
            <div style={{ height: '80px', background: 'linear-gradient(to top, #ede9fe, transparent)', borderRadius: '8px' }}></div>
          </div>
        </div>

        <section className="section">
          <div style={{ display: 'flex', gap: '64px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--text-gray)', marginBottom: '24px' }}>• ABOUT US</div>
              <h2>
                A global partner focused on building <span style={{ color: 'var(--primary-color)' }}>smarter</span> and more <span style={{ color: 'var(--accent-purple)' }}>adaptive</span> businesses.
              </h2>
            </div>
            <div style={{ flex: 1, paddingTop: '32px' }}>
              <p style={{ marginBottom: '24px' }}>
                We combine deep industry expertise with cutting-edge AI and analytics to help you move faster, operate smarter, and grow with confidence.
              </p>
              <a href="#" style={{ color: 'var(--text-dark)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Learn more about us <span style={{ fontSize: '1.2rem' }}>→</span>
              </a>
            </div>
          </div>

          <div className="stats-grid">
            <div className="card" style={{ background: '#f8fafc' }}>
              <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--primary-color)' }}>
                <span>⬡</span>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Solutions</p>
              <h3 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px' }}>25+</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>End-to-end solutions tailored to your needs</p>
            </div>

            <div className="card card-lime">
              <div style={{ width: '40px', height: '40px', background: 'rgba(0,0,0,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span>📈</span>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Client satisfaction</p>
              <h3 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px' }}>98%</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>Average satisfaction across all projects</p>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" alt="Building" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: 'var(--primary-color)', color: 'white', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>150+</div>
                <div style={{ fontSize: '0.8rem' }}>Successful transformations</div>
              </div>
            </div>

            <div className="card" style={{ background: '#f8fafc' }}>
              <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--text-gray)' }}>
                <span>📅</span>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Years of experience</p>
              <h3 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px' }}>12+</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>Helping businesses navigate change</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
