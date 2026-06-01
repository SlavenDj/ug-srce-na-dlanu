import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-buttons">
          <a href="#volunteer" className="btn btn-primary">
            {t.hero.cta}
          </a>
          <a href="#about" className="btn btn-outline-white">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
