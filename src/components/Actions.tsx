import { useLanguage } from "../context/LanguageContext";

export default function Actions() {
  const { t } = useLanguage();
  const { actions } = t;

  return (
    <section id="actions" className="actions">
      <div className="container">
        <h2 className="section-title">{actions.title}</h2>

        <div className="events-grid">
          {actions.events.map((event, i) => (
            <div className="event-card" key={i}>
              <div className="event-header">
                <div className="event-number">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="event-meta">
                  <span className="event-date">{event.date}</span>
                  <span className="event-location">{event.location}</span>
                  <span className="event-needed">{event.needed}</span>
                </div>
              </div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <button className="btn btn-secondary">
                {t.nav.contact}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
