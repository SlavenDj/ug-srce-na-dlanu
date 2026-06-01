import { useLanguage } from "../context/LanguageContext";

export default function CTABanner() {
  const { t } = useLanguage();
  const { cta } = t;

  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner-content">
          <h2>{cta.title}</h2>
          <p>{cta.subtitle}</p>
          <div className="cta-banner-buttons">
            <a href="#partners" className="btn btn-white">
              {cta.primaryCta}
            </a>
            <a href="#volunteer" className="btn btn-outline-white">
              {cta.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
