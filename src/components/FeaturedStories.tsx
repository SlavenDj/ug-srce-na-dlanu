import { useLanguage } from "../context/LanguageContext";

export default function FeaturedStories() {
  const { t } = useLanguage();
  const { featuredStories } = t;

  return (
    <section className="py-15 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{featuredStories.title}</h2>
        <p className="text-center text-gray-500 text-[1.1rem] mt-[-1rem] mb-12">{featuredStories.subtitle}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-md:grid-cols-1">
          {featuredStories.items.map((story, i) => (
            <div className="bg-white dark:bg-[#171923] rounded-2xl overflow-hidden shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]" key={i}>
              <div className="h-20 flex items-center justify-center" style={{ background: story.color }}>
                <span className="text-2xl font-bold text-white">{story.initials}</span>
              </div>
              <div className="p-6">
                <h3 className="text-[1.1rem] font-semibold mb-3">{story.name}</h3>
                <p className="text-gray-500 italic leading-[1.6] text-[0.95rem]">&ldquo;{story.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
