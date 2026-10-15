import { useState, useEffect, useRef } from 'react';
import './index.css';

interface Project {
  title: string;
  role: string;
  description: string;
  image: string;
  tags: string[];
  team?: string;
  githubUrl?: string;
  liveUrl?: string;
  bullets?: string[];
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

interface ExperienceHighlight {
  category: string;
  description: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  type?: string;
  highlights?: ExperienceHighlight[];
  tools?: string[];
}

interface Activity {
  title: string;
  category: 'Bootcamp' | 'Competition';
  organizer: string;
  date: string;
  award?: string;
  description: string;
  tags: string[];
  icon: string;
  image?: string;
  bullets?: string[];
  team?: string;
}

const ACTIVITIES: Activity[] = [
  {
    title: 'Arthavisi Business Case Competition',
    category: 'Competition',
    organizer: 'Future Forward Arthavisi (Investment Club)',
    date: 'Jun 2025',
    award: '🏆 3rd Place Winner',
    team: 'Team Tarawangsa',
    image: '/arthavisi.jpg',
    description: 'Awarded 3rd Place Winner with Team Tarawangsa in the national Future Forward Arthavisi 2025 business case competition themed "Driving Competitiveness Through Innovation".',
    bullets: [
      'Represented Team Tarawangsa in national business case competition',
      'Formulated competitive market growth strategies & business innovation roadmaps',
      'Awarded 3rd Place Winner trophy and official certificate on 26 June 2025'
    ],
    tags: ['Business Case', 'Strategic Analysis', 'Innovation', 'Team Tarawangsa'],
    icon: '🏆'
  },
  {
    title: 'SxCelerate Mentee Start-Up Path',
    category: 'Bootcamp',
    organizer: 'StudentsxCEOs Jakarta Chapter',
    date: 'Jul 2025',
    award: '⭐ Top 50 of 300+ Applicants',
    image: '/sxc.jpg',
    description: 'Selected mentee for the startup acceleration path, collaborating on business plan analysis and digital SME venture creation.',
    bullets: [
      'Selected as top 50 of 300+ applicants',
      'Collaborated in a team of 5 on business plan and real business case analysis to explore market growth strategies',
      'Co-created “BizGrow” a sales tracking app concept for SMEs as our capstone project',
      'Guided by mentors from top company and big 4 consultants'
    ],
    tags: ['Start-Up Incubation', 'BizGrow SME App', 'Market Growth', 'Consulting'],
    icon: '🚀'
  }
];

const EXPERIENCES: Experience[] = [
  {
    role: 'Growth and Marketing Intern',
    company: 'ILATech Indonesia',
    type: 'Internship',
    period: 'Jul 2026 - Sep 2026',
    highlights: [
      {
        category: 'SEO Optimization & Web Traffic',
        description: 'Directed targeted search initiatives that yielded consecutive monthly Google click growth and improved average search positioning by 1.7 ranks in September. Leveraged high-intent educational queries to capture a 47.5% increase in website active users during the August peak and drove a 64.5% month-over-month view increase for top-performing product comparison pages.'
      },
      {
        category: 'Social Media',
        description: 'Drove 330 total content interactions across August and September through a targeted video strategy, yielding a peak 153.1% month-over-month engagement surge.'
      }
    ],
    tools: ['Meta Business Suite', 'Google Analytics', 'Google Search Console']
  },
  {
    role: 'Creative Designer Freelance',
    company: 'Sinar Mas Land',
    period: 'Mar 2026 - Sep 2026',
  }
];

const CATEGORIES: Category[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    tag: 'UI/UX',
    icon: '🎨',
    count: '2 Projects',
    coverImage: '/MOODAL.jpg',
    summary: 'Crafting intuitive user journeys, wireframes, and high-fidelity interactive prototypes designed to solve real business challenges for Indonesian MSMEs.',
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Mobile App Design', 'Usability Testing'],
    projects: [
      {
        title: 'MOODAL',
        role: 'Mobile UI/UX Design',
        description: 'Bantu Bisnis Sesuai Kebutuhan-mu — Financial and business management mobile app for MSMEs featuring cash flow monitoring, automated receipt scanning, smart business analytics, and an interactive business assistant.',
        image: '/MOODAL.jpg',
        tags: ['Figma', 'Mobile App', 'Fintech / MSME', 'User Research'],
        team: 'Leticia Michelle Purba, Carmen Jessalyn Tjong Malik, Kathleen Klavinka Kurniawan'
      },
      {
        title: 'KayuKita',
        role: 'Mobile UI/UX Design',
        description: 'Mendorong UMKM Sektor Kerajinan & Warisan Bangsa — Mobile marketplace platform connecting local Indonesian woodcraft artisans with customers through custom orders, artisan discovery, wood scanning, and maintenance guides.',
        image: '/Kayukita.jpg',
        tags: ['Figma', 'Mobile App', 'Marketplace / UMKM', 'Design System'],
        team: 'Leticia Michelle Purba, Carmen Jessalyn Tjong Malik, Kathleen Klavinka Kurniawan (UCCD_SixSeven)'
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Front-End Development',
    tag: 'Front-End',
    icon: '💻',
    count: '4 Projects',
    coverImage: '/Real-Time ISS Tracking Dashboard.png',
    summary: 'Transforming designs into responsive, robust web applications using modern JavaScript/TypeScript, component architecture, and clean code.',
    skills: ['HTML5 / CSS3', 'JavaScript', 'React', 'Leaflet.js', 'REST APIs'],
    projects: [
      {
        title: 'ISS Live Tracker',
        role: 'Real-Time Web Application',
        description: 'A real-time web app that shows where the International Space Station is right now. It fetches live coordinates from a public API every 5 seconds, plots them on a world map, and draws the station’s recent path. I built it to practice real-time data handling, API integration, and turning raw numbers into a simple visual. Built with HTML, CSS, JavaScript, and Leaflet, using an AI coding agent to speed up development.',
        image: '/ISS Tracker.png',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Leaflet.js', 'REST API', 'Real-Time Data'],
        githubUrl: 'https://github.com/ltciamichelle/ISS-Live-Tracker',
        liveUrl: 'https://ltciamichelle.github.io/ISS-Live-Tracker/'
      },
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
    count: '4 Projects',
    coverImage: '/Apple analysis.jpg',
    summary: 'Bridging business goals and technology through financial performance dashboards, process modeling, requirement specifications (SRS), BPMN diagrams, and data-driven insights.',
    skills: ['Financial Analysis', 'BPMN 2.0', 'System Analysis', 'SRS Documentation', 'Process Mapping', 'SEC 10-K Filings'],
    projects: [
      {
        title: 'Apple Inc. Financial Health Dashboard',
        role: 'Financial Performance & SEC 10-K Analysis',
        description: 'Comprehensive 15-year financial performance dashboard (FY2009–FY2025) analyzing Apple Inc. based on official SEC 10-K filings. Evaluates long-term revenue growth ($43B to $416B), net profit trajectory ($8B to $112B), gross margin expansion to 46.9%, and capital structure shifts.',
        bullets: [
          'Strong Long-Term Growth: Revenue grew from $43B (FY2009) to $416B (FY2025) at ~15% per year, while net income surged from $8B to $112B.',
          'Better Margins: Gross margin rose from 40% to 46.9% and net margin improved from 19% to 27%, retaining superior profit per dollar of sales.',
          'Capital Leverage & Equity: Liabilities-to-equity ratio moved from 0.5 to 3.9 (peaking at 6.0 in FY2022) as equity decreased from $134B to $74B due to disciplined share repurchases.',
          'Data Synthesis: Structured multi-year SEC 10-K filing metrics into visual trend charts, profitability indicators, and executive financial insights.'
        ],
        image: '/Apple analysis.jpg',
        tags: ['Financial Analysis', 'SEC 10-K', 'Business Intelligence', 'Data Dashboard', 'Ratio & Trend Analysis', 'Apple Inc.']
      },
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
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeModalActivity, setActiveModalActivity] = useState<Activity | null>(null);
  const [activityFilter, setActivityFilter] = useState<'All' | 'Bootcamp' | 'Competition'>('All');

  // Smooth scroll and active section states
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Timeline horizontal drag & controls
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const winScroll = window.scrollY || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolledPercent = docHeight > 0 ? (winScroll / docHeight) * 100 : 0;
          setScrollProgress(Math.min(100, Math.max(0, scrolledPercent)));
          setIsScrolled(winScroll > 30);
          setShowBackToTop(winScroll > 320);

          // Detect active section based on scroll offset
          const sections = ['about', 'categories', 'experience', 'activities', 'contact'];
          const triggerPoint = winScroll + 160;
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && triggerPoint >= el.offsetTop) {
              setActiveSection(sections[i]);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (!timelineRef.current) return;
    const scrollAmount = 400;
    timelineRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleTimelineMouseDown = (e: React.MouseEvent) => {
    if (!timelineRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.pageX - timelineRef.current.offsetLeft;
    dragScrollLeft.current = timelineRef.current.scrollLeft;
  };

  const handleTimelineMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !timelineRef.current) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    timelineRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleTimelineMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const selectedCategory = CATEGORIES.find((cat) => cat.id === selectedCategoryId);
  const filteredActivities = activityFilter === 'All'
    ? ACTIVITIES
    : ACTIVITIES.filter((act) => act.category === activityFilter);

  return (
    <div className="app">
      {/* Background Gradients */}
      <div className="bg-gradient bg-top-right"></div>
      <div className="bg-gradient bg-bottom-left"></div>
      <div className="bg-gradient bg-mid-glow"></div>

      {/* Top Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Sticky Floating Glass Navbar */}
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <a
              href="#about"
              className="logo"
              onClick={(e) => handleNavClick(e, 'about')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              LM<span className="dot">.</span>
            </a>
            <div className="nav-links">
              <a
                href="#categories"
                className={activeSection === 'categories' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'categories')}
              >
                Categories
              </a>
              <a
                href="#experience"
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'experience')}
              >
                Experience
              </a>
              <a
                href="#activities"
                className={activeSection === 'activities' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'activities')}
              >
                Activities
              </a>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </div>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => handleNavClick(e, 'contact')}
              style={{ textDecoration: 'none' }}
            >
              Let's talk <span className="arrow">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <div className="container">
        {/* Hero Section */}
        <section className="hero" id="about">
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
              <a
                href="#categories"
                className="btn-primary"
                onClick={(e) => handleNavClick(e, 'categories')}
                style={{ textDecoration: 'none' }}
              >
                Explore Categories <span className="arrow">→</span>
              </a>
              <a
                href="#experience"
                className="btn-outline"
                onClick={(e) => handleNavClick(e, 'experience')}
                style={{ textDecoration: 'none' }}
              >
                My journey <span style={{ marginLeft: '4px' }}>🚀</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-image-container">
              <img src="/fotomici.png" alt="Leticia Michelle" className="profile-image" />
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
                  <div
                    className="project-card"
                    key={idx}
                    onClick={() => setActiveModalProject(project)}
                    role="button"
                    tabIndex={0}
                    style={{ cursor: 'pointer' }}
                  >
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
                      {project.team && (
                        <p className="project-team">
                          <strong>Team:</strong> {project.team}
                        </p>
                      )}
                      {project.bullets && (
                        <ul className="activity-bullets" style={{ margin: '8px 0 12px 0' }}>
                          {project.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      <div className="project-tags">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="skill-pill">{tag}</span>
                        ))}
                      </div>
                      <div className="project-actions">
                        <button
                          className="project-explore-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveModalProject(project);
                          }}
                        >
                          View Details <span className="arrow">↗</span>
                        </button>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-action-link primary"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live Demo <span className="arrow">↗</span>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-action-link github"
                            onClick={(e) => e.stopPropagation()}
                          >
                            GitHub <span className="arrow">↗</span>
                          </a>
                        )}
                      </div>
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
            <div className="timeline-nav-group">
              <button
                className="timeline-arrow-btn"
                onClick={() => scrollTimeline('left')}
                aria-label="Scroll experience left"
                title="Scroll left"
              >
                ←
              </button>
              <button
                className="timeline-arrow-btn"
                onClick={() => scrollTimeline('right')}
                aria-label="Scroll experience right"
                title="Scroll right"
              >
                →
              </button>
            </div>
          </div>

          <div
            className={`timeline-horizontal ${isDragging ? 'is-dragging' : ''}`}
            ref={timelineRef}
            onMouseDown={handleTimelineMouseDown}
            onMouseMove={handleTimelineMouseMove}
            onMouseUp={handleTimelineMouseUpOrLeave}
            onMouseLeave={handleTimelineMouseUpOrLeave}
          >
            {EXPERIENCES.map((exp, idx) => (
              <div className="timeline-item-h" key={idx}>
                <div className="timeline-marker-h"></div>
                <div className="timeline-content-h">
                  <span className="timeline-date-h">{exp.period}</span>
                  <h3>{exp.role}</h3>
                  <p className="timeline-company-h">{exp.company}{exp.type ? ` · ${exp.type}` : ''}</p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="timeline-highlights">
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="timeline-highlight-item">
                          <h4 className="timeline-highlight-title">
                            <span className="timeline-highlight-bullet">▸</span> {item.category}
                          </h4>
                          <p className="timeline-highlight-desc">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.tools && exp.tools.length > 0 && (
                    <div className="timeline-tools-wrap">
                      <span className="timeline-tools-label">Tools used</span>
                      <div className="timeline-tools-list">
                        {exp.tools.map((tool, tIdx) => (
                          <span key={tIdx} className="skill-pill">{tool}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activities (Bootcamps & Competitions) */}
        <section className="activities" id="activities">
          <div className="work-header">
            <div>
              <span className="section-label">GROWTH & ACHIEVEMENTS</span>
              <h2>Activities & Competitions</h2>
              <p className="section-desc">
                Hackathons, design championships, and specialized bootcamps where I hone my technical and design capabilities.
              </p>
            </div>
          </div>

          <div className="activities-tabs">
            <button
              className={`activity-tab-btn ${activityFilter === 'All' ? 'active' : ''}`}
              onClick={() => setActivityFilter('All')}
            >
              <span>⚡</span> All Activities ({ACTIVITIES.length})
            </button>
            <button
              className={`activity-tab-btn ${activityFilter === 'Competition' ? 'active' : ''}`}
              onClick={() => setActivityFilter('Competition')}
            >
              <span>🏆</span> Competitions ({ACTIVITIES.filter((a) => a.category === 'Competition').length})
            </button>
            <button
              className={`activity-tab-btn ${activityFilter === 'Bootcamp' ? 'active' : ''}`}
              onClick={() => setActivityFilter('Bootcamp')}
            >
              <span>🎓</span> Bootcamps ({ACTIVITIES.filter((a) => a.category === 'Bootcamp').length})
            </button>
          </div>

          <div className="activities-grid">
            {filteredActivities.map((activity, idx) => (
              <div
                className="activity-card"
                key={idx}
                onClick={() => activity.image && setActiveModalActivity(activity)}
                style={{ cursor: activity.image ? 'pointer' : 'default' }}
              >
                {activity.image && (
                  <div
                    className="activity-card-image-wrap"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalActivity(activity);
                    }}
                  >
                    <img src={activity.image} alt={activity.title} className="activity-card-image" />
                    <span className="activity-card-image-badge">🔍 View Clear Image</span>
                  </div>
                )}

                <div className="activity-card-header">
                  <div className="activity-icon-badge">
                    <span>{activity.icon}</span>
                  </div>
                  <div className="activity-badges">
                    <span className={`activity-type-pill ${activity.category.toLowerCase()}`}>
                      {activity.category}
                    </span>
                    {activity.award && (
                      <span className="activity-award-pill">
                        {activity.award}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="activity-title">{activity.title}</h3>
                <div className="activity-meta">
                  <span>{activity.organizer}</span>
                  <span className="dot-sep">•</span>
                  <span>{activity.date}</span>
                </div>

                {activity.team && (
                  <div className="activity-team-row">
                    <span>👥</span>
                    <span><strong>Team:</strong> {activity.team}</span>
                  </div>
                )}

                <p className="activity-desc">{activity.description}</p>

                {activity.bullets && (
                  <ul className="activity-bullets">
                    {activity.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                )}

                <div className="activity-tags">
                  {activity.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="skill-pill">{tag}</span>
                  ))}
                </div>

                {activity.image && (
                  <button
                    className="project-explore-btn"
                    style={{ marginTop: '14px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalActivity(activity);
                    }}
                  >
                    View Clear Photo / Certificate <span className="arrow">↗</span>
                  </button>
                )}
              </div>
            ))}
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
            <p><strong>Email:</strong> leticiamici04@gmail.com</p>
            <p><strong>WhatsApp:</strong> +62 812-3456-7890</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/ltciamichelle" target="_blank" rel="noreferrer" title="GitHub">gh</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
            <a href="mailto:leticiamici04@gmail.com" title="Email">✉</a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" title="WhatsApp">WA</a>
          </div>
        </footer>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close Modal"
            >
              ✕
            </button>

            <div className="modal-image-wrap" style={{ position: 'relative' }}>
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="modal-image"
              />
              <a
                href={activeModalProject.image}
                target="_blank"
                rel="noopener noreferrer"
                className="activity-card-image-badge"
                style={{ textDecoration: 'none' }}
                title="Open full resolution in new tab"
              >
                🔍 Open Full Size
              </a>
            </div>

            <div className="modal-body">
              <div className="modal-title-row">
                <div>
                  <span className="modal-badge">{activeModalProject.role}</span>
                  <h2>{activeModalProject.title}</h2>
                </div>
              </div>

              {(activeModalProject.liveUrl || activeModalProject.githubUrl) && (
                <div className="modal-links-row">
                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link primary modal-action-btn"
                    >
                      <span>🌐</span> See the Tracker <span className="arrow">↗</span>
                    </a>
                  )}
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-btn github"
                    >
                      <span>💻</span> GitHub Repository <span className="arrow">↗</span>
                    </a>
                  )}
                </div>
              )}

              {activeModalProject.team && (
                <div className="modal-team-box">
                  <span className="team-icon">👥</span>
                  <div>
                    <strong>Project Team:</strong>
                    <p>{activeModalProject.team}</p>
                  </div>
                </div>
              )}

              <p className="modal-desc">{activeModalProject.description}</p>

              {activeModalProject.bullets && (
                <ul className="activity-bullets" style={{ margin: '12px 0 16px 0' }}>
                  {activeModalProject.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}

              <div className="modal-skills">
                {activeModalProject.tags.map((tag, idx) => (
                  <span key={idx} className="skill-pill">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Activity Detail Modal */}
      {activeModalActivity && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveModalActivity(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setActiveModalActivity(null)}
              aria-label="Close Modal"
            >
              ✕
            </button>

            {activeModalActivity.image && (
              <div className="modal-image-wrap">
                <img
                  src={activeModalActivity.image}
                  alt={activeModalActivity.title}
                  className="modal-image"
                />
              </div>
            )}

            <div className="modal-body">
              <div className="modal-title-row">
                <div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <span className="modal-badge">{activeModalActivity.category}</span>
                    {activeModalActivity.award && (
                      <span className="activity-award-pill" style={{ alignSelf: 'center' }}>
                        {activeModalActivity.award}
                      </span>
                    )}
                  </div>
                  <h2>{activeModalActivity.title}</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
                    {activeModalActivity.organizer} • {activeModalActivity.date}
                  </p>
                </div>
              </div>

              {activeModalActivity.team && (
                <div className="modal-team-box">
                  <span className="team-icon">👥</span>
                  <div>
                    <strong>Team:</strong>
                    <p>{activeModalActivity.team}</p>
                  </div>
                </div>
              )}

              <p className="modal-desc">{activeModalActivity.description}</p>

              {activeModalActivity.bullets && (
                <ul className="activity-bullets" style={{ margin: '8px 0' }}>
                  {activeModalActivity.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}

              <div className="modal-skills">
                {activeModalActivity.tags.map((tag, idx) => (
                  <span key={idx} className="skill-pill">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Back to Top Button */}
      <button
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Scroll to top"
      >
        <span className="back-to-top-arrow">↑</span>
      </button>
    </div>
  );
}

export default App;
