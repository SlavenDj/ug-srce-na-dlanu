import { useLanguage } from "../context/LanguageContext";

export default function RequestHelpPage() {
  const { t } = useLanguage();
  const { trebam } = t;
  const requestTypes = [
    trebam.help,
    trebam.certificate,
    trebam.recommendation,
    trebam.excuse,
    trebam.cooperation,
    trebam.partnership,
    trebam.membership,
  ];
  const icons = ["🆘", "📜", "📝", "📋", "🤝", "🔗", "⭐"];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{trebam.title}</h1>
          <p>{trebam.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="trebam-grid">
            {requestTypes.map((item, i) => (
              <div className="trebam-card" key={i}>
                <div className="trebam-icon">{icons[i]}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="/contact" className="btn btn-secondary">{icons[i]} {item.title}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
