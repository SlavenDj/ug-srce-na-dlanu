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
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
