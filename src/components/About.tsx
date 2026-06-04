import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-25 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{t.about.title}</h2>
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-15 items-center max-md:grid-cols-1 max-md:gap-10">
          <div>
            <p className="text-[1.05rem] text-gray-700 leading-[1.8]">{t.about.description}</p>
            <div className="mt-8 p-6 bg-off-white rounded-card border-l-4 border-primary">
              <h4 className="text-primary mb-2 text-base">{t.about.mission}</h4>
              <p className="text-gray-700 text-[0.95rem]">{t.about.missionText}</p>
            </div>
            <div className="mt-4 p-6 bg-off-white rounded-card border-l-4 border-accent">
              <h4 className="text-primary mb-2 text-base">{t.about.vision}</h4>
              <p className="text-gray-700 text-[0.95rem]">{t.about.visionText}</p>
            </div>
            <div className="mt-8">
              <h4 className="text-primary mb-4 text-base">{language === "sr" ? "Наше вриједности" : "Our Values"}</h4>
              <ul className="list-none grid grid-cols-2 gap-2 max-md:grid-cols-1">
                {t.about.values.map((v, i) => (
                  <li key={i} className="flex items-center gap-2 text-[0.9rem] text-gray-700">
                    <span className="text-[0.75rem]">❤</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-md:order-[-1] max-md:max-w-[250px] max-md:mx-auto">
            <div className="w-full aspect-square bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center shadow-card-lg">
              <span className="text-[5rem]">❤</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
