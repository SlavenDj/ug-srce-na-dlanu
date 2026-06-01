import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const { testimonials } = t;

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">{testimonials.title}</h2>
        <p className="testimonials-subtitle">{testimonials.subtitle}</p>

        <div className="testimonials-grid">
          {testimonials.items.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-quote-icon">"</div>
              <p className="testimonial-quote">{item.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-name">{item.author}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
