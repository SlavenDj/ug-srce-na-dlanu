import { useLanguage } from "../context/LanguageContext";
import SponsorForm from "../components/SponsorForm";

export default function DonatePage() {
  const { t } = useLanguage();
  const { donate } = t;

  return (
    <>
      <section className="bg-gradient-to-br from-secondary dark:from-[#1e293b] to-[#1a252f] text-white pt-24 pb-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-[2.5rem] mb-4">{donate.title}</h1>
          <p className="text-[1.15rem] opacity-90 max-w-[600px] mx-auto leading-[1.6]">{donate.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6 max-md:grid-cols-1">
            <div className="bg-white dark:bg-[#171923] rounded-card p-8 shadow-card-hover border-t-4 border-primary">
              <div className="text-[2.5rem] mb-4 block">💳</div>
              <h2 className="text-[1.25rem] mb-3 text-secondary">{donate.online.title}</h2>
              <p className="text-gray-500 text-[0.95rem] mb-4 leading-[1.6]">{donate.online.description}</p>
              <ul className="list-none flex flex-wrap gap-2">
                {donate.online.methods.map((m, i) => (
                  <li key={i} className="bg-gray-100 dark:bg-[#1f2128] py-1.5 px-3 rounded-card-sm text-[0.9rem] text-secondary">{m}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-[#171923] rounded-card p-8 shadow-card-hover border-t-4 border-primary">
              <div className="text-[2.5rem] mb-4 block">🌍</div>
              <h2 className="text-[1.25rem] mb-3 text-secondary">{donate.foreign.title}</h2>
              <p className="text-gray-500 text-[0.95rem] mb-4 leading-[1.6]">{donate.foreign.description}</p>
              <div className="flex flex-col gap-2">
                <div className="text-[0.9rem] leading-[1.5]">
                  <strong>IBAN:</strong> <code className="bg-gray-100 dark:bg-[#1f2128] py-0.5 px-1.5 rounded text-[0.85rem] break-all">{donate.foreign.iban}</code>
                </div>
                <div className="text-[0.9rem] leading-[1.5]">
                  <strong>SWIFT:</strong> <code className="bg-gray-100 dark:bg-[#1f2128] py-0.5 px-1.5 rounded text-[0.85rem] break-all">{donate.foreign.swift}</code>
                </div>
                <div className="text-[0.9rem] leading-[1.5]">
                  <strong>{t.contactForm.subject}:</strong> {donate.foreign.purpose}
                </div>
                <div className="text-[0.9rem] leading-[1.5]">
                  <strong>{donate.domestic.bank}:</strong> {donate.foreign.bank}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#171923] rounded-card p-8 shadow-card-hover border-t-4 border-primary">
              <div className="text-[2.5rem] mb-4 block">🏦</div>
              <h2 className="text-[1.25rem] mb-3 text-secondary">{donate.domestic.title}</h2>
              <p className="text-gray-500 text-[0.95rem] mb-4 leading-[1.6]">{donate.domestic.description}</p>
              <div className="flex flex-col gap-2">
                <div className="text-[0.9rem] leading-[1.5]">
                  <strong>{t.contactForm.subject}:</strong> <code className="bg-gray-100 dark:bg-[#1f2128] py-0.5 px-1.5 rounded text-[0.85rem] break-all">{donate.domestic.accountNumber}</code>
                </div>
                <div className="text-[0.9rem] leading-[1.5]">
                  <strong>{donate.domestic.bank}</strong>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#171923] rounded-card p-8 shadow-card-hover border-t-4 border-primary">
              <div className="text-[2.5rem] mb-4 block">📦</div>
              <h2 className="text-[1.25rem] mb-3 text-secondary">{donate.goods.title}</h2>
              <p className="text-gray-500 text-[0.95rem] mb-4 leading-[1.6]">{donate.goods.description}</p>
              <ul className="list-none flex flex-wrap gap-2">
                {donate.goods.items.map((item, i) => (
                  <li key={i} className="bg-gray-100 dark:bg-[#1f2128] py-1.5 px-3 rounded-card-sm text-[0.9rem] text-secondary">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-[#171923] rounded-card p-8 shadow-card-hover border-t-4 border-primary">
              <div className="text-[2.5rem] mb-4 block">🔧</div>
              <h2 className="text-[1.25rem] mb-3 text-secondary">{donate.services.title}</h2>
              <p className="text-gray-500 text-[0.95rem] mb-4 leading-[1.6]">{donate.services.description}</p>
              <ul className="list-none flex flex-wrap gap-2">
                {donate.services.items.map((item, i) => (
                  <li key={i} className="bg-gray-100 dark:bg-[#1f2128] py-1.5 px-3 rounded-card-sm text-[0.9rem] text-secondary">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SponsorForm />
    </>
  );
}
