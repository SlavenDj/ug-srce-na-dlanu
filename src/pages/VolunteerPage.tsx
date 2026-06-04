import { useLanguage } from "../context/LanguageContext";
import Volunteer from "../components/Volunteer";
import Testimonials from "../components/Testimonials";

export default function VolunteerPage() {
  const { t } = useLanguage();
  const { volunteer } = t;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{volunteer.title}</h1>
          <p>{volunteer.volunteerDescription}</p>
        </div>
      </section>

      <Volunteer />

      <section className="section">
        <div className="container">
          <h2 className="section-title">{volunteer.whyVolunteer.title}</h2>
          <div className="why-volunteer-grid">
            {volunteer.whyVolunteer.items.map((item, i) => (
              <div className="why-volunteer-card" key={i}>
                <span className="why-volunteer-icon">{item.icon}</span>
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title light">{volunteer.howToVolunteer.title}</h2>
          <div className="how-volunteer-steps">
            {volunteer.howToVolunteer.steps.map((step, i) => (
              <div className="how-volunteer-step" key={i}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{volunteer.corporate.title}</h2>
          <p>{volunteer.corporate.description}</p>
          <ul className="corporate-benefits">
            {volunteer.corporate.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
          <a href="/contact" className="btn btn-primary">{volunteer.corporate.cta}</a>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{volunteer.profilesTitle}</h2>
          <div className="volunteer-profiles-grid">
            {volunteer.profiles.map((profile, i) => (
              <div className="volunteer-profile-card" key={i}>
                <div className="profile-avatar" style={{ background: profile.color }}>
                  {profile.initials}
                </div>
                <h3>{profile.name}</h3>
                <span className="profile-age">{profile.age}</span>
                <span className="profile-role">{profile.role}</span>
                <p className="profile-quote">"{profile.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{volunteer.alumniTitle}</h2>
          <div className="alumni-grid">
            {volunteer.alumni.map((alumnus, i) => (
              <div className="alumni-card" key={i}>
                <h3>{alumnus.name}</h3>
                <span className="alumni-years">{alumnus.yearsActive}</span>
                <span className="alumni-role">{alumnus.currentRole}</span>
                <p className="alumni-quote">"{alumnus.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
