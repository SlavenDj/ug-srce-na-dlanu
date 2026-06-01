import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const { faq } = t;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">{faq.title}</h2>
        <p className="faq-subtitle">{faq.subtitle}</p>

        <div className="faq-list">
          {faq.items.map((item, i) => (
            <div
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              key={i}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.question}</span>
                <span className="faq-toggle">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
