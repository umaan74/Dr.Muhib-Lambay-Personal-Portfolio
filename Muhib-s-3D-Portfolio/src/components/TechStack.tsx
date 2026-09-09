import { portfolioData } from "../data/portfolioData";
import { 
  FaCode, 
  FaLaptopCode, 
  FaDatabase, 
  FaServer 
} from "react-icons/fa6";
import "./styles/TechStack.css";

const getCategoryIcon = (category: string) => {
  if (category.includes("Programming")) return <FaCode className="tech-cat-icon neon-text-blue" />;
  if (category.includes("Tools")) return <FaLaptopCode className="tech-cat-icon neon-text-purple" />;
  if (category.includes("Database")) return <FaDatabase className="tech-cat-icon neon-text-gold" />;
  return <FaServer className="tech-cat-icon neon-text-blue" />;
};

const TechStack = () => {
  return (
    <section className="techstack-section" id="techstack">
      <div className="techstack-container">
        <div className="section-header">
          <span className="section-subtitle">// COMPUTATIONAL INSTRUMENTATION</span>
          <h2 className="section-title">
            TECHNICAL <span className="gradient-text">SKILLS &amp; TOOLS</span>
          </h2>
          <p className="section-lead">
            Languages, database engines, development environments, and operating platforms leveraged in research labs, classrooms, and system administration.
          </p>
        </div>

        <div className="skills-matrix-grid">
          {portfolioData.technicalSkills.map((category, idx) => (
            <div 
              key={idx} 
              className={`skill-category-card ${
                category.category.includes("Database") 
                  ? "glass-panel-gold" 
                  : idx % 2 === 0 
                    ? "glass-panel" 
                    : "glass-panel-purple"
              }`}
            >
              <div className="category-header">
                <span className="category-icon-box">{getCategoryIcon(category.category)}</span>
                <div>
                  <h3 className="category-title">{category.category}</h3>
                  <span className="category-count">{category.items.length} Core Technologies</span>
                </div>
              </div>

              <div className="skills-pill-cloud">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill-card glass-panel">
                    <span className="skill-pill-dot"></span>
                    <span className="skill-pill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
