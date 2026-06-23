import { useLanguage } from "../context/LanguageContext";
import Volunteer from "../components/Volunteer";
import JoinForm from "../components/JoinForm";
import Testimonials from "../components/Testimonials";

export default function VolunteerPage() {
  const { t } = useLanguage();
  const { volunteer } = t;

  return (
    <>
      <section className="bg-gradient-to-br from-secondary dark:from-[#1e293b] to-[#1a252f] text-white pt-24 pb-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-[2.5rem] mb-4">{volunteer.title}</h1>
          <p className="text-[1.15rem] opacity-90 max-w-[600px] mx-auto leading-[1.6]">{volunteer.volunteerDescription}</p>
        </div>
      </section>

      <Volunteer />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{volunteer.whyVolunteer.title}</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 max-md:grid-cols-1">
            {volunteer.whyVolunteer.items.map((item, i) => (
              <div className="bg-white dark:bg-[#171923] rounded-card p-8 shadow-card-hover text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg" key={i}>
                <span className="text-[2.5rem] block mb-4">{item.icon}</span>
                <h3 className="text-[1.1rem] mb-3 text-secondary">{item.heading}</h3>
                <p className="text-gray-500 text-[0.95rem] leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary dark:bg-[#1e293b] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">{volunteer.howToVolunteer.title}</h2>
          <div className="grid grid-cols-3 gap-8 max-w-[900px] mx-auto max-md:grid-cols-1 max-md:gap-6">
            {volunteer.howToVolunteer.steps.map((step, i) => (
              <div className="text-center" key={i}>
                <div className="w-[50px] h-[50px] rounded-full bg-primary text-white flex items-center justify-center text-[1.25rem] font-bold mx-auto mb-4">{step.number}</div>
                <h3 className="text-[1.1rem] mb-2 text-white">{step.title}</h3>
                <p className="text-white/80 text-[0.9rem] leading-[1.6]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{volunteer.corporate.title}</h2>
          <p className="text-gray-500 text-center mb-4">{volunteer.corporate.description}</p>
          <ul className="list-none grid grid-cols-2 gap-3 max-w-[600px] mx-auto mb-6 max-md:grid-cols-1">
            {volunteer.corporate.benefits.map((benefit, i) => (
              <li key={i} className="bg-gray-100 dark:bg-[#1f2128] py-3 px-4 rounded-card-sm text-[0.95rem] text-secondary text-center">{benefit}</li>
            ))}
          </ul>
          <div className="text-center">
            <a href="/contact" className="inline-block px-9 py-3.5 rounded-xl font-semibold no-underline cursor-pointer border-none transition-all duration-300 bg-accent text-white hover:bg-[#d35400] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(230,126,34,0.4)]">{volunteer.corporate.cta}</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-off-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{volunteer.profilesTitle}</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 max-md:grid-cols-1">
            {volunteer.profiles.map((profile, i) => (
              <div className="bg-white dark:bg-[#171923] rounded-card p-8 shadow-card-hover text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg" key={i}>
                <div className="w-16 h-16 rounded-full text-white flex items-center justify-center font-bold text-[1.1rem] mx-auto mb-4" style={{ background: profile.color }}>
                  {profile.initials}
                </div>
                <h3 className="text-[1.05rem] text-secondary mb-1">{profile.name}</h3>
                <span className="block text-[0.85rem] text-gray-500">{profile.age}</span>
                <span className="block text-[0.85rem] text-gray-500">{profile.role}</span>
                <p className="italic text-gray-700 dark:text-[#d1d5db] text-[0.9rem] leading-[1.5] mt-3">&ldquo;{profile.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{volunteer.alumniTitle}</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-6 max-md:grid-cols-1">
            {volunteer.alumni.map((alumnus, i) => (
              <div className="bg-white dark:bg-[#171923] rounded-card p-8 shadow-card-hover border-l-4 border-accent" key={i}>
                <h3 className="text-[1.1rem] text-secondary mb-1">{alumnus.name}</h3>
                <span className="block text-[0.85rem] text-accent font-semibold mb-1">{alumnus.yearsActive}</span>
                <span className="block text-[0.9rem] text-gray-500 mb-3">{alumnus.currentRole}</span>
                <p className="italic text-gray-700 dark:text-[#d1d5db] text-[0.9rem] leading-[1.5]">&ldquo;{alumnus.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinForm />
      <Testimonials />
    </>
  );
}
