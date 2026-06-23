import { useLanguage } from "../context/LanguageContext";

export default function BazarPage() {
  const { t } = useLanguage();
  const { bazar } = t;

  return (
    <>
      <section className="bg-gradient-to-br from-secondary dark:from-[#1e293b] to-[#1a252f] text-white pt-24 pb-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-[2.5rem] mb-4">{bazar.title}</h1>
          <p className="text-[1.15rem] opacity-90 max-w-[600px] mx-auto leading-[1.6]">{bazar.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">{bazar.title}</h2>

          <div className="mb-8">
            <h3 className="text-[1.5rem] text-secondary mb-6 text-center">{t.nav.gallery}</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 max-md:grid-cols-1">
              {bazar.auctions.map((item, i) => (
                <div className="bg-white dark:bg-[#171923] rounded-card overflow-hidden shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg border-t-4 border-transparent" key={i} style={{ borderTopColor: item.color }}>
                  <div className="h-20 flex items-end p-3" style={{ background: item.color }}>
                    <span className="bg-white/90 dark:bg-[#171923]/90 py-1 px-3 rounded-card-sm text-[0.8rem] font-semibold text-secondary">{t.nav.gallery}</span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-[1.05rem] mb-2 text-secondary">{item.title}</h4>
                    <p className="text-gray-500 text-[0.9rem] leading-[1.5] mb-4">{item.description}</p>
                    <div className="text-[1.2rem] font-bold text-primary">{item.currentBid}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[1.5rem] text-secondary mb-6 text-center">{t.nav.gallery}</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 max-md:grid-cols-1">
              {bazar.shop.map((item, i) => (
                <div className="bg-white dark:bg-[#171923] rounded-card overflow-hidden shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg border-t-4 border-transparent" key={i} style={{ borderTopColor: item.color }}>
                  <div className="h-20 flex items-end p-3" style={{ background: item.color }}>
                    <span className="bg-white/90 dark:bg-[#171923]/90 py-1 px-3 rounded-card-sm text-[0.8rem] font-semibold text-secondary">{t.nav.gallery}</span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-[1.05rem] mb-2 text-secondary">{item.title}</h4>
                    <p className="text-gray-500 text-[0.9rem] leading-[1.5] mb-4">{item.description}</p>
                    <div className="text-[1.2rem] font-bold text-primary">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-card p-10 text-center mb-8">
            <h3 className="text-[1.5rem] mb-4">{bazar.liveAuction.title}</h3>
            <p className="opacity-90 mb-4 text-[1.05rem]">{bazar.liveAuction.description}</p>
            <div className="inline-block bg-white/20 dark:bg-white/10 py-2 px-6 rounded-full font-semibold text-[1.1rem]">{bazar.liveAuction.schedule}</div>
          </div>

          <div className="bg-off-white rounded-card p-10 text-center border-2 border-dashed border-gray-300 dark:border-[#2a2d3a]">
            <h3 className="text-[1.25rem] text-secondary mb-3">{bazar.donateItem.title}</h3>
            <p className="text-gray-500 mb-6">{bazar.donateItem.description}</p>
            <a href="/contact" className="inline-block px-9 py-3.5 rounded-xl font-semibold no-underline cursor-pointer border-none transition-all duration-300 bg-accent text-white hover:bg-[#d35400] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(230,126,34,0.4)]">{bazar.donateItem.cta}</a>
          </div>
        </div>
      </section>
    </>
  );
}
