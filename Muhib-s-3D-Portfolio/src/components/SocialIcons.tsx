import { FaEnvelope, FaGlobe } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import "./styles/SocialIcons.css";
import { portfolioData } from "../data/portfolioData";

const SocialIcons = () => {
  return (
    <div className="icons-section" aria-label="Scholarly & Academic Links">
      <div className="social-icons" id="social">
        <span>
          <a
            href={portfolioData.personal.googleScholar}
            target="_blank"
            rel="noreferrer"
            title="Google Scholar Profile"
            aria-label="Google Scholar Profile"
          >
            <SiGooglescholar />
          </a>
        </span>
        <span>
          <a
            href={`mailto:${portfolioData.personal.emailPrimary}`}
            title="Send Institutional Email"
            aria-label="Send Institutional Email"
          >
            <FaEnvelope />
          </a>
        </span>
        <span>
          <a
            href={portfolioData.personal.website}
            target="_blank"
            rel="noreferrer"
            title="Official Website"
            aria-label="Official Website"
          >
            <FaGlobe />
          </a>
        </span>
      </div>
    </div>
  );
};

export default SocialIcons;
