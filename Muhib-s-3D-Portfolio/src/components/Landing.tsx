import { PropsWithChildren } from "react";
import { portfolioData } from "../data/portfolioData";
import { 
  FaArrowRight, 
  FaBookOpen, 
  FaEnvelope, 
  FaAward, 
  FaBuildingColumns, 
  FaMicroscope,
  FaLinkedin 
} from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 85;
      const targetPos = element.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="landing-section" id="landingDiv">
      <div className="landing-container">
        {/* 1. Professor Photograph Block (Rendered 1st on mobile, Top-Right on desktop) */}
        <div className="hero-photo-block">
          <div className="professor-visual-card glass-panel-purple">
            <div className="photo-container">
              <img 
                src={portfolioData.personal.photoUrl} 
                alt="Dr. Muhib Anwar Lambay — Assistant Professor & Researcher" 
                className="professor-photo"
                loading="eager"
              />
              <div className="photo-overlay-gradient"></div>
              
              <div className="photo-badge-card glass-panel">
                <span className="badge-name">{portfolioData.personal.name}</span>
                <span className="badge-role">{portfolioData.personal.degrees}</span>
                <span className="badge-dept">{portfolioData.personal.college}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 to 8. Academic Content Block (Rendered 2nd on mobile, Left Column on desktop) */}
        <div className="hero-content-block">
          {/* 2. Small faculty/research badge */}
          <div className="academic-badge-row">
            <span className="system-badge">
              <span className="badge-pulse"></span>
              <span>17+ YEARS ACADEMIC EXPERIENCE</span>
            </span>
            <span className="system-badge badge-gold">
              <FaAward />
              <span>ORACLE 10G CERTIFIED ASSOCIATE</span>
            </span>
          </div>

          <div className="academic-title-pre">
            <span>FACULTY &amp; RESEARCH PROFILE</span>
          </div>

          {/* 3. Dr. Muhib Anwar Lambay name */}
          <h1 className="landing-name">
            <span className="honorific-prefix">Dr. </span>
            <span className="first-name">MUHIB ANWAR</span>
            <br />
            <span className="last-name gradient-text">LAMBAY</span>
          </h1>

          {/* 4. Academic qualifications */}
          <div className="qualifications-badge-box">
            <span className="degree-tag">Ph.D. Computer Science &amp; Engineering</span>
            <span className="degree-divider">•</span>
            <span className="degree-tag">M.Tech CSE</span>
            <span className="degree-divider">•</span>
            <span className="degree-tag">B.E. Comp Engg</span>
          </div>

          {/* 5. Professional identity */}
          <div className="identity-box">
            <span className="identity-lead">Educator</span>
            <span className="identity-dot">/</span>
            <span className="identity-lead">Researcher</span>
            <span className="identity-dot">/</span>
            <span className="identity-lead">Admission &amp; Career Guidance Counselor</span>
          </div>

          {/* 6. Institutional affiliation */}
          <div className="affiliation-card glass-panel">
            <FaBuildingColumns className="affiliation-icon neon-text-blue" />
            <div className="affiliation-text">
              <strong>{portfolioData.personal.department}</strong>
              <span>{portfolioData.personal.college}</span>
              <span className="affiliation-loc">{portfolioData.personal.location}</span>
            </div>
          </div>

          {/* 7. CTA buttons */}
          <div className="landing-cta">
            <a 
              href="#expertise" 
              className="btn-primary"
              onClick={(e) => handleScrollTo(e, "expertise")}
            >
              <FaMicroscope />
              <span>EXPLORE RESEARCH</span>
              <FaArrowRight />
            </a>

            <a 
              href="#publications" 
              className="btn-secondary"
              onClick={(e) => handleScrollTo(e, "publications")}
            >
              <FaBookOpen />
              <span>VIEW PUBLICATIONS</span>
            </a>

            <a 
              href="#contact" 
              className="btn-tertiary"
              onClick={(e) => handleScrollTo(e, "contact")}
            >
              <FaEnvelope />
              <span>GET IN TOUCH</span>
            </a>

            <a 
              href={portfolioData.personal.googleScholar} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-scholar-inline"
              title="View Google Scholar Profile"
            >
              <SiGooglescholar />
              <span>GOOGLE SCHOLAR</span>
            </a>

            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-linkedin-inline"
              title="Connect on LinkedIn"
            >
              <FaLinkedin />
              <span>LINKEDIN</span>
            </a>
          </div>

          {/* 8. Academic statistics */}
          <div className="landing-quick-stats">
            {portfolioData.academicStats.map((stat, idx) => (
              <div key={idx} className="quick-stat-item glass-panel">
                <span className={`stat-value ${idx === 3 ? "neon-text-gold" : idx % 2 === 0 ? "neon-text-blue" : "neon-text-purple"}`}>
                  {stat.value}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Three.js Autonomous Research Robot (Rendered 3rd on mobile, Bottom-Right on desktop) */}
        <div className="hero-3d-block">
          <div className="hero-3d-scene glass-panel">
            <div className="scene-label">
              <span className="live-dot"></span>
              <span>AUTONOMOUS AI &amp; ROBOTICS LAB</span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
