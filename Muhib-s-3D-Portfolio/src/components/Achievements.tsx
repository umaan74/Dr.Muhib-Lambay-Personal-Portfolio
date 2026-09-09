import { portfolioData } from "../data/portfolioData";
import { 
  FaTrophy, 
  FaAward, 
  FaChalkboardUser, 
  FaUsersGear, 
  FaGraduationCap 
} from "react-icons/fa6";
import "./styles/Achievements.css";

const getAchievementIcon = (idx: number) => {
  if (idx === 0) return <FaAward className="achieve-icon neon-text-gold" />;
  if (idx === 1) return <FaTrophy className="achieve-icon neon-text-gold" />;
  if (idx === 2) return <FaAward className="achieve-icon neon-text-blue" />;
  if (idx === 6) return <FaUsersGear className="achieve-icon neon-text-purple" />;
  if (idx === 7) return <FaGraduationCap className="achieve-icon neon-text-blue" />;
  return <FaChalkboardUser className="achieve-icon neon-text-purple" />;
};

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">
        <div className="section-header">
          <span className="section-subtitle">// HONORS, DISTINCTIONS &amp; INSTITUTIONAL IMPACT</span>
          <h2 className="section-title">
            AWARDS &amp; <span className="gradient-text">ACHIEVEMENTS</span>
          </h2>
          <p className="section-lead">
            Recognitions for pedagogical distinction, collegiate admission leadership, faculty development initiatives under IIT Bombay NMEICT, and academic governance.
          </p>
        </div>

        <div className="achievements-grid">
          {portfolioData.achievements.map((item, idx) => (
            <div 
              key={idx} 
              className={`achievement-card ${
                idx < 2 
                  ? "glass-panel-gold primary-award" 
                  : idx % 2 === 0 
                    ? "glass-panel" 
                    : "glass-panel-purple"
              }`}
            >
              <div className="achievement-top-box">
                <div className="achievement-icon-wrapper">
                  {getAchievementIcon(idx)}
                </div>
                <div className="achievement-meta-box">
                  <span className={`achievement-badge ${idx < 2 ? "badge-gold" : ""}`}>
                    {item.badge}
                  </span>
                  {item.period && (
                    <span className="achievement-period">{item.period}</span>
                  )}
                </div>
              </div>

              <div className="achievement-body">
                <h3 className="achievement-title">{item.title}</h3>
                {item.organization && (
                  <h4 className="achievement-org">{item.organization}</h4>
                )}
                <p className="achievement-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
