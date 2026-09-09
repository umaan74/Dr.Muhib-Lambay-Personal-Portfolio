import { portfolioData } from "../data/portfolioData";
import { 
  FaBriefcase, 
  FaLocationDot, 
  FaCircleCheck, 
  FaCalendarDays 
} from "react-icons/fa6";
import "./styles/Career.css";

const Career = () => {
  return (
    <section className="career-section" id="experience">
      <div className="career-container">
        <div className="section-header">
          <span className="section-subtitle">// 17+ YEARS OF ACADEMIC EXCELLENCE</span>
          <h2 className="section-title">
            PROFESSIONAL <span className="gradient-text">EXPERIENCE</span>
          </h2>
          <p className="section-lead">
            An established record spanning university engineering pedagogy, departmental leadership, curriculum innovation, laboratory administration, and industrial development.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line" aria-hidden="true"></div>

          {portfolioData.experience.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`timeline-item ${isLeft ? "left" : "right"} ${item.isCurrent ? "current-node" : ""}`}
              >
                <div className={`timeline-dot ${item.isCurrent ? "dot-current" : ""}`} aria-hidden="true">
                  <FaBriefcase />
                </div>

                <div className={`timeline-content ${item.isCurrent ? "glass-panel-gold current-card" : isLeft ? "glass-panel" : "glass-panel-purple"}`}>
                  <div className="timeline-header">
                    <div>
                      {item.isCurrent && (
                        <span className="current-badge">
                          <span className="current-pulse"></span>
                          CURRENT APPOINTMENT
                        </span>
                      )}
                      <h3 className="timeline-role">{item.role}</h3>
                      <h4 className="timeline-company">{item.institution}</h4>
                    </div>

                    <span className="timeline-period">
                      <FaCalendarDays className="period-icon" />
                      {item.period}
                    </span>
                  </div>

                  <div className="timeline-location">
                    <FaLocationDot className="loc-icon" />
                    <span>{item.location}</span>
                  </div>

                  <ul className="timeline-desc">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>
                        <FaCircleCheck className="desc-bullet" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
