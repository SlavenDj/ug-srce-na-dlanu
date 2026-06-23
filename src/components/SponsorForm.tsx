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

export default function SponsorForm() {
  const { t } = useLanguage();
  const { sponsorForm } = t;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    contactPerson: "",
    name: "",
    email: "",
    phone: "",
    type: "",
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
    setForm({ company: "", contactPerson: "", name: "", email: "", phone: "", type: "", message: "" });
  };

  return (
    <section className="py-20 bg-off-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-[1.8rem] text-secondary mb-3">{sponsorForm.title}</h2>
          <p className="text-gray-500 leading-[1.6]">{sponsorForm.subtitle}</p>
        </div>
        <form className="bg-white dark:bg-[#171923] p-9 rounded-card shadow-card" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="text-center py-10 px-5">
              <span className="inline-flex w-16 h-16 bg-green-600 text-white rounded-full items-center justify-center text-2xl mb-4">✓</span>
              <p className="text-gray-700 dark:text-[#d1d5db] text-[1.05rem] mb-6">{sponsorForm.successMessage}</p>
              <Button
                type="button"
                variant="primary-outline"
                size="xl"
                className="rounded-xl"
                onClick={() => setSubmitted(false)}
              >
                {sponsorForm.sendButton}
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
                <div className="flex flex-col">
                  <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{sponsorForm.companyLabel}</label>
                  <Input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{sponsorForm.contactPersonLabel}</label>
                  <Input
                    type="text"
                    name="contactPerson"
                    value={form.contactPerson}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
                <div className="flex flex-col">
                  <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{sponsorForm.nameLabel}</label>
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
                  <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{sponsorForm.emailLabel}</label>
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
                  <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{sponsorForm.phoneLabel}</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{sponsorForm.typeLabel}</label>
                  <Select
                    value={form.type}
                    onValueChange={(value) => setForm({ ...form, type: value ?? "" })}
                  >
                    <SelectTrigger className="h-auto py-3 px-4 border-2 border-gray-200 dark:border-[#2a2d3a] rounded-card-sm text-[0.95rem] bg-white dark:bg-[#171923] text-gray-900 focus:border-primary w-full">
                      <SelectValue placeholder={sponsorForm.typeLabel} />
                    </SelectTrigger>
                    <SelectContent>
                      {sponsorForm.typeOptions.map((opt, i) => (
                        <SelectItem key={i} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{sponsorForm.messageLabel}</label>
                <Textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-y`}
                />
              </div>
              <Button type="submit" variant="accent" size="xl" className="rounded-xl w-full">
                {sponsorForm.sendButton}
              </Button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
