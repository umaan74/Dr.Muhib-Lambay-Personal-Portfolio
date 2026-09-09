import { portfolioData } from "../data/portfolioData";
import { FaGraduationCap, FaAward } from "react-icons/fa6";
import "./styles/Education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="section-header">
          <span className="section-subtitle">// ACADEMIC FOUNDATIONS &amp; DEGREES</span>
          <h2 className="section-title">
            ACADEMIC <span className="gradient-text">QUALIFICATIONS</span>
          </h2>
          <p className="section-lead">
            Doctoral, postgraduate, and undergraduate academic degrees in Computer Science and Engineering.
          </p>
        </div>

        <div className="education-grid">
          {portfolioData.education.map((item, idx) => (
            <div 
              key={idx} 
              className={`education-card ${
                idx === 0 
                  ? "glass-panel-gold phd-card" 
                  : idx === 1 
                    ? "glass-panel-purple mtech-card" 
                    : "glass-panel be-card"
              }`}
            >
              <div className="edu-card-top">
                <div className="edu-icon-wrap">
                  <FaGraduationCap className={`edu-icon ${idx === 0 ? "neon-text-gold" : idx === 1 ? "neon-text-purple" : "neon-text-blue"}`} />
                </div>
                <span className={`edu-rank-badge ${idx === 0 ? "badge-gold" : idx === 1 ? "badge-purple" : ""}`}>
                  {idx === 0 ? "Doctoral Degree" : idx === 1 ? "Postgraduate Degree" : "Undergraduate Degree"}
                </span>
              </div>

              <div className="edu-card-body">
                <h3 className="edu-degree-title">{item.degree}</h3>
                <h4 className="edu-field-name">{item.field}</h4>
              </div>

              <div className="edu-card-footer">
                <div className="edu-credential-badge">
                  <FaAward className="credential-icon" />
                  <span>Verified Degree Qualification</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
