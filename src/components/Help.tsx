import { useLanguage } from "../context/LanguageContext";

export default function Help() {
  const { t } = useLanguage();

  return (
    <section className="help">
      <div className="container">
        <div className="help-content">
          <h2>{t.help.title}</h2>
          <p>{t.help.description}</p>
          <p className="help-question">{t.help.question}</p>
          <a href="#contact" className="btn btn-primary">
            {t.help.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
