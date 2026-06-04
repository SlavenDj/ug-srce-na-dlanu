import { useLanguage } from "../context/LanguageContext";
import News from "../components/News";

export default function NewsPage() {
  const { t } = useLanguage();
  const { news } = t;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{news.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <News />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{news.announcementsTitle}</h2>
          <div className="news-sub-grid">
            {news.announcements.map((item, i) => (
              <div className="news-sub-card" key={i}>
                <span className="news-badge announcements">{news.announcementsTitle}</span>
                <h3>{item.title}</h3>
                <span className="news-date">{item.date}</span>
                <p>{item.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{news.articlesTitle}</h2>
          <div className="news-sub-grid">
            {news.articles.map((item, i) => (
              <div className="news-sub-card" key={i}>
                <span className="news-badge articles">{news.articlesTitle}</span>
                <h3>{item.title}</h3>
                <span className="news-date">{item.date}</span>
                <p>{item.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title light">{news.blogTitle}</h2>
          <div className="news-sub-grid">
            {news.blog.map((item, i) => (
              <div className="news-sub-card" key={i}>
                <span className="news-badge blog">{news.blogTitle}</span>
                <h3>{item.title}</h3>
                <span className="news-date">{item.date} &middot; {item.author}</span>
                <p>{item.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
