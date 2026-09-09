import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { 
  FaArrowUpRightFromSquare, 
  FaCalendarDays, 
  FaBookmark,
  FaFileLines
} from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import "./styles/Work.css";

const categories = ["All Publications", "Healthcare & Machine Learning", "AI & Healthcare", "Machine Learning & Education"];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Publications");

  const filteredPublications = selectedCategory === "All Publications"
    ? portfolioData.publications.featured
    : portfolioData.publications.featured.filter((p) => p.category === selectedCategory);

  return (
    <section className="work-section" id="publications">
      <div className="work-container">
        <div className="section-header">
          <span className="section-subtitle">// PEER-REVIEWED RESEARCH &amp; SCHOLARSHIP</span>
          <h2 className="section-title">
            PUBLICATIONS &amp; <span className="gradient-text">RESEARCH</span>
          </h2>
          <p className="section-lead">
            Documented scientific contributions to international journals and conferences addressing cardiovascular machine learning, pulmonary radiographic deep learning, and adaptive learning architectures.
          </p>
        </div>

        {/* Research Metrics Summary Bar */}
        <div className="publications-summary-bar glass-panel">
          <div className="summary-stat">
            <span className="summary-num neon-text-blue">{portfolioData.publications.summary.journals}</span>
            <span className="summary-label">International Journals</span>
          </div>
          <div className="summary-stat-divider"></div>
          <div className="summary-stat">
            <span className="summary-num neon-text-purple">{portfolioData.publications.summary.conferences}</span>
            <span className="summary-label">Conference Papers</span>
          </div>
          <div className="summary-stat-divider"></div>
          <div className="summary-stat">
            <span className="summary-num neon-text-gold">{portfolioData.publications.summary.patents}</span>
            <span className="summary-label">Patent</span>
          </div>
          <div className="summary-stat-divider"></div>
          <div className="summary-stat">
            <a 
              href={portfolioData.personal.googleScholar} 
              target="_blank" 
              rel="noreferrer" 
              className="scholar-profile-link"
              title="View Google Scholar Profile"
            >
              <SiGooglescholar />
              <span>Google Scholar Profile</span>
              <FaArrowUpRightFromSquare className="external-arrow" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="pub-filters-row">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`pub-filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Publications Grid */}
        <div className="projects-grid">
          {filteredPublications.map((pub) => (
            <article key={pub.id} className="project-card glass-panel">
              {pub.image && (
                <div className="pub-image-frame">
                  <img 
                    src={pub.image} 
                    alt={pub.title} 
                    className="pub-preview-img"
                    loading="lazy"
                  />
                  <span className="pub-category-badge">{pub.category}</span>
                </div>
              )}

              <div className="pub-card-content">
                <div className="project-top-row">
                  <span className="pub-journal-name">
                    <FaBookmark className="pub-journal-icon" />
                    {pub.journal}
                  </span>
                  <span className="pub-year-badge">
                    <FaCalendarDays className="pub-cal-icon" />
                    {pub.year}
                  </span>
                </div>

                <h3 className="project-title">{pub.title}</h3>
                <p className="project-description">{pub.description}</p>

                {pub.doi && (
                  <div className="pub-doi-box">
                    <span className="doi-label">DOI:</span>
                    <span className="doi-value">{pub.doi}</span>
                  </div>
                )}

                <div className="pub-card-footer">
                  {pub.doiUrl ? (
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn primary"
                      title="View Article via DOI Link"
                    >
                      <FaArrowUpRightFromSquare />
                      <span>VIEW VIA DOI ({pub.doi})</span>
                    </a>
                  ) : (
                    <div className="pub-verified-badge">
                      <FaFileLines />
                      <span>Peer-Reviewed Journal Publication</span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google Scholar Callout Banner */}
        <div className="scholar-callout-banner glass-panel-purple">
          <div className="callout-left">
            <div className="callout-icon-box">
              <SiGooglescholar className="callout-scholar-icon" />
            </div>
            <div>
              <h3 className="callout-title">Explore Complete Research on Google Scholar</h3>
              <p className="callout-desc">
                Access Dr. Muhib Anwar Lambay's comprehensive research outputs, conference proceedings, and collaborative papers.
              </p>
            </div>
          </div>
          <a
            href={portfolioData.personal.googleScholar}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <span>VIEW GOOGLE SCHOLAR</span>
            <FaArrowUpRightFromSquare />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
