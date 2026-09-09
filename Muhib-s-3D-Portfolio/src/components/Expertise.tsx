import { portfolioData } from "../data/portfolioData";
import { 
  FaBrain, 
  FaCloudArrowUp, 
  FaNetworkWired, 
  FaDatabase, 
  FaCheckDouble 
} from "react-icons/fa6";
import "./styles/Expertise.css";

const getExpertiseIcon = (iconType: string) => {
  switch (iconType) {
    case "ai":
      return <FaBrain className="expertise-icon neon-text-blue" />;
    case "cloud":
      return <FaCloudArrowUp className="expertise-icon neon-text-purple" />;
    case "distributed":
      return <FaNetworkWired className="expertise-icon neon-text-blue" />;
    case "database":
      return <FaDatabase className="expertise-icon neon-text-gold" />;
    default:
      return <FaBrain className="expertise-icon neon-text-blue" />;
  }
};

const Expertise = () => {
  return (
    <section className="expertise-section" id="expertise">
      <div className="expertise-container">
        <div className="section-header">
          <span className="section-subtitle">// RESEARCH &amp; TEACHING PILLARS</span>
          <h2 className="section-title">
            AREAS OF <span className="gradient-text">EXPERTISE</span>
          </h2>
          <p className="section-lead">
            Core academic, research, and instructional domains cultivated over 17+ years of higher education leadership and scientific inquiry.
          </p>
        </div>

        <div className="expertise-grid">
          {portfolioData.expertise.map((item, idx) => (
            <div 
              key={item.id} 
              className={`expertise-card ${
                item.iconType === "database" 
                  ? "glass-panel-gold" 
                  : idx % 2 === 0 
                    ? "glass-panel" 
                    : "glass-panel-purple"
              }`}
            >
              <div className="expertise-top-row">
                <div className="expertise-icon-box">
                  {getExpertiseIcon(item.iconType)}
                </div>
                <div className="expertise-meta">
                  <span className="expertise-idx">0{idx + 1}</span>
                  <span className="expertise-category">{item.category}</span>
                </div>
              </div>

              <div className="expertise-body">
                <h3 className="expertise-title">{item.title}</h3>
                <p className="expertise-desc">{item.description}</p>
              </div>

              <div className="expertise-tech-row">
                <span className="tech-label">DOMAINS &amp; FOCUS:</span>
                <div className="expertise-tags">
                  {item.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="expertise-tag">
                      <FaCheckDouble className="tag-check" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
