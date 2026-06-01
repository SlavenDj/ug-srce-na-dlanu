import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{t.about.description}</p>
            <div className="about-mission">
              <h4>{t.about.mission}</h4>
              <p>{t.about.missionText}</p>
            </div>
            <div className="about-mission" style={{ marginTop: "16px", borderLeftColor: "var(--accent)" }}>
              <h4>{t.about.vision}</h4>
              <p>{t.about.visionText}</p>
            </div>
            <div className="about-values">
              <h4>{language === "sr" ? "Наше вриједности" : "Our Values"}</h4>
              <ul className="about-values-list">
                {t.about.values.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-placeholder">
              <span className="about-icon">❤</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
