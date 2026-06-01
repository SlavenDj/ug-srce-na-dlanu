import { useLanguage } from "../context/LanguageContext";

export default function Impact() {
  const { t } = useLanguage();
  const { impact } = t;

  return (
    <section className="impact">
      <div className="container">
        <h2 className="section-title light">{impact.title}</h2>
        <p className="impact-subtitle">{impact.subtitle}</p>
        <div className="impact-grid">
          {impact.items.map((item, i) => (
            <div className="impact-card" key={i}>
              <div className="impact-icon">{item.icon}</div>
              <div className="impact-value">{item.value}</div>
              <div className="impact-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
