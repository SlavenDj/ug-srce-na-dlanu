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
    <section id="gallery" className="py-25 bg-white dark:bg-[#0f1117]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{gallery.title}</h2>
        <p className="text-center text-gray-500 text-[1.05rem] mt-[-32px] mb-8">{gallery.subtitle}</p>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {gallery.categories.map((cat, i) => (
            <button
              key={i}
              className={`py-2 px-5 border-2 border-gray-200 dark:border-[#2a2d3a] bg-transparent rounded-full text-[0.88rem] font-medium cursor-pointer transition-all duration-300 text-gray-700 dark:text-[#d1d5db] ${activeCategory === cat ? "bg-primary text-white border-primary" : "hover:border-primary hover:text-primary"}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
          {filtered.map((item, i) => (
            <div className="rounded-card overflow-hidden border border-gray-200 dark:border-[#2a2d3a] transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1" key={i}>
              <div
                className="h-40 flex items-center justify-center"
                style={{ background: item.color }}
              >
                <span className="text-[2.5rem] opacity-50">📸</span>
              </div>
              <div className="p-4">
                <h4 className="text-[0.95rem] text-secondary mb-1">{item.title}</h4>
                <p className="text-[0.82rem] text-gray-500 leading-[1.5] mb-2">{item.description}</p>
                <span className="text-[0.75rem] bg-gray-100 dark:bg-[#1f2128] text-gray-700 dark:text-[#d1d5db] py-[3px] px-2.5 rounded-2xl font-medium">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
