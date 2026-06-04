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
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-3xl border-b border-gray-200 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-[70px]">
        <Link to="/" className="text-[1.4rem] font-bold text-primary no-underline flex items-center gap-1.5" onClick={() => setMenuOpen(false)}>
          <span className="text-[1.5rem]">❤</span> Срце на Длану
        </Link>

        <button
          className={`flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 md:hidden ${menuOpen ? "" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2.5px] bg-gray-900 rounded-sm transition-all duration-300 ${menuOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""}`} />
          <span className={`block w-6 h-[2.5px] bg-gray-900 rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2.5px] bg-gray-900 rounded-sm transition-all duration-300 ${menuOpen ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""}`} />
        </button>

        <ul className={`flex items-center gap-2 list-none max-md:fixed max-md:top-[70px] max-md:left-0 max-md:right-0 max-md:bg-white max-md:flex-col max-md:p-5 max-md:gap-1 max-md:border-b max-md:border-gray-200 max-md:shadow-card-hover max-md:-translate-y-[120%] max-md:transition-all max-md:duration-300 max-md:z-[999] max-md:max-h-[80vh] max-md:overflow-y-auto ${menuOpen ? "max-md:translate-y-0" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="no-underline text-gray-700 text-[0.85rem] font-medium py-2 px-3.5 rounded-card-sm transition-all duration-300 whitespace-nowrap hover:text-primary hover:bg-gray-100 max-md:w-full max-md:text-center max-md:p-3"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/volunteering"
              className="no-underline bg-primary text-white py-2.5 px-5 rounded-xl font-medium text-[0.85rem] transition-all duration-300 hover:bg-primary-dark max-md:w-full max-md:text-center max-md:block max-md:p-3"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.volunteer}
            </Link>
          </li>
          <li className="flex gap-1 ml-2 max-md:ml-0 max-md:justify-center">
            <button
              className={`border-2 border-gray-300 bg-transparent py-1 px-2 rounded-[6px] text-xs font-semibold cursor-pointer transition-all duration-300 text-gray-700 ${language === "sr" ? "bg-primary text-white border-primary" : ""}`}
              onClick={() => setLanguage("sr")}
            >
              СР
            </button>
            <button
              className={`border-2 border-gray-300 bg-transparent py-1 px-2 rounded-[6px] text-xs font-semibold cursor-pointer transition-all duration-300 text-gray-700 ${language === "sr-latin" ? "bg-primary text-white border-primary" : ""}`}
              onClick={() => setLanguage("sr-latin")}
            >
              SR
            </button>
            <button
              className={`border-2 border-gray-300 bg-transparent py-1 px-2 rounded-[6px] text-xs font-semibold cursor-pointer transition-all duration-300 text-gray-700 ${language === "en" ? "bg-primary text-white border-primary" : ""}`}
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
