import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaPhone, 
  FaCopy, 
  FaCheck,
  FaArrowUpRightFromSquare,
  FaBuildingColumns,
  FaLinkedin
} from "react-icons/fa6";
import { SiGooglescholar, SiGmail } from "react-icons/si";
import "./styles/Contact.css";

const topics = [
  {
    id: "general",
    label: "General Inquiry",
    subject: "Academic Inquiry - Dr. Muhib Anwar Lambay",
    body: "Dear Dr. Muhib Anwar Lambay,\n\nI am reaching out to you with the following academic inquiry:\n\n[Please write your message here]\n\nBest regards,\n[Your Name]\n[Your Institution/Designation]"
  },
  {
    id: "research",
    label: "Research Collaboration",
    subject: "Research Collaboration Inquiry - Dr. Muhib Anwar Lambay",
    body: "Dear Dr. Muhib Anwar Lambay,\n\nI am interested in exploring research collaboration opportunities in Machine Learning / AI / Data Analytics:\n\nArea of Interest: [Specify research topic]\nProposed Scope: [Brief outline]\n\nBest regards,\n[Your Name]\n[Your Institution/Affiliation]"
  },
  {
    id: "workshop",
    label: "Guest Lecture / Workshop",
    subject: "Invitation: Guest Lecture / Workshop - Dr. Muhib Anwar Lambay",
    body: "Dear Dr. Muhib Anwar Lambay,\n\nWe would like to cordially invite you as an expert speaker for an academic session:\n\nEvent / Topic: [Topic Name]\nTarget Audience: [Students / Faculty]\nProposed Dates: [Dates]\n\nBest regards,\n[Your Name]\n[Organization / College Name]"
  },
  {
    id: "mentorship",
    label: "Student Guidance",
    subject: "Student Guidance & Mentorship - Dr. Muhib Anwar Lambay",
    body: "Respected Dr. Muhib Anwar Lambay,\n\nI am reaching out to seek your valuable mentorship and guidance regarding:\n\n[Describe your project or research inquiry]\n\nSincerely,\n[Your Name]\n[Student / Researcher]"
  }
];

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>("general");

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const activeTopic = topics.find((t) => t.id === selectedTopic) || topics[0];
  const recipient = "lambaymuhib@gmail.com";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(activeTopic.subject)}&body=${encodeURIComponent(activeTopic.body)}`;
  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(activeTopic.subject)}&body=${encodeURIComponent(activeTopic.body)}`;

  return (
    <section className="contact-section" id="contact" aria-label="Academic Contact Section">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-subtitle">// DIRECT COMMUNICATION &amp; OFFICE LAB</span>
          <h2 className="section-title">
            GET IN <span className="gradient-text">TOUCH</span>
          </h2>
          <p className="section-lead">
            Open to academic research collaborations, faculty workshops, guest lectures, curriculum advisory, student mentorship, and collegiate counseling.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Academic Channels */}
          <div className="contact-channels-column">
            <h3 className="column-title">Direct Academic Channels</h3>

            <div className="channel-cards-list">
              {/* Primary Personal Email Card */}
              <div className="contact-channel-card glass-panel">
                <div className="channel-top">
                  <div className="channel-icon-box">
                    <FaEnvelope className="channel-icon neon-text-purple" />
                  </div>
                  <button 
                    className="copy-mini-btn"
                    onClick={() => handleCopyEmail("lambaymuhib@gmail.com")}
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail === "lambaymuhib@gmail.com" ? (
                      <span className="copied-tag"><FaCheck /> COPIED!</span>
                    ) : (
                      <span className="copy-tag"><FaCopy /> COPY</span>
                    )}
                  </button>
                </div>
                <div className="channel-info">
                  <span className="channel-label">PRIMARY DIRECT EMAIL</span>
                  <a 
                    href="mailto:lambaymuhib@gmail.com?subject=Academic%20Inquiry%20-%20Dr.%20Muhib%20Lambay"
                    className="channel-value"
                  >
                    lambaymuhib@gmail.com
                  </a>
                </div>
              </div>

              {/* Institutional Email Card */}
              <div className="contact-channel-card glass-panel">
                <div className="channel-top">
                  <div className="channel-icon-box">
                    <FaEnvelope className="channel-icon neon-text-blue" />
                  </div>
                  <button 
                    className="copy-mini-btn"
                    onClick={() => handleCopyEmail(portfolioData.personal.emailPrimary)}
                    title="Copy Institutional Email"
                    aria-label="Copy Institutional Email Address"
                  >
                    {copiedEmail === portfolioData.personal.emailPrimary ? (
                      <span className="copied-tag"><FaCheck /> COPIED!</span>
                    ) : (
                      <span className="copy-tag"><FaCopy /> COPY</span>
                    )}
                  </button>
                </div>
                <div className="channel-info">
                  <span className="channel-label">INSTITUTIONAL EMAIL</span>
                  <a 
                    href={`mailto:${portfolioData.personal.emailPrimary}?subject=Academic%20Inquiry%20-%20Dr.%20Muhib%20Lambay`}
                    className="channel-value"
                  >
                    {portfolioData.personal.emailPrimary}
                  </a>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <a 
                href={`https://wa.me/${portfolioData.personal.phoneRaw}?text=Hello%20Dr.%20Muhib%20Anwar%20Lambay%2C%20I%20am%20reaching%20out%20regarding%20an%20academic%20inquiry.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-channel-card glass-panel channel-link-card"
                aria-label="Chat on WhatsApp with Dr. Muhib Anwar Lambay"
              >
                <div className="channel-top">
                  <div className="channel-icon-box">
                    <FaWhatsapp className="channel-icon neon-text-blue" />
                  </div>
                  <FaArrowUpRightFromSquare className="channel-arrow" />
                </div>
                <div className="channel-info">
                  <span className="channel-label">WHATSAPP DIRECT</span>
                  <span className="channel-value">{portfolioData.personal.phone}</span>
                </div>
              </a>

              {/* Direct Telephone */}
              <a 
                href={`tel:${portfolioData.personal.phone}`} 
                className="contact-channel-card glass-panel channel-link-card"
                aria-label="Direct Phone Call to Dr. Muhib Anwar Lambay"
              >
                <div className="channel-top">
                  <div className="channel-icon-box">
                    <FaPhone className="channel-icon neon-text-purple" />
                  </div>
                  <FaArrowUpRightFromSquare className="channel-arrow" />
                </div>
                <div className="channel-info">
                  <span className="channel-label">OFFICE TELEPHONE</span>
                  <span className="channel-value">{portfolioData.personal.phone}</span>
                </div>
              </a>

              {/* LinkedIn Direct Card */}
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-channel-card glass-panel channel-link-card channel-linkedin-card"
                aria-label="Connect with Dr. Muhib Anwar Lambay on LinkedIn"
              >
                <div className="channel-top">
                  <div className="channel-icon-box">
                    <FaLinkedin className="channel-icon neon-text-blue" />
                  </div>
                  <FaArrowUpRightFromSquare className="channel-arrow" />
                </div>
                <div className="channel-info">
                  <span className="channel-label">LINKEDIN PROFILE</span>
                  <span className="channel-value">Connect on LinkedIn</span>
                </div>
              </a>

              {/* Google Scholar Card */}
              <a 
                href={portfolioData.personal.googleScholar} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-channel-card glass-panel-purple channel-link-card"
                aria-label="View Dr. Muhib Anwar Lambay Google Scholar Profile"
              >
                <div className="channel-top">
                  <div className="channel-icon-box">
                    <SiGooglescholar className="channel-icon neon-text-purple" />
                  </div>
                  <FaArrowUpRightFromSquare className="channel-arrow" />
                </div>
                <div className="channel-info">
                  <span className="channel-label">RESEARCH CITATIONS</span>
                  <span className="channel-value">Google Scholar Profile</span>
                </div>
              </a>
            </div>

            {/* Campus Address Card */}
            <div className="campus-address-card glass-panel-gold">
              <div className="campus-top">
                <FaBuildingColumns className="campus-icon neon-text-gold" />
                <h4 className="campus-title">Academic Affiliation &amp; Office</h4>
              </div>
              <p className="campus-text">
                <strong>{portfolioData.personal.department}</strong><br />
                {portfolioData.personal.college}<br />
                <span className="campus-sub">{portfolioData.personal.location}</span>
              </p>
            </div>
          </div>

          {/* Right Column: Direct Email & Gmail Redirect */}
          <div className="contact-form-column">
            <div className="email-redirect-card glass-panel">
              <div className="redirect-card-header">
                <div className="redirect-badge">
                  <span className="live-dot"></span>
                  <span>INSTANT GMAIL REDIRECT</span>
                </div>
                <h3 className="redirect-heading">
                  Direct Email <span className="gradient-text">Redirect</span>
                </h3>
                <p className="redirect-sub">
                  Click below to redirect directly to your Gmail composer with a pre-configured draft addressed to <strong>lambaymuhib@gmail.com</strong> — behaving just like WhatsApp Direct.
                </p>
              </div>

              {/* Inquiry Purpose Selector */}
              <div className="redirect-topics-section">
                <span className="redirect-label">SELECT INQUIRY PURPOSE (PRE-FILLS YOUR DRAFT):</span>
                <div className="topic-chips-grid">
                  {topics.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      className={`topic-chip ${selectedTopic === topic.id ? "topic-chip-active" : ""}`}
                      onClick={() => setSelectedTopic(topic.id)}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="redirect-actions-group">
                {/* Primary Action: Direct Gmail Web Redirect */}
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="redirect-main-btn btn-gmail"
                  aria-label="Redirect directly to Gmail composer"
                >
                  <div className="redirect-btn-left">
                    <div className="gmail-icon-wrapper">
                      <SiGmail className="gmail-icon" />
                    </div>
                    <div className="redirect-btn-text">
                      <span className="btn-main-title">REDIRECT TO GMAIL</span>
                      <span className="btn-sub-title">Launch Gmail in browser with pre-filled draft</span>
                    </div>
                  </div>
                  <FaArrowUpRightFromSquare className="btn-arrow-icon" />
                </a>

                {/* Secondary Action: Default System Mail Client */}
                <a
                  href={mailtoUrl}
                  className="redirect-secondary-btn"
                  aria-label="Open in default mail client"
                >
                  <div className="redirect-btn-left">
                    <div className="mail-icon-wrapper">
                      <FaEnvelope className="mail-icon neon-text-blue" />
                    </div>
                    <div className="redirect-btn-text">
                      <span className="btn-main-title">OPEN IN DEFAULT MAIL APP</span>
                      <span className="btn-sub-title">Apple Mail, Outlook, Thunderbird or Mobile</span>
                    </div>
                  </div>
                  <FaArrowUpRightFromSquare className="btn-arrow-icon" />
                </a>
              </div>

              {/* Direct Details & One-Click Copy */}
              <div className="redirect-info-box">
                <div className="info-box-header">
                  <span className="info-box-title">DIRECT INBOX DESTINATIONS</span>
                  <span className="tag-sparkle">⚡ 1-Click Redirect</span>
                </div>

                <div className="info-address-row">
                  <div className="info-address-meta">
                    <span className="info-address-label">Primary:</span>
                    <span className="info-address-text">lambaymuhib@gmail.com</span>
                  </div>
                  <button
                    type="button"
                    className="copy-mini-btn"
                    onClick={() => handleCopyEmail("lambaymuhib@gmail.com")}
                    title="Copy Personal Email"
                    aria-label="Copy Personal Email"
                  >
                    {copiedEmail === "lambaymuhib@gmail.com" ? (
                      <span className="copied-tag"><FaCheck /> COPIED!</span>
                    ) : (
                      <span className="copy-tag"><FaCopy /> COPY</span>
                    )}
                  </button>
                </div>

                <div className="info-address-row">
                  <div className="info-address-meta">
                    <span className="info-address-label">Institutional:</span>
                    <span className="info-address-text">{portfolioData.personal.emailPrimary}</span>
                  </div>
                  <button
                    type="button"
                    className="copy-mini-btn"
                    onClick={() => handleCopyEmail(portfolioData.personal.emailPrimary)}
                    title="Copy Institutional Email"
                    aria-label="Copy Institutional Email"
                  >
                    {copiedEmail === portfolioData.personal.emailPrimary ? (
                      <span className="copied-tag"><FaCheck /> COPIED!</span>
                    ) : (
                      <span className="copy-tag"><FaCopy /> COPY</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dignified Academic Footer */}
        <footer className="footer-bar">
          <div className="footer-top-row">
            <div className="footer-brand">
              <span className="footer-name">{portfolioData.personal.name}</span>
              <span className="footer-title">{portfolioData.personal.degrees}</span>
              <p className="footer-affiliation">
                {portfolioData.personal.role}<br />
                {portfolioData.personal.department}<br />
                {portfolioData.personal.college}
              </p>
            </div>

            <div className="footer-links-col">
              <span className="footer-col-head">QUICK NAVIGATION</span>
              <ul className="footer-nav-list">
                <li><a href="#landingDiv">Home</a></li>
                <li><a href="#about">About Profile</a></li>
                <li><a href="#expertise">Areas of Expertise</a></li>
                <li><a href="#experience">Professional Career</a></li>
                <li><a href="#publications">Publications &amp; Research</a></li>
                <li><a href="#achievements">Honors &amp; Awards</a></li>
                <li><a href="#education">Academic Qualifications</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <span className="footer-col-head">EXTERNAL PROFILES</span>
              <ul className="footer-nav-list">
                <li>
                  <a 
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <FaLinkedin />
                    <span>Connect on LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={portfolioData.personal.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <SiGooglescholar />
                    <span>Google Scholar Profile</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://wa.me/${portfolioData.personal.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp Direct</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-row">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} {portfolioData.personal.name} — All rights reserved.
            </p>
            <p className="footer-tech">
              Academic Portfolio engineered with React, TypeScript &amp; Three.js.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
