import { useLanguage } from "../context/LanguageContext";
import News from "../components/News";

export default function NewsPage() {
  const { t } = useLanguage();
  const { news } = t;

  return (
    <>
      <section className="bg-gradient-to-br from-secondary dark:from-[#1e293b] to-[#1a252f] text-white pt-24 pb-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-[2.5rem] mb-4">{news.title}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <News />
        </div>
      </section>

      <section className="py-16 bg-off-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{news.announcementsTitle}</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 max-md:grid-cols-1">
            {news.announcements.map((item, i) => (
              <div className="bg-white dark:bg-[#171923] rounded-card p-6 shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg" key={i}>
                <span className="inline-block py-[0.2rem] px-[0.6rem] rounded-card-sm text-[0.75rem] font-semibold uppercase mb-3 bg-[#fff3cd] text-[#856404]">{news.announcementsTitle}</span>
                <h3 className="text-[1.05rem] text-secondary mb-2">{item.title}</h3>
                <span className="block text-[0.85rem] text-gray-500 mb-3">{item.date}</span>
                <p className="text-gray-700 dark:text-[#d1d5db] text-[0.9rem] leading-[1.5]">{item.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{news.articlesTitle}</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 max-md:grid-cols-1">
            {news.articles.map((item, i) => (
              <div className="bg-white dark:bg-[#171923] rounded-card p-6 shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg" key={i}>
                <span className="inline-block py-[0.2rem] px-[0.6rem] rounded-card-sm text-[0.75rem] font-semibold uppercase mb-3 bg-[#d1ecf1] text-[#0c5460]">{news.articlesTitle}</span>
                <h3 className="text-[1.05rem] text-secondary mb-2">{item.title}</h3>
                <span className="block text-[0.85rem] text-gray-500 mb-3">{item.date}</span>
                <p className="text-gray-700 dark:text-[#d1d5db] text-[0.9rem] leading-[1.5]">{item.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary dark:bg-[#1e293b] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">{news.blogTitle}</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 max-md:grid-cols-1">
            {news.blog.map((item, i) => (
              <div className="bg-white dark:bg-[#171923] rounded-card p-6 shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg" key={i}>
                <span className="inline-block py-[0.2rem] px-[0.6rem] rounded-card-sm text-[0.75rem] font-semibold uppercase mb-3 bg-[#f8d7da] text-[#721c24]">{news.blogTitle}</span>
                <h3 className="text-[1.05rem] text-secondary mb-2">{item.title}</h3>
                <span className="block text-[0.85rem] text-gray-500 mb-3">{item.date} &middot; {item.author}</span>
                <p className="text-gray-700 dark:text-[#d1d5db] text-[0.9rem] leading-[1.5]">{item.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
