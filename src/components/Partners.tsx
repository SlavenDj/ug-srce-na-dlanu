import { useLanguage } from "../context/LanguageContext";

export default function Partners() {
  const { t } = useLanguage();
  const { partners } = t;

  return (
    <section id="partners" className="partners">
      <div className="container">
        <h2 className="section-title">{partners.title}</h2>
        <p className="partners-subtitle">{partners.subtitle}</p>

        <div className="partners-logos">
          {partners.logos.map((logo, i) => (
            <div className="partner-logo-card" key={i}>
              <div className="partner-logo-placeholder">{logo.placeholder}</div>
              <span className="partner-logo-name">{logo.name}</span>
            </div>
          ))}
        </div>

        <div className="become-partner">
          <div className="become-partner-content">
            <h3>{partners.becomeTitle}</h3>
            <p>{partners.becomeText}</p>
            <ul className="partner-benefits">
              {partners.benefits.map((b, i) => (
                <li key={i}>
                  <span className="check-icon">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">
              {partners.cta}
            </a>
          </div>
          <div className="become-partner-visual">
            <div className="partner-visual-circle">
              <span>🤝</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
