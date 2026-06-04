import { useLanguage } from "../context/LanguageContext";

export default function Timeline() {
  const { t } = useLanguage();
  const { timeline } = t.about;

  return (
    <section className="py-25 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{t.about.foundingStory}</h2>

        <div className="relative max-w-[900px] mx-auto py-5">
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gray-200 -translate-x-1/2 max-md:left-5" />
          {timeline.map((item, i) => (
            <div
              className={`relative w-1/2 pb-15 pl-10 pr-10 max-md:w-full max-md:left-0! max-md:pl-[50px] max-md:pr-4 max-md:text-left! ${i % 2 === 0 ? "left-0 text-right" : "left-1/2 text-left"}`}
              key={i}
            >
              <div className={`absolute top-2 w-4 h-4 bg-primary rounded-full border-[3px] border-white shadow-[0_0_0_3px_primary] z-[1] ${i % 2 === 0 ? "right-[-8px] max-md:left-[12px]! max-md:right-auto!" : "left-[-8px] max-md:left-[12px]! max-md:right-auto!"}`} />
              <div className="bg-white p-6 rounded-card shadow-card border border-gray-200">
                <div className="inline-block bg-primary text-white py-1 px-3.5 rounded-2xl text-[0.85rem] font-bold mb-3">{item.year}</div>
                <h3 className="text-[1.05rem] text-secondary mb-2">{item.title}</h3>
                <p className="text-[0.9rem] text-gray-500 leading-[1.6]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
