import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function CTACards() {
  const { t } = useLanguage();
  const { ctaCards } = t;

  return (
    <section className="cta-cards">
      <div className="container">
        <h2 className="section-title">{ctaCards.title}</h2>
        <p className="cta-cards-subtitle">{ctaCards.subtitle}</p>
        <div className="cta-cards-grid">
          {ctaCards.cards.map((card, i) => (
            <Link to={card.href} className="cta-card" key={i} style={{ borderTopColor: card.color }}>
              <span className="cta-card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
