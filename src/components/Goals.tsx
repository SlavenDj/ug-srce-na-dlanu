import { useLanguage } from "../context/LanguageContext";

const icons = ["🤝", "💝", "💰", "🙋"];

export default function Goals() {
  const { t } = useLanguage();
  const { goals } = t;

  return (
    <section className="goals">
      <div className="container">
        <h2 className="section-title">{goals.title}</h2>

        <div className="goals-quote">
          <p className="quote-text">"{goals.quote}"</p>
          <span className="quote-author">{goals.quoteAuthor}</span>
        </div>

        <div className="goals-cards">
          {goals.cards.map((card, i) => (
            <div className="goal-card" key={i}>
              <div className="goal-card-icon">{icons[i]}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <div className="progress-section">
          <h3>{goals.progressTitle}</h3>
          <p className="progress-desc">
            {t.help.description}
          </p>
          <div className="progress-bar-container">
            <div className="progress-info">
              <span>{goals.raised}: KM 1.000,00</span>
              <span>{goals.goal}: KM 10.000,00 КМ</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${goals.percent}%` }}
              />
            </div>
            <div className="progress-percent">{goals.percent}%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
