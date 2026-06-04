import { useLanguage } from "../context/LanguageContext";

export default function Team() {
  const { t } = useLanguage();
  const { team } = t.about;

  return (
    <section id="team" className="py-25 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{t.nav.team}</h2>
        <p className="text-center text-gray-500 text-[1.05rem] mt-[-32px] mb-12">{t.about.mission}</p>

        <div className="grid grid-cols-3 gap-7 max-md:grid-cols-2 max-sm:grid-cols-1">
          {team.map((member, i) => (
            <div className="bg-white rounded-card p-8 text-center shadow-card border border-gray-200 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1" key={i}>
              <div className="w-[72px] h-[72px] bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-[1.4rem] font-bold mx-auto mb-4">{member.initials}</div>
              <h3 className="text-[1.1rem] text-secondary mb-1">{member.name}</h3>
              <div className="text-[0.85rem] text-primary font-semibold mb-3">{member.role}</div>
              <p className="text-[0.9rem] text-gray-500 leading-[1.6]">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
