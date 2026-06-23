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

interface RequestHelpFormProps {
  preSelectedType?: string;
  onClose?: () => void;
}

export default function RequestHelpForm({ preSelectedType, onClose }: RequestHelpFormProps) {
  const { t } = useLanguage();
  const { trebam } = t;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    requestType: preSelectedType ?? "",
    description: "",
  });

  const requestTypes = [
    trebam.help.title,
    trebam.certificate.title,
    trebam.recommendation.title,
    trebam.excuse.title,
    trebam.cooperation.title,
    trebam.partnership.title,
    trebam.membership.title,
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", requestType: preSelectedType ?? "", description: "" });
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted ? (
        <div className="text-center py-10 px-5">
          <span className="inline-flex w-16 h-16 bg-green-600 text-white rounded-full items-center justify-center text-2xl mb-4">✓</span>
          <p className="text-gray-700 dark:text-[#d1d5db] text-[1.05rem] mb-6">{t.contactForm.success}</p>
          <Button
            type="button"
            variant="primary-outline"
            size="xl"
            className="rounded-xl"
            onClick={handleReset}
          >
            {t.contactForm.send}
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
            <div className="flex flex-col">
              <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{t.contactForm.name}</label>
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
              <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{t.contactForm.email}</label>
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
              <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{t.contactForm.phone}</label>
              <Input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{t.contactForm.subject}</label>
              <Select
                value={form.requestType}
                onValueChange={(value) => setForm({ ...form, requestType: value ?? "" })}
              >
                <SelectTrigger className="h-auto py-3 px-4 border-2 border-gray-200 dark:border-[#2a2d3a] rounded-card-sm text-[0.95rem] bg-white dark:bg-[#171923] text-gray-900 focus:border-primary w-full">
                  <SelectValue placeholder={t.contactForm.subject} />
                </SelectTrigger>
                <SelectContent>
                  {requestTypes.map((type, i) => (
                    <SelectItem key={i} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-[0.88rem] font-semibold text-gray-700 dark:text-[#d1d5db] mb-1.5">{t.contactForm.message}</label>
            <Textarea
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              required
              className={`${inputClasses} resize-y`}
            />
          </div>
          <Button type="submit" variant="accent" size="xl" className="rounded-xl w-full">
            {t.contactForm.send}
          </Button>
        </>
      )}
    </form>
  );
}
