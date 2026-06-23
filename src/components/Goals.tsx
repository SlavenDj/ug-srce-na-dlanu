import { useLanguage } from "../context/LanguageContext";

const icons = ["🤝", "💝", "💰", "🙋"];

export default function Goals() {
  const { t } = useLanguage();
  const { goals } = t;

  return (
    <section className="py-25 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{goals.title}</h2>

        <div className="max-w-[700px] mx-auto mb-15 text-center">
          <p className="text-[1.2rem] italic text-gray-700 dark:text-[#d1d5db] leading-[1.8] mb-3">"{goals.quote}"</p>
          <span className="text-[0.95rem] text-gray-500 font-medium">{goals.quoteAuthor}</span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 mb-15">
          {goals.cards.map((card, i) => (
            <div className="bg-white dark:bg-[#171923] p-8 rounded-card shadow-card text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg" key={i}>
              <div className="text-[2.5rem] mb-4">{icons[i]}</div>
              <h3 className="text-[1.15rem] text-secondary mb-3 font-semibold">{card.title}</h3>
              <p className="text-[0.92rem] text-gray-500 leading-[1.7]">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[700px] mx-auto">
          <h3 className="text-[1.4rem] text-secondary mb-3 text-center">{goals.progressTitle}</h3>
          <p className="text-center text-gray-500 mb-6">
            {t.help.description}
          </p>
          <div className="bg-white dark:bg-[#171923] p-6 rounded-card shadow-card">
            <div className="flex justify-between mb-3 text-[0.9rem] font-medium text-gray-700 dark:text-[#d1d5db]">
              <span>{goals.raised}: KM 1.000,00</span>
              <span>{goals.goal}: KM 10.000,00 КМ</span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-[#2a2d3a] rounded-[6px] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-[6px] transition-[width] duration-[1.5s] ease"
                style={{ width: `${goals.percent}%` }}
              />
            </div>
            <div className="text-center mt-2 font-bold text-primary text-[1.1rem]">{goals.percent}%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
