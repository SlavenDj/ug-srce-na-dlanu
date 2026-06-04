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
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-10 flex-wrap max-md:flex-col max-md:text-center">
          <div>
            <h2 className="text-[1.8rem] text-white mb-2">{newsletter.title}</h2>
            <p className="text-white/70 text-base">{newsletter.subtitle}</p>
          </div>
          <form className="flex gap-3 flex-1 max-w-[500px] max-md:max-w-full max-md:w-full" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="text-green-500 font-semibold text-base py-3.5 px-5">{newsletter.success}</div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 py-3.5 px-5 border-2 border-white/20 bg-white/10 rounded-xl text-white text-[0.95rem] outline-none transition-all duration-300 placeholder:text-white/50 focus:border-accent focus:bg-white/15 max-md:flex-none max-md:w-full"
                />
                <button type="submit" className="inline-block px-9 py-3.5 rounded-xl font-semibold text-[1rem] cursor-pointer border-none transition-all duration-300 bg-accent text-white hover:bg-[#d35400] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(230,126,34,0.4)]">
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
