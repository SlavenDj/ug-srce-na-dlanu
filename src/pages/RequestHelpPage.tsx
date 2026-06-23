import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DialogRoot,
  DialogTrigger,
  DialogPopup,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import RequestHelpForm from "../components/RequestHelpForm";

export default function RequestHelpPage() {
  const { t } = useLanguage();
  const { trebam } = t;
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const requestTypes = [
    trebam.help,
    trebam.certificate,
    trebam.recommendation,
    trebam.excuse,
    trebam.cooperation,
    trebam.partnership,
    trebam.membership,
  ];
  const icons = ["🆘", "📜", "📝", "📋", "🤝", "🔗", "⭐"];

  return (
    <>
      <section className="bg-gradient-to-br from-secondary dark:from-[#1e293b] to-[#1a252f] text-white pt-24 pb-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-[2.5rem] mb-4">{trebam.title}</h1>
          <p className="text-[1.15rem] opacity-90 max-w-[600px] mx-auto leading-[1.6]">{trebam.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 max-md:grid-cols-1">
            {requestTypes.map((item, i) => (
              <div className="bg-white dark:bg-[#171923] rounded-card p-8 shadow-card-hover text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg flex flex-col items-center gap-3" key={i}>
                <div className="text-[3rem]">{icons[i]}</div>
                <h3 className="text-[1.15rem] text-secondary">{item.title}</h3>
                <p className="text-gray-500 text-[0.95rem] leading-[1.6]">{item.description}</p>
                <DialogRoot
                  open={selectedType === item.title}
                  onOpenChange={(open) => {
                    if (open) setSelectedType(item.title);
                    else setSelectedType(null);
                  }}
                >
                  <DialogTrigger
                    render={<Button variant="primary-outline" size="xl" className="rounded-xl mt-2" />}
                  >
                    {icons[i]} {item.title}
                  </DialogTrigger>
                  <DialogPopup>
                    <DialogClose>✕</DialogClose>
                    <DialogTitle>{item.title}</DialogTitle>
                    <DialogDescription className="mt-2">{item.description}</DialogDescription>
                    <div className="mt-6">
                      <RequestHelpForm preSelectedType={item.title} onClose={() => setSelectedType(null)} />
                    </div>
                  </DialogPopup>
                </DialogRoot>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
