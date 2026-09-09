import { portfolioData } from "../data/portfolioData";
import { 
  FaNewspaper, 
  FaCheckDouble, 
  FaAward, 
  FaUsersViewfinder 
} from "react-icons/fa6";
import "./styles/ProfessionalActivities.css";

const ProfessionalActivities = () => {
  return (
    <section className="activities-section" id="activities">
      <div className="activities-container">
        <div className="section-header">
          <span className="section-subtitle">// EDITORIAL &amp; INSTITUTIONAL LEADERSHIP</span>
          <h2 className="section-title">
            PROFESSIONAL <span className="gradient-text">ACTIVITIES</span>
          </h2>
          <p className="section-lead">
            Editorial reviewership across prominent international research periodicals, national hackathon coordination, and institutional quality governance.
          </p>
        </div>

        <div className="activities-layout">
          {/* Left: Journal Editorial & Reviewer Roles */}
          <div className="editorial-card glass-panel-purple">
            <div className="card-top-icon-row">
              <div className="activity-icon-box">
                <FaNewspaper className="activity-icon neon-text-purple" />
              </div>
              <span className="academic-badge badge-purple">
                <FaAward /> Editorial Distinction
              </span>
            </div>

            <h3 className="activity-main-title">Journal Editorial Board Member &amp; Peer Reviewer</h3>
            <p className="activity-main-desc">
              Regularly reviewing manuscripts and serving on editorial boards for peer-reviewed technical journals in computing, engineering trends, and scientific innovations.
            </p>

            <div className="journals-list-grid">
              {portfolioData.professionalActivities.editorialBoard.map((j, idx) => (
                <div key={idx} className="journal-item-card glass-panel">
                  <span className="journal-abbr">{j.name}</span>
                  <span className="journal-full-name">{j.full}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Academic Governance & Coordinatorship */}
          <div className="governance-card glass-panel">
            <div className="card-top-icon-row">
              <div className="activity-icon-box">
                <FaUsersViewfinder className="activity-icon neon-text-blue" />
              </div>
              <span className="academic-badge">
                <FaCheckDouble /> Academic Governance
              </span>
            </div>

            <h3 className="activity-main-title">Institutional Leadership &amp; Coordinatorships</h3>
            <p className="activity-main-desc">
              Directing academic programs, student mentorship frameworks, accreditation assessments, and nationwide technical platforms.
            </p>

            <div className="responsibilities-list">
              {portfolioData.professionalActivities.responsibilities.map((resp, idx) => (
                <div key={idx} className="resp-item">
                  <span className="resp-bullet">✦</span>
                  <div>
                    <h4 className="resp-title">{resp.title}</h4>
                    <p className="resp-desc">{resp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalActivities;
