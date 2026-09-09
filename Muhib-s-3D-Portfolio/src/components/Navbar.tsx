import { useEffect, useRef, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { 
  FaGraduationCap, 
  FaBars, 
  FaXmark, 
  FaLinkedin, 
  FaChevronDown,
  FaAward,
  FaCertificate,
  FaSchool
} from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import "./styles/Navbar.css";

// Primary Desktop Nav Items
const primaryNavLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PUBLICATIONS", href: "#publications" },
];

// Secondary Items for Desktop "MORE" Dropdown
const moreDropdownLinks = [
  { label: "Achievements", href: "#achievements", icon: FaAward },
  { label: "Certifications", href: "#certifications", icon: FaCertificate },
  { label: "Education", href: "#education", icon: FaSchool },
];

// Full Navigation for Mobile Drawer
const mobileNavLinks = [
  { label: "HOME", href: "#landingDiv" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PUBLICATIONS", href: "#publications" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("landingDiv");

  const navPanelRef = useRef<HTMLDivElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const moreDropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active Section Spy
      const sections = [
        "landingDiv", 
        "about", 
        "expertise", 
        "experience", 
        "publications", 
        "achievements", 
        "certifications", 
        "education", 
        "contact"
      ];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Outside Click & Escape Key Handler for Mobile Drawer & MORE Dropdown
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;

      // Handle Mobile Drawer Outside Click
      if (menuOpen) {
        if (
          !navPanelRef.current?.contains(target) &&
          !toggleBtnRef.current?.contains(target)
        ) {
          setMenuOpen(false);
        }
      }

      // Handle MORE Dropdown Outside Click
      if (moreOpen) {
        if (!moreDropdownRef.current?.contains(target)) {
          setMoreOpen(false);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (moreOpen) {
          setMoreOpen(false);
        }
        if (menuOpen) {
          setMenuOpen(false);
          toggleBtnRef.current?.focus();
        }
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, moreOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setMoreOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 85;
      const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth"
      });
    }
  };

  const isMoreActive = ["achievements", "certifications", "education"].includes(activeSection);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div 
        className={`mobile-menu-backdrop ${menuOpen ? "visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        {/* Brand identity */}
        <a 
          href="#landingDiv" 
          className="navbar-title" 
          onClick={(e) => handleNavClick(e, "#landingDiv")}
          aria-label="Dr. Muhib Anwar Lambay Home"
        >
          <span className="brand-badge">{portfolioData.personal.initials}</span>
          <div className="brand-info">
            <span className="brand-name">{portfolioData.personal.name}</span>
            <span className="brand-subtitle">{portfolioData.personal.degrees}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="desktop-nav-list">
            {primaryNavLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-anchor ${isActive ? "active" : ""}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}

            {/* MORE Dropdown Menu */}
            <li className="nav-dropdown-wrapper" ref={moreDropdownRef}>
              <button
                type="button"
                className={`nav-anchor nav-dropdown-btn ${isMoreActive ? "active" : ""} ${moreOpen ? "open" : ""}`}
                onClick={() => setMoreOpen(!moreOpen)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                aria-label="More navigation links"
              >
                <span>MORE</span>
                <FaChevronDown className={`dropdown-chevron ${moreOpen ? "rotated" : ""}`} />
              </button>

              <div className={`nav-dropdown-menu glass-panel ${moreOpen ? "visible" : ""}`} role="menu">
                {moreDropdownLinks.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`dropdown-item ${isActive ? "active" : ""}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                      role="menuitem"
                    >
                      <Icon className="dropdown-item-icon" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </li>

            {/* CONTACT Link */}
            <li>
              <a
                href="#contact"
                className={`nav-anchor ${activeSection === "contact" ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        {/* Actions Group: Compact Icon Buttons & Mobile Toggle */}
        <div className="navbar-cta-group">
          {/* Compact LinkedIn Icon Button */}
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-btn navbar-linkedin-btn"
            title="Connect on LinkedIn"
            aria-label="Connect with Dr. Muhib Anwar Lambay on LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Compact Google Scholar Icon Button */}
          <a
            href={portfolioData.personal.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-btn navbar-scholar-btn"
            title="Google Scholar Profile"
            aria-label="Dr. Muhib Anwar Lambay Google Scholar Profile"
          >
            <SiGooglescholar />
          </a>

          {/* Mobile Hamburger Toggle Button (Active at <= 1100px) */}
          <button
            ref={toggleBtnRef}
            className={`mobile-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation Drawer Panel */}
        <div 
          id="mobile-nav-panel"
          ref={navPanelRef}
          className={`mobile-nav-panel glass-panel ${menuOpen ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-menu-header">
            <div className="mobile-brand">
              <FaGraduationCap className="neon-text-blue mobile-brand-icon" />
              <div className="mobile-brand-text">
                <span className="mobile-brand-name">{portfolioData.personal.name}</span>
                <span className="mobile-brand-sub">{portfolioData.personal.degrees}</span>
              </div>
            </div>
            <button 
              className="mobile-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <FaXmark />
            </button>
          </div>

          <nav className="mobile-nav-list" aria-label="Mobile Menu Links">
            <ul>
              {mobileNavLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? "active" : ""}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-external-links">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-ext-link mobile-linkedin-link"
              onClick={() => setMenuOpen(false)}
            >
              <FaLinkedin className="ext-icon" />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href={portfolioData.personal.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-ext-link mobile-scholar-link"
              onClick={() => setMenuOpen(false)}
            >
              <SiGooglescholar className="ext-icon" />
              <span>Google Scholar Profile</span>
            </a>
          </div>
        </div>
      </header>

      <div className="nav-fade" aria-hidden="true"></div>
    </>
  );
};

export default Navbar;
