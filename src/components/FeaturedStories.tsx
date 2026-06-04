import { useLanguage } from "../context/LanguageContext";

export default function FeaturedStories() {
  const { t } = useLanguage();
  const { featuredStories } = t;

  return (
    <section className="featured-stories">
      <div className="container">
        <h2 className="section-title">{featuredStories.title}</h2>
        <p className="featured-stories-subtitle">{featuredStories.subtitle}</p>
        <div className="stories-grid">
          {featuredStories.items.map((story, i) => (
            <div className="story-card" key={i}>
              <div className="story-image" style={{ background: story.color }}>
                <span className="story-initials">{story.initials}</span>
              </div>
              <div className="story-content">
                <h3>{story.name}</h3>
                <p className="story-quote">"{story.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
