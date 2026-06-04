import { useLanguage } from "../context/LanguageContext";

export default function News() {
  const { t, language } = useLanguage();
  const { news } = t;

  return (
    <section id="news" className="py-25 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{news.title}</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7 max-md:grid-cols-1">
          {news.items.map((item, i) => (
            <div className="bg-white border border-gray-200 rounded-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1" key={i}>
              <div className="h-44 bg-gradient-to-br from-primary-light to-accent flex items-center justify-center text-[3rem]">
                <span>📰</span>
              </div>
              <div className="p-6">
                <h3 className="text-[1.05rem] text-secondary mb-2.5 leading-[1.4]">{item.title}</h3>
                <p className="text-[0.9rem] text-gray-500 leading-[1.6] mb-4">{item.excerpt}</p>
                <a href="#" className="text-primary font-semibold no-underline text-[0.9rem] transition-all duration-300 hover:text-primary-dark">
                  {language === "en" ? "Read more" : "Опширније"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
