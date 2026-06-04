import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
      <div className="relative z-10 text-center px-6 max-w-[800px]">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white mb-4 tracking-tight leading-[1.1] drop-shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
          {t.hero.title}
        </h1>
        <p className="text-[clamp(1rem,2vw,1.35rem)] text-white/90 mb-9 font-light tracking-wide">
          {t.hero.subtitle}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#volunteer" className="inline-block px-9 py-3.5 rounded-xl font-semibold no-underline cursor-pointer border-none transition-all duration-300 bg-accent text-white hover:bg-[#d35400] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(230,126,34,0.4)]">
            {t.hero.cta}
          </a>
          <a href="#about" className="inline-block px-9 py-3.5 rounded-xl font-semibold no-underline cursor-pointer transition-all duration-300 bg-transparent text-white border-2 border-white/50 hover:bg-white/15 hover:border-white">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
