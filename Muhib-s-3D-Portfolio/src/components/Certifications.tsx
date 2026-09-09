import { portfolioData } from "../data/portfolioData";
import { 
  FaCertificate, 
  FaBuildingColumns, 
  FaShieldHalved,
  FaCheck,
  FaDatabase
} from "react-icons/fa6";
import "./styles/Certifications.css";

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-container">
        <div className="section-header">
          <span className="section-subtitle">// PROFESSIONAL RIGOR &amp; INSTITUTIONAL TRAINING</span>
          <h2 className="section-title">
            CERTIFICATIONS &amp; <span className="gradient-text">WORKSHOPS</span>
          </h2>
          <p className="section-lead">
            Certified technical credentials and intensive professional development workshops conducted by IIT Bombay, IIT Delhi, Oracle University, Microsoft, and premier engineering bodies.
          </p>
        </div>

        {/* Oracle Featured Credential Card */}
        <div className="oracle-featured-card glass-panel-gold">
          <div className="oracle-left">
            <div className="oracle-icon-box">
              <FaDatabase className="oracle-icon" />
            </div>
            <div className="oracle-text">
              <div className="oracle-badge">INDUSTRY CERTIFICATION</div>
              <h3 className="oracle-title">Oracle Database 10g Administrator Certified Associate (DBA_OCA)</h3>
              <p className="oracle-desc">
                Conferred by Oracle Corporation. Encompasses relational database management architectures, storage structures, instance memory management, user administration, backup protocols, and SQL optimization.
              </p>
            </div>
          </div>
          <div className="oracle-tag-wrap">
            <span className="academic-badge badge-gold">
              <FaShieldHalved /> Verified Credential
            </span>
          </div>
        </div>

        {/* 11 Verified Workshops & Training Programs Grid */}
        <div className="certifications-grid">
          {portfolioData.certifications.map((item, idx) => (
            <div 
              key={idx} 
              className={`cert-card ${item.highlight ? "glass-panel-gold" : "glass-panel"}`}
            >
              <div className="cert-top-row">
                <div className="cert-icon-wrap">
                  {item.title.includes("Oracle") ? (
                    <FaDatabase className="cert-icon neon-text-gold" />
                  ) : item.provider?.includes("IIT") ? (
                    <FaBuildingColumns className="cert-icon neon-text-blue" />
                  ) : (
                    <FaCertificate className="cert-icon neon-text-purple" />
                  )}
                </div>
                <span className="cert-number">#{idx + 1}</span>
              </div>

              <div className="cert-body">
                <h3 className="cert-title">{item.title}</h3>
                {item.provider && (
                  <div className="cert-provider-box">
                    <span className="provider-prefix">Conducted by:</span>
                    <span className="provider-name">{item.provider}</span>
                  </div>
                )}
              </div>

              <div className="cert-footer">
                <span className="cert-status-tag">
                  <FaCheck className="cert-check" />
                  <span>Verified Completion</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
