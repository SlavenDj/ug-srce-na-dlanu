import { useLanguage } from "../context/LanguageContext";

export default function DonatePage() {
  const { t } = useLanguage();
  const { donate } = t;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{donate.title}</h1>
          <p>{donate.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="donate-grid">
            <div className="donate-card">
              <div className="donate-card-icon">💳</div>
              <h2>{donate.online.title}</h2>
              <p>{donate.online.description}</p>
              <ul className="donate-methods">
                {donate.online.methods.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>

            <div className="donate-card">
              <div className="donate-card-icon">🌍</div>
              <h2>{donate.foreign.title}</h2>
              <p>{donate.foreign.description}</p>
              <div className="bank-details">
                <div className="bank-detail">
                  <strong>IBAN:</strong> <code>{donate.foreign.iban}</code>
                </div>
                <div className="bank-detail">
                  <strong>SWIFT:</strong> <code>{donate.foreign.swift}</code>
                </div>
                <div className="bank-detail">
                  <strong>{t.contactForm.subject}:</strong> {donate.foreign.purpose}
                </div>
                <div className="bank-detail">
                  <strong>{donate.domestic.bank}:</strong> {donate.foreign.bank}
                </div>
              </div>
            </div>

            <div className="donate-card">
              <div className="donate-card-icon">🏦</div>
              <h2>{donate.domestic.title}</h2>
              <p>{donate.domestic.description}</p>
              <div className="bank-details">
                <div className="bank-detail">
                  <strong>{t.contactForm.subject}:</strong> <code>{donate.domestic.accountNumber}</code>
                </div>
                <div className="bank-detail">
                  <strong>{donate.domestic.bank}</strong>
                </div>
              </div>
            </div>

            <div className="donate-card">
              <div className="donate-card-icon">📦</div>
              <h2>{donate.goods.title}</h2>
              <p>{donate.goods.description}</p>
              <ul className="donate-methods">
                {donate.goods.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="donate-card">
              <div className="donate-card-icon">🔧</div>
              <h2>{donate.services.title}</h2>
              <p>{donate.services.description}</p>
              <ul className="donate-methods">
                {donate.services.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
