"use client";

import { useEffect, useState } from "react";
import { WhatsappIcon } from "./Icons";

// زرار واتساب ثابت بيظهر لما الزبون ينزل لتحت ويختفي زرار الطلب الأساسي
export default function StickyWhatsapp({ href }: { href: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="اطلب على واتساب"
      className={`fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-gold py-3 pl-5 pr-4 font-bold text-black shadow-[0_10px_30px_-5px_rgba(201,162,74,0.6)] transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="pulse-ring absolute inset-0 rounded-full" />
      <WhatsappIcon className="relative size-5" />
      <span className="relative text-sm">اطلب دلوقتي</span>
    </a>
  );
}
