import { useLanguage } from "../context/LanguageContext";

export default function Help() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] text-secondary mb-4">{t.help.title}</h2>
          <p className="text-base text-gray-500 leading-[1.7] mb-3">{t.help.description}</p>
          <p className="font-semibold text-secondary text-[1.05rem] mb-6">{t.help.question}</p>
          <a href="#contact" className="inline-block px-9 py-3.5 rounded-xl font-semibold no-underline cursor-pointer border-none transition-all duration-300 bg-accent text-white hover:bg-[#d35400] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(230,126,34,0.4)]">
            {t.help.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
