import { useLanguage } from "../context/LanguageContext";

export default function Actions() {
  const { t } = useLanguage();
  const { actions } = t;

  return (
    <section id="actions" className="py-25 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{actions.title}</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8 max-md:grid-cols-1">
          {actions.events.map((event, i) => (
            <div className="bg-white border border-gray-200 rounded-card p-8 transition-all duration-300 hover:border-primary hover:shadow-card-hover" key={i}>
              <div className="flex items-start gap-4 mb-5">
                <div className="text-[2rem] font-extrabold text-primary leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-secondary text-[0.95rem]">{event.date}</span>
                  <span className="text-[0.85rem] text-gray-500">{event.location}</span>
                  <span className="text-[0.85rem] text-accent font-semibold">{event.needed}</span>
                </div>
              </div>
              <h3 className="text-[1.05rem] text-secondary mb-3 leading-[1.4]">{event.title}</h3>
              <p className="text-[0.9rem] text-gray-500 leading-[1.7] mb-5">{event.description}</p>
              <button className="inline-block px-9 py-3.5 rounded-xl font-semibold text-[1rem] cursor-pointer border-2 border-primary bg-transparent text-primary transition-all duration-300 hover:bg-primary hover:text-white">
                {t.nav.contact}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
