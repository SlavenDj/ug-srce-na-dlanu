import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const { faq } = t;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-25 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{faq.title}</h2>
        <p className="text-center text-gray-500 text-[1.05rem] mt-[-32px] mb-12">{faq.subtitle}</p>

        <div className="max-w-[800px] mx-auto">
          {faq.items.map((item, i) => (
            <div
              className={`bg-white dark:bg-[#171923] border border-gray-200 dark:border-[#2a2d3a] rounded-card mb-3 overflow-hidden transition-all duration-300 ${openIndex === i ? "border-primary shadow-card" : "hover:border-primary"}`}
              key={i}
            >
              <button
                className="w-full flex justify-between items-center py-5 px-6 bg-transparent border-none cursor-pointer text-base font-semibold text-secondary text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.question}</span>
                <span className={`text-[1.4rem] text-primary font-light w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#1f2128] shrink-0 transition-all duration-300 ${openIndex === i ? "bg-primary text-white" : ""}`}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-[0.95rem] text-gray-500 leading-[1.7]">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
