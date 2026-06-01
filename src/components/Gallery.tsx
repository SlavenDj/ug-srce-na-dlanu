import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();
  const { gallery } = t;
  const [activeCategory, setActiveCategory] = useState(gallery.categories[0]);

  const filtered =
    activeCategory === gallery.categories[0]
      ? gallery.items
      : gallery.items.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">{gallery.title}</h2>
        <p className="gallery-subtitle">{gallery.subtitle}</p>

        <div className="gallery-filters">
          {gallery.categories.map((cat, i) => (
            <button
              key={i}
              className={`gallery-filter ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <div className="gallery-card" key={i}>
              <div
                className="gallery-card-image"
                style={{ background: item.color }}
              >
                <span className="gallery-card-icon">📸</span>
              </div>
              <div className="gallery-card-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className="gallery-card-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
