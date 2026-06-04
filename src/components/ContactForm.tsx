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
    <section id="contact-form" className="contact-form-section">
      <div className="container">
        <div className="contact-form-wrapper">
          <div className="contact-form-info">
            <h2>{contactForm.title}</h2>
            <p>{contactForm.subtitle}</p>
            <div className="contact-info-items">
              <div className="contact-info-item">
                <span className="contact-info-icon">📍</span>
                <div>
                  <strong>{contactInfo.address}</strong>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">📧</span>
                <div>
                  <strong>{contactInfo.email}</strong>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">📞</span>
                <div>
                  <strong>{contactInfo.phone}</strong>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">⏰</span>
                <div>
                  <strong>{contactInfo.workingHours}</strong>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact-form-success">
                <span className="success-icon">✓</span>
                <p>{contactForm.success}</p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  {contactForm.send}
                </button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>{contactForm.name}</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>{contactForm.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{contactForm.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>{contactForm.subject}</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
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
                <div className="form-group full">
                  <label>{contactForm.message}</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
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
