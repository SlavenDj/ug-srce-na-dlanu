import { useLanguage } from "../context/LanguageContext";

export default function Timeline() {
  const { t } = useLanguage();
  const { timeline } = t;

  return (
    <section className="timeline-section">
      <div className="container">
        <h2 className="section-title">{timeline.title}</h2>
        <p className="timeline-subtitle">{timeline.subtitle}</p>

        <div className="timeline">
          {timeline.items.map((item, i) => (
            <div className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`} key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}
