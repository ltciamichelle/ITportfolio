import { useState, useEffect, useRef } from 'react';
import './index.css';

interface ProjectLink {
  label: string;
  url?: string;
  icon?: string;
}

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
  businessQuestion?: string;
  keyFindings?: string[];
  recommendation?: string;
  steps?: string[];
  limits?: string;
  links?: ProjectLink[];
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
  description?: string;
  bullets?: string[];
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
      'Conducted business analysis to identify core challenges and strategic opportunities within the case.',
      'Applied key business frameworks to structure analysis and formulate a robust solution.',
      'Developed a comprehensive financial projection model to validate the business’s feasibility and potential profitability.',
      'Designed and delivered a persuasive pitch presentation to a panel of industry-expert judges.'
    ],
    tags: ['Business Case', 'Strategic Analysis', 'Innovation', 'Team Tarawangsa'],
    icon: '🏆'
  },
  {
    title: 'Bizznovation BPC & UI/UX Competition',
    category: 'Competition',
    organizer: 'Universitas Pradita (HIMSI & HIMMA)',
    date: 'Apr - May 2026',
    award: '🏅 7th Ranked Finalist',
    team: 'Team UCCD_SixSeven',
    image: '/serti bizzno.jpg',
    description: 'Achieved 7th Rank with Team UCCD_SixSeven in Bizznovation (BIZZNO) 2026, a Business Plan Competition (BPC) and UI/UX competition organized by Universitas Pradita themed "Turning Vision Into Solution".',
    bullets: [
      'Ranked 7th nationally among university participants in digital business strategy and UI/UX product innovation.',
      'Formulated an end-to-end business proposal with market validation and strategic value proposition.',
      'Designed user-centric, high-fidelity UI/UX wireframes and interactive prototypes.',
      'Pitched the business model, UX architecture, and feasibility to the panel of judges.'
    ],
    tags: ['Business Plan (BPC)', 'UI/UX Design', 'Universitas Pradita', 'UCCD_SixSeven', 'Product Strategy'],
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
        category: 'SEO and Website Traffic',
        bullets: [
          'Grew Google clicks for consecutive months',
          'Improved average search position by 1.7 ranks in September',
          'Raised website active users by 47.5% at the August peak',
          'Increased views on top product comparison pages by 64.5% month over month'
        ]
      },
      {
        category: 'Social Media',
        bullets: [
          'Earned 330 content interactions across August and September',
          'Reached a 153.1% month-over-month engagement jump with a video-focused strategy'
        ]
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
    skills: ['Figma', 'UX Research', 'Maze', 'Design System', 'Agile Methodology'],
    projects: [
      {
        title: 'MOODAL',
        role: 'Mobile UI/UX Design',
        description: 'Bantu Bisnis Sesuai Kebutuhan-mu — Financial and business management mobile app for MSMEs featuring cash flow monitoring, automated receipt scanning, smart business analytics, and an interactive business assistant.',
        image: '/MOODAL.jpg',
        tags: ['Figma', 'UX Research', 'Maze', 'Design System', 'Agile Methodology'],
        team: 'Leticia Michelle Purba, Carmen Jessalyn Tjong Malik, Kathleen Klavinka Kurniawan'
      },
      {
        title: 'KayuKita',
        role: 'Mobile UI/UX Design',
        description: 'Mendorong UMKM Sektor Kerajinan & Warisan Bangsa — Mobile marketplace platform connecting local Indonesian woodcraft artisans with customers through custom orders, artisan discovery, wood scanning, and maintenance guides.',
        image: '/Kayukita.jpg',
        tags: ['Figma', 'UX Research', 'Maze', 'Design System', 'Agile Methodology'],
        team: 'Leticia Michelle Purba, Carmen Jessalyn Tjong Malik, Kathleen Klavinka Kurniawan (UCCD_SixSeven)'
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Website Development',
    tag: 'Website Development',
    icon: '💻',
    count: '1 Project',
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
      }
    ]
  },
  {
    id: 'business-analysis',
    title: 'Business Analysis',
    tag: 'Business Analysis',
    icon: '📊',
    count: '2 Projects',
    coverImage: '/apple analysis new.png',
    summary: 'Bridging business goals and technology through financial performance dashboards, customer segmentation, process modeling, requirement specifications (SRS), BPMN diagrams, and data-driven insights.',
    skills: ['Power BI', 'Python (pandas)', 'Customer Segmentation', 'Google Colab', 'Financial Analysis', 'Data Visualization'],
    projects: [
      {
        title: 'Bank Customer Segmentation and Cross-Sell Opportunity Analysis',
        role: 'Business Analytics & Power BI',
        description: 'Segmented 10,000 bank customers by balance, age, and products, and found about 2,100 high-balance customers with only one product as the best cross-sell target.',
        image: '/bank churn predict.jpg',
        tags: ['Python (pandas)', 'Google Colab', 'Power BI'],
        businessQuestion: 'Which customers hold the most value, and who should the bank offer more products to?',
        keyFindings: [
          'Top 20% hold about 40% of balances',
          '36% have a zero balance',
          'About 2,100 cross-sell targets'
        ],
        bullets: [
          'Top 20% hold about 40% of balances',
          '36% have a zero balance',
          'About 2,100 cross-sell targets'
        ],
        recommendation: 'Offer a second product to this group first, and test on a small sample.',
        steps: [
          'Cleaned the data in Python',
          'Built segments',
          'Built the dashboard in Power BI',
          'Validated the numbers'
        ],
        limits: 'No churn, income, or activity data, so this shows who to test, not what will work.',
        links: [
          { label: 'Notebook', url: '#', icon: '📓' },
          { label: 'Dashboard PDF', url: '#', icon: '📄' },
          { label: 'Dataset source', url: '#', icon: '📊' }
        ]
      },
      {
        title: 'Apple Inc. Financial Health Dashboard',
        role: 'Power BI Dashboard',
        description: 'Built a Power BI dashboard on 17 years of Apple SEC 10-K data (FY2009 to FY2025). Cleaned the data with an AI agent, calculated key ratios, and found strong growth, better margins, and rising leverage.',
        image: '/apple analysis new.png',
        tags: ['Power BI', 'Python (Pandas)', 'Financial Analysis']
      }
    ]
  }
];

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeModalActivity, setActiveModalActivity] = useState<Activity | null>(null);
  const [activeModalExperience, setActiveModalExperience] = useState<Experience | null>(null);
  const [activityFilter, setActivityFilter] = useState<'All' | 'Bootcamp' | 'Competition'>('All');

  // Prevent background scroll and allow ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
        setActiveModalActivity(null);
        setActiveModalExperience(null);
      }
    };

    if (activeModalProject || activeModalActivity || activeModalExperience) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject, activeModalActivity, activeModalExperience]);

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
      {/* Background Ambient Glows & Shooting Stars System */}
      <div className="bg-gradient-base" aria-hidden="true"></div>
      <div className="bg-hero-glow" aria-hidden="true"></div>
      <div className="bg-corner-glow" aria-hidden="true"></div>
      <div className="static-stars-layer" aria-hidden="true"></div>
      <div className="bg-stars-layer" aria-hidden="true">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

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
            <div className="nav-links">
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
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
              I specialize in bridging business needs with seamless digital experiences through <strong>UI/UX Design</strong>, <strong>Website Development</strong>, and <strong>Business Analysis</strong>.
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
                      {project.businessQuestion && (
                        <div className="card-question-box">
                          <strong>Business Question:</strong> {project.businessQuestion}
                        </div>
                      )}
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
            {EXPERIENCES.map((exp, idx) => {
              const hasDetails = Boolean((exp.highlights && exp.highlights.length > 0) || (exp.tools && exp.tools.length > 0));
              return (
                <div className={`timeline-item-h ${hasDetails ? 'has-details' : ''}`} key={idx}>
                  <div className="timeline-marker-h"></div>
                  <div
                    className="timeline-content-h"
                    onClick={() => {
                      if (hasDetails) setActiveModalExperience(exp);
                    }}
                  >
                    <span className="timeline-date-h">{exp.period}</span>
                    <h3>{exp.role}</h3>
                    <p className="timeline-company-h">{exp.company}{exp.type ? ` · ${exp.type}` : ''}</p>

                    {/* Mobile View Detail Button & Preview */}
                    {hasDetails && (
                      <div className="timeline-mobile-detail-trigger">
                        {exp.highlights && (
                          <div className="timeline-mobile-pills">
                            {exp.highlights.map((h, hIdx) => (
                              <span key={hIdx} className="timeline-mobile-pill">
                                {h.category}
                              </span>
                            ))}
                          </div>
                        )}
                        <button
                          type="button"
                          className="timeline-view-detail-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveModalExperience(exp);
                          }}
                        >
                          View Details <span className="arrow">↗</span>
                        </button>
                      </div>
                    )}

                    {/* Desktop Highlights */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="timeline-highlights">
                        {exp.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="timeline-highlight-item">
                            <h4 className="timeline-highlight-title">
                              <span className="timeline-highlight-bullet">▸</span> {item.category}
                            </h4>
                            {item.description && <p className="timeline-highlight-desc">{item.description}</p>}
                            {item.bullets && (
                              <ul className="timeline-highlight-bullets">
                                {item.bullets.map((bullet, bIdx) => (
                                  <li key={bIdx}>{bullet}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Desktop Tools */}
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
              );
            })}
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



        {/* Footer */}
        <footer className="footer" id="contact">
          <h2>
            Let's connect and build<br />
            something amazing together.
          </h2>
          <div className="contact-info">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:leticiamici04@gmail.com">leticiamici04@gmail.com</a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/6281319459356" target="_blank" rel="noreferrer">
                081319459356
              </a>
            </p>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/ltciamichelle"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              gh
            </a>
            <a
              href="https://www.linkedin.com/in/leticia-michelle-purba-516628215"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="mailto:leticiamici04@gmail.com"
              title="Email"
              aria-label="Email"
            >
              ✉
            </a>
            <a
              href="https://wa.me/6281319459356"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              WA
            </a>
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

              {activeModalProject.businessQuestion && (
                <div className="modal-section-card business-question-card">
                  <div className="section-card-header">
                    <span className="section-card-icon">🎯</span>
                    <h4>Business Question</h4>
                  </div>
                  <p>{activeModalProject.businessQuestion}</p>
                </div>
              )}

              {activeModalProject.keyFindings && (
                <div className="modal-section-card">
                  <div className="section-card-header">
                    <span className="section-card-icon">💡</span>
                    <h4>Key Findings</h4>
                  </div>
                  <ul className="activity-bullets" style={{ margin: '6px 0 2px 0' }}>
                    {activeModalProject.keyFindings.map((finding, idx) => (
                      <li key={idx}>{finding}</li>
                    ))}
                  </ul>
                </div>
              )}

              {!activeModalProject.keyFindings && activeModalProject.bullets && (
                <ul className="activity-bullets" style={{ margin: '12px 0 16px 0' }}>
                  {activeModalProject.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}

              {activeModalProject.recommendation && (
                <div className="modal-section-card recommendation-card">
                  <div className="section-card-header">
                    <span className="section-card-icon">🚀</span>
                    <h4>Strategic Recommendation</h4>
                  </div>
                  <p>{activeModalProject.recommendation}</p>
                </div>
              )}

              {activeModalProject.steps && (
                <div className="modal-section-card">
                  <div className="section-card-header">
                    <span className="section-card-icon">🛠️</span>
                    <h4>How I Built It</h4>
                  </div>
                  <div className="modal-steps-list">
                    {activeModalProject.steps.map((step, idx) => (
                      <div key={idx} className="modal-step-item">
                        <span className="step-number">{idx + 1}</span>
                        <span className="step-text">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeModalProject.limits && (
                <div className="modal-section-card limitations-card">
                  <div className="section-card-header">
                    <span className="section-card-icon">⚠️</span>
                    <h4>Project Scope & Limitations</h4>
                  </div>
                  <p>{activeModalProject.limits}</p>
                </div>
              )}

              {activeModalProject.links && activeModalProject.links.length > 0 && (
                <div className="modal-project-links">
                  <span className="project-links-label">Project Resources:</span>
                  <div className="project-links-buttons">
                    {activeModalProject.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url || '#'}
                        target={link.url && link.url !== '#' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="modal-resource-link"
                        onClick={(e) => {
                          if (!link.url || link.url === '#') {
                            e.preventDefault();
                          }
                        }}
                      >
                        <span>{link.icon || '🔗'}</span>
                        <span>{link.label}</span>
                        <span className="arrow">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-skills">
                <span style={{ alignSelf: 'center', marginRight: '4px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  Tools:
                </span>
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

      {/* Experience Detail Modal */}
      {activeModalExperience && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveModalExperience(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-content experience-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setActiveModalExperience(null)}
              aria-label="Close Modal"
            >
              ✕
            </button>

            <div className="modal-body">
              <div className="modal-title-row">
                <div style={{ paddingRight: '40px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <span className="modal-badge">{activeModalExperience.company}</span>
                    {activeModalExperience.type && (
                      <span className="activity-award-pill" style={{ alignSelf: 'center' }}>
                        💼 {activeModalExperience.type}
                      </span>
                    )}
                  </div>
                  <h2>{activeModalExperience.role}</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
                    📅 {activeModalExperience.period}
                  </p>
                </div>
              </div>

              {activeModalExperience.highlights && activeModalExperience.highlights.length > 0 && (
                <div className="modal-experience-highlights">
                  {activeModalExperience.highlights.map((item, idx) => (
                    <div key={idx} className="modal-section-card">
                      <div className="section-card-header">
                        <span className="section-card-icon">📈</span>
                        <h4>{item.category}</h4>
                      </div>
                      {item.description && <p>{item.description}</p>}
                      {item.bullets && (
                        <ul className="activity-bullets" style={{ margin: '8px 0 0 0' }}>
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeModalExperience.tools && activeModalExperience.tools.length > 0 && (
                <div className="modal-skills" style={{ marginTop: '8px' }}>
                  <span style={{ alignSelf: 'center', marginRight: '4px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Tools Used:
                  </span>
                  {activeModalExperience.tools.map((tool, idx) => (
                    <span key={idx} className="skill-pill">{tool}</span>
                  ))}
                </div>
              )}
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
