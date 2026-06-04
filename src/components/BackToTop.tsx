import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white border-none rounded-full text-xl cursor-pointer shadow-card-hover z-[900] flex items-center justify-center transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1 hover:shadow-card-lg"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
