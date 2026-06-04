import { useLanguage } from "../context/LanguageContext";

export default function BazarPage() {
  const { t } = useLanguage();
  const { bazar } = t;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{bazar.title}</h1>
          <p>{bazar.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{bazar.title}</h2>

          <div className="bazar-section">
            <h3 className="bazar-subtitle">{t.nav.gallery}</h3>
            <div className="bazar-grid">
              {bazar.auctions.map((item, i) => (
                <div className="bazar-card" key={i} style={{ borderTopColor: item.color }}>
                  <div className="bazar-card-header" style={{ background: item.color }}>
                    <span className="bazar-badge">{t.nav.gallery}</span>
                  </div>
                  <div className="bazar-card-body">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="bazar-price">{item.currentBid}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bazar-section">
            <h3 className="bazar-subtitle">{t.nav.gallery}</h3>
            <div className="bazar-grid">
              {bazar.shop.map((item, i) => (
                <div className="bazar-card" key={i} style={{ borderTopColor: item.color }}>
                  <div className="bazar-card-header" style={{ background: item.color }}>
                    <span className="bazar-badge">{t.nav.gallery}</span>
                  </div>
                  <div className="bazar-card-body">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="bazar-price">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bazar-live-auction">
            <h3>{bazar.liveAuction.title}</h3>
            <p>{bazar.liveAuction.description}</p>
            <div className="bazar-schedule">{bazar.liveAuction.schedule}</div>
          </div>

          <div className="bazar-donate-item">
            <h3>{bazar.donateItem.title}</h3>
            <p>{bazar.donateItem.description}</p>
            <a href="/contact" className="btn btn-primary">{bazar.donateItem.cta}</a>
          </div>
        </div>
      </section>
    </>
  );
}
