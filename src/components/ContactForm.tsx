import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const inputClasses =
  "h-auto py-3 px-4 border-2 border-gray-200 dark:border-[#2a2d3a] rounded-card-sm text-[0.95rem] bg-white dark:bg-[#171923] text-gray-900 focus:border-primary";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact-form" className="py-25 bg-white dark:bg-[#0f1117]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-[1fr_1.3fr] gap-15 items-start max-md:grid-cols-1 max-md:gap-10">
          <div>
            <h2 className="text-[1.8rem] text-secondary mb-3">{contactForm.title}</h2>
            <p className="text-gray-500 mb-8 leading-[1.6]">{contactForm.subtitle}</p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3.5">
                <span className="text-[1.5rem] w-12 h-12 bg-off-white rounded-xl flex items-center justify-center shrink-0">📍</span>
                <div>
                  <strong className="text-secondary text-[0.95rem]">{contactInfo.address}</strong>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="text-[1.5rem] w-12 h-12 bg-off-white rounded-xl flex items-center justify-center shrink-0">📧</span>
                <div>
                  <strong className="text-secondary text-[0.95rem]">{contactInfo.email}</strong>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="text-[1.5rem] w-12 h-12 bg-off-white rounded-xl flex items-center justify-center shrink-0">📞</span>
                <div>
                  <strong className="text-secondary text-[0.95rem]">{contactInfo.phone}</strong>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="text-[1.5rem] w-12 h-12 bg-off-white rounded-xl flex items-center justify-center shrink-0">⏰</span>
                <div>
                  <strong className="text-secondary text-[0.95rem]">{contactInfo.workingHours}</strong>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-off-white p-9 rounded-card" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="text-center py-10 px-5">
                <span className="inline-flex w-16 h-16 bg-green-600 text-white rounded-full items-center justify-center text-2xl mb-4">✓</span>
                <p className="text-gray-700 dark:text-[#d1d5db] text-[1.05rem] mb-6">{contactForm.success}</p>
                <Button
                  type="button"
                  variant="primary-outline"
                  size="xl"
                  className="rounded-xl"
                  onClick={() => setSubmitted(false)}
                >
                  {contactForm.send}
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
                  <div className="flex flex-col">
                    <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{contactForm.name}</label>
                    <Input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{contactForm.email}</label>
                    <Input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
                  <div className="flex flex-col">
                    <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{contactForm.phone}</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{contactForm.subject}</label>
                    <Select
                      value={form.subject}
                      onValueChange={(value) => setForm({ ...form, subject: value ?? "" })}
                    >
                      <SelectTrigger className="h-auto py-3 px-4 border-2 border-gray-200 dark:border-[#2a2d3a] rounded-card-sm text-[0.95rem] bg-white dark:bg-[#171923] text-gray-900 focus:border-primary w-full">
                        <SelectValue placeholder={contactForm.subject} />
                      </SelectTrigger>
                      <SelectContent>
                        {contactForm.subjects.map((s, i) => (
                          <SelectItem key={i} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col mb-5">
                  <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{contactForm.message}</label>
                  <Textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className={`${inputClasses} resize-y`}
                  />
                </div>
                <Button type="submit" variant="accent" size="xl" className="rounded-xl">
                  {contactForm.send}
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
