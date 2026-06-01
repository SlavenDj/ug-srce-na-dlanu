import { useLanguage } from "../context/LanguageContext";

export default function Volunteer() {
  const { t } = useLanguage();

  return (
    <section id="volunteer" className="volunteer">
      <div className="container">
        <h2 className="section-title light">{t.volunteer.title}</h2>

        <div className="volunteer-cards">
          <div className="volunteer-card">
            <div className="volunteer-card-icon">💰</div>
            <h3>{t.volunteer.sponsorTitle}</h3>
            <p>{t.volunteer.sponsorDescription}</p>
            <a href="#contact" className="btn btn-primary">
              {t.volunteer.cta}
            </a>
          </div>

          <div className="volunteer-card">
            <div className="volunteer-card-icon">🙋</div>
            <h3>{t.volunteer.volunteerTitle}</h3>
            <p>{t.volunteer.volunteerDescription}</p>
            <a href="#contact" className="btn btn-primary">
              {t.volunteer.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
