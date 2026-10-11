import { useState } from 'react';
import './index.css';

interface Project {
  title: string;
  role: string;
  description: string;
  image: string;
  tags: string[];
}

interface Category {
  id: string;
  title: string;
  tag: string;
  icon: string;
  count: string;
  coverImage: string;
  summary: string;
  skills: string[];
  projects: Project[];
}

const CATEGORIES: Category[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    tag: 'UI/UX',
    icon: '🎨',
    count: '3 Projects',
    coverImage: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800',
    summary: 'Crafting intuitive user journeys, wireframes, and high-fidelity interactive prototypes focused on seamless human-centered experiences.',
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    projects: [
      {
        title: 'Fintech Mobile App Redesign',
        role: 'User Interface & Experience',
        description: 'Complete redesign of mobile banking flows, simplifying wallet onboarding and transaction tracking with clear micro-interactions.',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800',
        tags: ['Figma', 'Mobile App', 'Fintech', 'Design System']
      },
      {
        title: 'EduLearn Student Portal',
        role: 'Product UX Design',
        description: 'Comprehensive web portal designed for university students to track course progress, schedules, and assignment submissions seamlessly.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
        tags: ['Web App', 'Accessibility', 'User Journey', 'Wireframing']
      },
      {
        title: 'EcoMarket Checkout Flow',
        role: 'E-commerce UI Design',
        description: 'Optimized checkout experience focusing on reducing cart abandonment rates through clear progress steps and transparent order summaries.',
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
        tags: ['E-Commerce', 'Usability Testing', 'Prototyping']
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Front-End Development',
    tag: 'Front-End',
    icon: '💻',
    count: '3 Projects',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    summary: 'Transforming designs into responsive, robust web applications using modern JavaScript/TypeScript, component architecture, and clean code.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'REST APIs'],
    projects: [
      {
        title: 'Interactive Analytics Dashboard',
        role: 'React & Data Visualization',
        description: 'Real-time performance metrics dashboard with dynamic filterable charts, KPI widgets, and responsive dark/light mode.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        tags: ['React', 'TypeScript', 'Chart.js', 'Tailwind']
      },
      {
        title: 'Portfolio & Personal Brand Web',
        role: 'Frontend Engineering',
        description: 'Modern developer portfolio built with Vite, React, smooth micro-animations, glassmorphism aesthetics, and fast load speeds.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
        tags: ['React', 'Vite', 'CSS Architecture', 'Responsive']
      },
      {
        title: 'Collaborative Kanban Task Board',
        role: 'Web Application',
        description: 'Drag-and-drop productivity web app enabling agile task tracking, column status organization, and local storage state persistence.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
        tags: ['JavaScript', 'HTML5 DnD', 'Component State']
      }
    ]
  },
  {
    id: 'business-analysis',
    title: 'Business Analysis',
    tag: 'Business Analysis',
    icon: '📊',
    count: '3 Projects',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    summary: 'Bridging business goals and technology through process modeling, requirement specifications (SRS), BPMN diagrams, and system flow analysis.',
    skills: ['BPMN 2.0', 'System Analysis', 'SRS Documentation', 'Process Mapping', 'Use Case Modeling'],
    projects: [
      {
        title: 'ERP Procurement Process Optimization',
        role: 'Process Re-engineering',
        description: 'Conducted end-to-end analysis of corporate purchasing workflow, eliminating departmental bottlenecks and cutting approval cycle times by 35%.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        tags: ['BPMN', 'Workflow Optimization', 'Enterprise Systems']
      },
      {
        title: 'Campus Academic Services SRS',
        role: 'System Requirements Specification',
        description: 'Authored exhaustive Software Requirements Specification document, use case diagrams, and functional matrix for student administration modules.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
        tags: ['SRS', 'UML', 'Functional Requirements', 'UNTAR']
      },
      {
        title: 'Retail Inventory Flow Blueprint',
        role: 'Business Solution Architecture',
        description: 'Mapped multi-store inventory fulfillment processes, designing automated stock reconciliation logic to prevent stockouts and shrinkage.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        tags: ['Data Flow', 'Gap Analysis', 'Inventory Management']
      }
    ]
  }
];

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const selectedCategory = CATEGORIES.find((cat) => cat.id === selectedCategoryId);

  return (
    <div className="app">
      {/* Background Gradients */}
      <div className="bg-gradient bg-top-right"></div>
      <div className="bg-gradient bg-bottom-left"></div>

      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            LM<span className="dot">.</span>
          </div>
          <div className="nav-links">
            <a href="#categories">Categories</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="btn-secondary" style={{ textDecoration: 'none' }}>
            Let's talk <span className="arrow">↗</span>
          </a>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Hi, I'm<br />
              <span className="highlight">Leticia Michelle.</span>
            </h1>
            <p className="subtitle">
              Information System Student at<br />
              <strong>Universitas Tarumanagara</strong>
            </p>
            <p className="description">
              I specialize in bridging business needs with seamless digital experiences through <strong>UI/UX Design</strong>, <strong>Front-End Development</strong>, and <strong>Business Analysis</strong>.
            </p>
            
            <div className="hero-actions">
              <a href="#categories" className="btn-primary" style={{ textDecoration: 'none' }}>
                Explore Categories <span className="arrow">→</span>
              </a>
              <a href="#experience" className="btn-outline" style={{ textDecoration: 'none' }}>
                My journey <span style={{ marginLeft: '4px' }}>🚀</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-image-container">
              <img src="/fotomici.png" alt="Leticia Michelle" className="profile-image" />
              <div className="availability-card glass-card">
                <div className="status">
                  <span className="status-dot"></span> Available for projects
                </div>
                <p>Always open to exciting opportunities in <strong>UI/UX & Tech.</strong></p>
                <button className="btn-text">
                  <span className="icon-circle">↓</span> Download CV
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Showcase Section */}
        <section className="work" id="categories">
          <div className="work-header">
            <div>
              <span className="section-label">PORTFOLIO DOMAINS</span>
              <h2>
                {selectedCategory ? `${selectedCategory.title} Projects` : 'Project Categories'}
              </h2>
              <p className="section-desc">
                {selectedCategory
                  ? `Browse specific projects and case studies under ${selectedCategory.title}.`
                  : 'Select a category below to explore curated case studies, systems, and applications.'}
              </p>
            </div>
            {selectedCategory && (
              <button
                className="btn-outline-small"
                onClick={() => setSelectedCategoryId(null)}
              >
                ← Back to All Categories
              </button>
            )}
          </div>

          {/* If a category is selected: Show category pill navigation & its projects */}
          {selectedCategory ? (
            <div className="category-detail-view">
              {/* Category Quick Filter Tabs */}
              <div className="category-tabs">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    className={`category-tab-btn ${cat.id === selectedCategoryId ? 'active' : ''}`}
                    onClick={() => setSelectedCategoryId(cat.id)}
                  >
                    <span>{cat.icon}</span> {cat.title}
                  </button>
                ))}
              </div>

              {/* Projects Grid for Selected Category */}
              <div className="projects-grid">
                {selectedCategory.projects.map((project, idx) => (
                  <div className="project-card" key={idx}>
                    <div className="project-image-container">
                      <img src={project.image} alt={project.title} />
                      <span className="tag glass-tag">{selectedCategory.tag}</span>
                    </div>
                    <div className="project-info-container">
                      <div className="project-header">
                        <h3>{project.title}</h3>
                        <p className="project-role">{project.role}</p>
                      </div>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="skill-pill">{tag}</span>
                        ))}
                      </div>
                      <button className="project-explore-btn">
                        View Details <span className="arrow">↗</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Main Categories Grid */
            <div className="categories-grid">
              {CATEGORIES.map((category) => (
                <div
                  className="category-card"
                  key={category.id}
                  onClick={() => setSelectedCategoryId(category.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedCategoryId(category.id);
                    }
                  }}
                >
                  <div className="category-image-container">
                    <img src={category.coverImage} alt={category.title} />
                    <span className="tag glass-tag">{category.tag}</span>
                    <span className="count-tag">{category.count}</span>
                  </div>

                  <div className="category-content">
                    <div className="category-title-row">
                      <span className="category-icon">{category.icon}</span>
                      <h3>{category.title}</h3>
                    </div>

                    <p className="category-summary">{category.summary}</p>

                    <div className="category-skills-wrap">
                      <span className="skills-label">Core Focus:</span>
                      <div className="category-skills">
                        {category.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="skill-pill">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="category-footer">
                      <span className="explore-text">Explore {category.title}</span>
                      <span className="category-arrow-btn">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Work Experience */}
        <section className="experience" id="experience">
          <div className="work-header">
            <div>
              <span className="section-label">CAREER JOURNEY</span>
              <h2>Work Experience</h2>
            </div>
          </div>
          
          <div className="timeline-horizontal">
            <div className="timeline-item-h">
              <div className="timeline-marker-h"></div>
              <div className="timeline-content-h">
                <span className="timeline-date-h">2024 - Present</span>
                <h3>UI/UX Designer</h3>
                <p>University Tech Organization</p>
              </div>
            </div>
            
            <div className="timeline-item-h">
              <div className="timeline-marker-h"></div>
              <div className="timeline-content-h">
                <span className="timeline-date-h">2023 - 2024</span>
                <h3>Front-End Developer Intern</h3>
                <p>Startup Digital Agency</p>
              </div>
            </div>
            
            <div className="timeline-item-h">
              <div className="timeline-marker-h"></div>
              <div className="timeline-content-h">
                <span className="timeline-date-h">2023</span>
                <h3>Business Analyst Project</h3>
                <p>Information Systems Coursework</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="testimonial">
          <div className="quote-mark">“</div>
          <p className="quote">
            Leticia brings a rare combination of technical skills and design sensibility. She understands both the code and the user.
          </p>
          <div className="author">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Dr. Handoko" />
            <div>
              <h4>Dr. Handoko</h4>
              <p>Professor, UNTAR</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer" id="contact">
          <h2>
            Let's connect and build<br />
            something amazing together.
          </h2>
          <div className="contact-info">
            <p><strong>Email:</strong> leticiamichelle@example.com</p>
            <p><strong>WhatsApp:</strong> +62 812-3456-7890</p>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
            <a href="mailto:leticiamichelle@example.com" title="Email">✉</a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" title="WhatsApp">WA</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
