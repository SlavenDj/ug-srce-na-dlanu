import { useLanguage } from "../context/LanguageContext";

export default function Partners() {
  const { t } = useLanguage();
  const { partners } = t;

  return (
    <section id="partners" className="py-25 bg-white dark:bg-[#0f1117]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{partners.title}</h2>
        <p className="text-center text-gray-500 text-[1.05rem] mt-[-32px] mb-12">{partners.subtitle}</p>

        <div className="grid grid-cols-6 gap-5 mb-16 max-md:grid-cols-3 max-sm:grid-cols-2">
          {partners.logos.map((logo, i) => (
            <div className="flex flex-col items-center gap-2.5 p-6 bg-off-white dark:bg-[#171923] rounded-card border border-gray-200 dark:border-[#2a2d3a] transition-all duration-300 hover:border-primary hover:shadow-card-hover hover:-translate-y-0.5" key={i}>
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white text-[1.2rem] font-bold">{logo.placeholder}</div>
              <span className="text-[0.78rem] text-gray-700 dark:text-[#d1d5db] font-medium text-center">{logo.name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1.3fr_0.7fr] gap-15 items-center bg-off-white rounded-card p-12 max-md:grid-cols-1 max-md:p-8">
          <div>
            <h3 className="text-[1.6rem] text-secondary mb-4">{partners.becomeTitle}</h3>
            <p className="text-gray-500 leading-[1.7] mb-7">{partners.becomeText}</p>
            <ul className="list-none mb-7">
              {partners.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2.5 py-2 text-gray-700 dark:text-[#d1d5db] text-[0.95rem]">
                  <span className="text-green-600 font-bold text-[1.1rem]">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block px-9 py-3.5 rounded-xl font-semibold no-underline cursor-pointer border-none transition-all duration-300 bg-accent text-white hover:bg-[#d35400] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(230,126,34,0.4)]">
              {partners.cta}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="w-[200px] h-[200px] bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center mx-auto shadow-card-lg">
              <span className="text-[5rem]">🤝</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
