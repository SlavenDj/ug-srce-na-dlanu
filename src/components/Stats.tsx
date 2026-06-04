import { useLanguage } from "../context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();
  const { stats } = t;

  const statsData = [
    { value: "0", label: stats.donations },
    { value: "0+", label: stats.volunteers },
    { value: "0+", label: stats.families },
    { value: "0+", label: stats.cities },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-4 gap-8 text-center max-md:grid-cols-2 max-md:gap-6">
          {statsData.map((stat, i) => (
            <div key={i}>
              <div className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-[0.95rem] text-white/85 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
