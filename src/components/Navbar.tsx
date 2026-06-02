import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#team", label: t.nav.team },
    { href: "#actions", label: t.nav.actions },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#partners", label: t.nav.partners },
    { href: "#faq", label: t.nav.faq },
    { href: "#news", label: t.nav.news },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <span className="logo-heart">❤</span> Срце на Длану
        </a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#volunteer" className="nav-cta" onClick={() => setMenuOpen(false)}>
              {t.nav.volunteer}
            </a>
          </li>
          <li className="lang-switch">
            <button
              className={`lang-btn ${language === "sr" ? "active" : ""}`}
              onClick={() => setLanguage("sr")}
            >
              СР
            </button>
            <button
              className={`lang-btn ${language === "sr-latin" ? "active" : ""}`}
              onClick={() => setLanguage("sr-latin")}
            >
              SR
            </button>
            <button
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
