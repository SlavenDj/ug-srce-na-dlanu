import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function CTACards() {
  const { t } = useLanguage();
  const { ctaCards } = t;

  return (
    <section className="py-15 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{ctaCards.title}</h2>
        <p className="text-center text-gray-500 text-[1.1rem] mt-[-1rem] mb-12">{ctaCards.subtitle}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {ctaCards.cards.map((card, i) => (
            <Link
              to={card.href}
              className="bg-off-white rounded-2xl p-8 text-center no-underline text-inherit border-t-4 border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg flex flex-col items-center gap-3"
              key={i}
              style={{ borderTopColor: card.color }}
            >
              <span className="text-[2.5rem]">{card.icon}</span>
              <h3 className="text-[1.15rem] font-semibold">{card.title}</h3>
              <p className="text-gray-500 text-[0.95rem]">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
