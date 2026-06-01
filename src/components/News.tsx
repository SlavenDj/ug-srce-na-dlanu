import { useLanguage } from "../context/LanguageContext";

export default function News() {
  const { t, language } = useLanguage();
  const { news } = t;

  return (
    <section id="news" className="news">
      <div className="container">
        <h2 className="section-title">{news.title}</h2>

        <div className="news-grid">
          {news.items.map((item, i) => (
            <div className="news-card" key={i}>
              <div className="news-image-placeholder">
                <span>📰</span>
              </div>
              <div className="news-card-content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <a href="#" className="news-link">
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
