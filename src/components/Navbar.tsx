import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/volunteering", label: t.nav.volunteer },
    { to: "/projects", label: t.nav.actions },
    { to: "/news", label: t.nav.news },
    { to: "/donate", label: t.nav.donate },
    { to: "/bazar", label: language === "sr" ? "Базар" : language === "sr-latin" ? "Bazar" : "Bazar" },
    { to: "/request-help", label: language === "sr" ? "Помоћ" : language === "sr-latin" ? "Pomoć" : "Help" },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-heart">❤</span> Срце на Длану
        </Link>

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
            <li key={link.to}>
              <Link to={link.to} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/volunteering" className="nav-cta" onClick={() => setMenuOpen(false)}>
              {t.nav.volunteer}
            </Link>
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
