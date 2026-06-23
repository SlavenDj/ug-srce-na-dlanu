import { useLanguage } from "../context/LanguageContext";

export default function CTABanner() {
  const { t } = useLanguage();
  const { cta } = t;

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2740%27%20height%3D%2740%27%20viewBox%3D%270%200%2040%2040%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.06%27%3E%3Cpath%20d%3D%27M20%2020c0-5.523%204.477-10%2010-10s10%204.477%2010%2010-4.477%2010-10%2010-10-4.477-10-10zm-20%200c0-5.523%204.477-10%2010-10s10%204.477%2010%2010-4.477%2010-10%2010S0%2025.523%200%2020z%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      <div className="relative z-10 text-center max-w-[700px] mx-auto px-6">
        <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] text-white mb-4 font-bold">{cta.title}</h2>
        <p className="text-white/85 text-[1.1rem] mb-8 leading-[1.7]">{cta.subtitle}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#partners" className="inline-block px-9 py-3.5 rounded-xl font-bold no-underline cursor-pointer border-none transition-all duration-300 bg-white dark:bg-[#171923] text-primary hover:bg-gray-100 dark:hover:bg-[#1f2128] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,255,255,0.3)]">
            {cta.primaryCta}
          </a>
          <a href="#volunteer" className="inline-block px-9 py-3.5 rounded-xl font-semibold no-underline cursor-pointer transition-all duration-300 bg-transparent text-white border-2 border-white/50 hover:bg-white/15 hover:border-white">
            {cta.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
