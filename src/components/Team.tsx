import { useLanguage } from "../context/LanguageContext";

export default function Team() {
  const { t } = useLanguage();
  const { team } = t;

  return (
    <section id="team" className="team">
      <div className="container">
        <h2 className="section-title">{team.title}</h2>
        <p className="team-subtitle">{team.subtitle}</p>

        <div className="team-grid">
          {team.members.map((member, i) => (
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
