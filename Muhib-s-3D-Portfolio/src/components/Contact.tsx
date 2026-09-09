import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaPhone, 
  FaCopy, 
  FaCheck,
  FaPaperPlane,
  FaArrowUpRightFromSquare,
  FaBuildingColumns,
  FaLinkedin,
  FaCircleExclamation
} from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import "./styles/Contact.css";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [clientOpened, setClientOpened] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setClientOpened(false);

    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedMessage = formState.message.trim();

    // 1. Validation
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (trimmedName.length < 2) {
      setErrorMessage("Please enter a valid full name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (trimmedMessage.length < 10) {
      setErrorMessage("Message must contain at least 10 characters.");
      return;
    }

    // 2. Build mailto URL with dynamic fields
    const recipient = "lambaymuhib@gmail.com";
    const subject = encodeURIComponent(`Academic Inquiry from ${trimmedName}`);
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}\n\nSource: Dr. Muhib Anwar Lambay Academic Portfolio`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // 3. Directly trigger email client (behaving like WhatsApp redirect)
    window.location.href = mailtoUrl;
    setClientOpened(true);
  };

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

          {/* Right Column: Clean Academic Inquiry Form */}
          <div className="contact-form-column">
            <div className="contact-form-card glass-panel">
              <h3 className="form-heading">Academic Inquiry</h3>
              <p className="form-sub">
                Send an academic message directly to <strong>lambaymuhib@gmail.com</strong>.
              </p>

              <form onSubmit={handleFormSubmit} className="academic-contact-form" noValidate>
                {errorMessage && (
                  <div className="form-error-alert" role="alert">
                    <FaCircleExclamation className="error-alert-icon" />
                    <div className="error-alert-text">
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}

                {clientOpened && !errorMessage && (
                  <div className="form-notice-box" role="status">
                    <FaCheck className="notice-icon neon-text-blue" />
                    <p>
                      Opening your email client addressed to <strong>lambaymuhib@gmail.com</strong>. If your client did not launch, you can email directly at <a href="mailto:lambaymuhib@gmail.com" className="notice-email-link">lambaymuhib@gmail.com</a>.
                    </p>
                  </div>
                )}

                <div className="form-field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    placeholder="e.g. Dr. Rajesh Sharma / Sarah Jenkins"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input 
                    id="contact-email"
                    type="email" 
                    placeholder="e.g. name@university.edu or name@domain.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea 
                    id="contact-message"
                    rows={5}
                    placeholder="Outline your research collaboration, workshop invitation, student mentorship, or academic inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary form-submit-btn"
                >
                  <FaPaperPlane />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
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
