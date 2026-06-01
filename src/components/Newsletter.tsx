import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Newsletter() {
  const { t } = useLanguage();
  const { newsletter } = t;
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>{newsletter.title}</h2>
            <p>{newsletter.subtitle}</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="newsletter-success">{newsletter.success}</div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  {newsletter.button}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
