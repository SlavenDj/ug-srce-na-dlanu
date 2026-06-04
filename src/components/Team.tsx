import { useLanguage } from "../context/LanguageContext";

export default function Team() {
  const { t } = useLanguage();
  const { team } = t.about;

  return (
    <section id="team" className="team">
      <div className="container">
        <h2 className="section-title">{t.nav.team}</h2>
        <p className="team-subtitle">{t.about.mission}</p>

        <div className="team-grid">
          {team.map((member, i) => (
            <div className="team-card" key={i}>
              <div className="team-avatar">{member.initials}</div>
              <h3 className="team-name">{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
