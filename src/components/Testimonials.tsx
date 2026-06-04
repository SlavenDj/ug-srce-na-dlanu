import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const { testimonials } = t;

  return (
    <section className="py-25 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{testimonials.title}</h2>
        <p className="text-center text-gray-500 text-[1.05rem] mt-[-32px] mb-12">{testimonials.subtitle}</p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7 max-md:grid-cols-1">
          {testimonials.items.map((item, i) => (
            <div className="bg-white rounded-card p-8 shadow-card border border-gray-200 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 relative" key={i}>
              <div className="text-[4rem] text-primary-light/20 leading-none absolute top-4 left-6 font-serif z-[1]">&ldquo;</div>
              <p className="text-[0.95rem] text-gray-700 leading-[1.7] italic mb-6 relative z-[1]">{item.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-base">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-secondary text-[0.95rem]">{item.author}</div>
                  <div className="text-[0.82rem] text-gray-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
