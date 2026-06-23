import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";

export default function Help() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] text-secondary mb-4">{t.help.title}</h2>
          <p className="text-base text-gray-500 leading-[1.7] mb-3">{t.help.description}</p>
          <p className="font-semibold text-secondary text-[1.05rem] mb-6">{t.help.question}</p>
          <Button variant="accent" size="xl" className="rounded-xl" render={<a href="#contact" />}>
            {t.help.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
