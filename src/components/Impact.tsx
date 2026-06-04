import { useLanguage } from "../context/LanguageContext";

export default function Impact() {
  const { t } = useLanguage();
  const { impact } = t;

  return (
    <section className="py-25 bg-gradient-to-br from-secondary to-[#1a252f]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">{impact.title}</h2>
        <p className="text-center text-white/70 text-[1.1rem] mt-[-32px] mb-12">{impact.subtitle}</p>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {impact.items.map((item, i) => (
            <div className="bg-white/7 backdrop-blur-2xl border border-white/10 rounded-card p-8 text-center transition-all duration-300 hover:bg-white/12 hover:-translate-y-1" key={i}>
              <div className="text-[2.2rem] mb-3">{item.icon}</div>
              <div className="text-[2.2rem] font-extrabold text-accent mb-1">{item.value}</div>
              <div className="text-[0.9rem] text-white/70 font-normal">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
