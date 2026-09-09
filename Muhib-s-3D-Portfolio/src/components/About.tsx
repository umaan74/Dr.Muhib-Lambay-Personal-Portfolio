import { portfolioData } from "../data/portfolioData";
import { 
  FaGraduationCap, 
  FaBrain, 
  FaDatabase, 
  FaUsersGear 
} from "react-icons/fa6";
import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-subtitle">// ACADEMIC PROFILE &amp; LEADERSHIP</span>
          <h2 className="section-title">
            ABOUT <span className="gradient-text">DR. MUHIB LAMBAY</span>
          </h2>
          <p className="section-lead">
            A distinguished academician, researcher, and educational counselor with 17+ years dedicated to engineering excellence, computer science pedagogy, and artificial intelligence.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Main Card: Biography & Academic Focus */}
          <div className="about-card glass-panel">
            <div className="card-header">
              <div className="card-icon-wrap">
                <FaGraduationCap className="card-icon neon-text-blue" />
              </div>
              <div>
                <h3 className="card-title">{portfolioData.about.heading}</h3>
                <span className="card-sub">{portfolioData.personal.experienceYears}</span>
              </div>
            </div>

            <div className="bio-paragraphs">
              {portfolioData.about.bio.map((paragraph, idx) => (
                <p key={idx} className="about-text">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Specialization Tags */}
            <div className="specializations-box">
              <span className="spec-title">CORE SPECIALIZATIONS:</span>
              <div className="spec-cloud">
                {portfolioData.about.specializations.map((spec, sIdx) => (
                  <span key={sIdx} className="spec-pill">
                    <span className="spec-dot"></span>
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Academic Highlights Matrix */}
            <div className="verified-stats-grid">
              {portfolioData.academicStats.map((stat, idx) => (
                <div key={idx} className={`stat-box ${idx === 3 ? "glass-panel-gold" : "glass-panel-purple"}`}>
                  <span className={`stat-num ${idx === 3 ? "neon-text-gold" : "neon-text-blue"}`}>
                    {stat.value}
                  </span>
                  <span className="stat-name">{stat.label}</span>
                  <span className="stat-unit">{stat.suffix}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Pillars */}
          <div className="about-side-stack">
            <div className="side-card glass-panel-purple">
              <div className="side-card-top">
                <FaBrain className="side-icon neon-text-purple" />
                <span className="side-badge">Research Specialization</span>
              </div>
              <h4 className="side-title">AI &amp; Machine Learning</h4>
              <p className="side-desc">
                Extensive research and instruction in deep neural models, cardiovascular prediction pipelines, and automated disease detection architectures.
              </p>
            </div>

            <div className="side-card glass-panel">
              <div className="side-card-top">
                <FaDatabase className="side-icon neon-text-blue" />
                <span className="side-badge">Oracle Certified</span>
              </div>
              <h4 className="side-title">Enterprise Databases</h4>
              <p className="side-desc">
                Oracle 10g Certified Associate with comprehensive instruction in DBMS, Data Warehousing &amp; Mining (DWM), and curriculum design for autonomous engineering boards.
              </p>
            </div>

            <div className="side-card glass-panel-gold">
              <div className="side-card-top">
                <FaUsersGear className="side-icon neon-text-gold" />
                <span className="side-badge badge-gold">Student Mentorship</span>
              </div>
              <h4 className="side-title">Academic Leadership</h4>
              <p className="side-desc">
                Supervised 30+ Bachelor of Engineering project teams, active NPTEL and Smart India Hackathon nodal coordinator, and dedicated career guidance counselor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
