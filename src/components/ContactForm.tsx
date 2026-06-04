import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const { contactForm, contactInfo } = t;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact-form" className="py-25 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-[1fr_1.3fr] gap-15 items-start max-md:grid-cols-1 max-md:gap-10">
          <div>
            <h2 className="text-[1.8rem] text-secondary mb-3">{contactForm.title}</h2>
            <p className="text-gray-500 mb-8 leading-[1.6]">{contactForm.subtitle}</p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3.5">
                <span className="text-[1.5rem] w-12 h-12 bg-off-white rounded-xl flex items-center justify-center shrink-0">📍</span>
                <div>
                  <strong className="text-secondary text-[0.95rem]">{contactInfo.address}</strong>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="text-[1.5rem] w-12 h-12 bg-off-white rounded-xl flex items-center justify-center shrink-0">📧</span>
                <div>
                  <strong className="text-secondary text-[0.95rem]">{contactInfo.email}</strong>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="text-[1.5rem] w-12 h-12 bg-off-white rounded-xl flex items-center justify-center shrink-0">📞</span>
                <div>
                  <strong className="text-secondary text-[0.95rem]">{contactInfo.phone}</strong>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="text-[1.5rem] w-12 h-12 bg-off-white rounded-xl flex items-center justify-center shrink-0">⏰</span>
                <div>
                  <strong className="text-secondary text-[0.95rem]">{contactInfo.workingHours}</strong>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-off-white p-9 rounded-card" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="text-center py-10 px-5">
                <span className="inline-flex w-16 h-16 bg-green-600 text-white rounded-full items-center justify-center text-2xl mb-4">✓</span>
                <p className="text-gray-700 text-[1.05rem] mb-6">{contactForm.success}</p>
                <button
                  type="button"
                  className="inline-block px-9 py-3.5 rounded-xl font-semibold text-[1rem] cursor-pointer border-2 border-primary bg-transparent text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                  onClick={() => setSubmitted(false)}
                >
                  {contactForm.send}
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
                  <div className="flex flex-col">
                    <label className="text-[0.88rem] font-semibold text-gray-700 mb-1.5">{contactForm.name}</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="py-3 px-4 border-2 border-gray-200 rounded-card-sm text-[0.95rem] bg-white text-gray-900 outline-none transition-all duration-300 font-[inherit] focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[0.88rem] font-semibold text-gray-700 mb-1.5">{contactForm.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="py-3 px-4 border-2 border-gray-200 rounded-card-sm text-[0.95rem] bg-white text-gray-900 outline-none transition-all duration-300 font-[inherit] focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
                  <div className="flex flex-col">
                    <label className="text-[0.88rem] font-semibold text-gray-700 mb-1.5">{contactForm.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="py-3 px-4 border-2 border-gray-200 rounded-card-sm text-[0.95rem] bg-white text-gray-900 outline-none transition-all duration-300 font-[inherit] focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[0.88rem] font-semibold text-gray-700 mb-1.5">{contactForm.subject}</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="py-3 px-4 border-2 border-gray-200 rounded-card-sm text-[0.95rem] bg-white text-gray-900 outline-none transition-all duration-300 font-[inherit] focus:border-primary"
                    >
                      <option value="">{contactForm.subject}</option>
                      {contactForm.subjects.map((s, i) => (
                        <option key={i} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col mb-5">
                  <label className="text-[0.88rem] font-semibold text-gray-700 mb-1.5">{contactForm.message}</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 border-2 border-gray-200 rounded-card-sm text-[0.95rem] bg-white text-gray-900 outline-none transition-all duration-300 font-[inherit] resize-y focus:border-primary"
                  />
                </div>
                <button type="submit" className="inline-block px-9 py-3.5 rounded-xl font-semibold text-[1rem] cursor-pointer border-none transition-all duration-300 bg-accent text-white hover:bg-[#d35400] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(230,126,34,0.4)]">
                  {contactForm.send}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
