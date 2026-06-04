import { useLanguage } from "../context/LanguageContext";

export default function Volunteer() {
  const { t } = useLanguage();

  return (
    <section id="volunteer" className="py-25 bg-gradient-to-br from-secondary to-secondary-light">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">{t.volunteer.title}</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-md:grid-cols-1">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/15 rounded-card p-10 text-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-1">
            <div className="text-[3rem] mb-5">💰</div>
            <h3 className="text-[1.3rem] text-white mb-4">{t.volunteer.sponsorTitle}</h3>
            <p className="text-[0.95rem] text-white/80 leading-[1.7] mb-6">{t.volunteer.sponsorDescription}</p>
            <a href="#contact" className="inline-block px-9 py-3.5 rounded-xl font-semibold no-underline cursor-pointer border-none transition-all duration-300 bg-accent text-white hover:bg-[#d35400] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(230,126,34,0.4)]">
              {t.volunteer.cta}
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl border border-white/15 rounded-card p-10 text-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-1">
            <div className="text-[3rem] mb-5">🙋</div>
            <h3 className="text-[1.3rem] text-white mb-4">{t.volunteer.volunteerTitle}</h3>
            <p className="text-[0.95rem] text-white/80 leading-[1.7] mb-6">{t.volunteer.volunteerDescription}</p>
            <a href="#contact" className="inline-block px-9 py-3.5 rounded-xl font-semibold no-underline cursor-pointer border-none transition-all duration-300 bg-accent text-white hover:bg-[#d35400] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(230,126,34,0.4)]">
              {t.volunteer.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
