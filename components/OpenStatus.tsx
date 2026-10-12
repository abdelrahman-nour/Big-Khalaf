"use client";

import { useEffect, useState } from "react";

// علامة "مفتوح دلوقتي" حسب مواعيد المحل بتوقيت مصر
export default function OpenStatus({ open, close }: { open: number; close: number }) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const h = Number(
        new Intl.DateTimeFormat("en-GB", { hour: "numeric", hourCycle: "h23", timeZone: "Africa/Cairo" }).format(new Date())
      );
      setIsOpen(close > open ? h >= open && h < close : h >= open || h < close % 24);
    };
    check();
    const t = setInterval(check, 60_000);
    return () => clearInterval(t);
  }, [open, close]);

  if (isOpen === null) return <span className="h-7" />;

  const fmt = (h: number) => {
    const x = h % 24;
    if (x === 0) return "12 بالليل";
    return x < 12 ? `${x} الصبح` : `${x === 12 ? 12 : x - 12} ${x < 17 ? "الضهر" : "بالليل"}`;
  };

  return (
    <span className="rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      <span className="relative flex size-2">
        {isOpen && <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />}
        <span className={`relative inline-flex size-2 rounded-full ${isOpen ? "bg-emerald-400" : "bg-white/30"}`} />
      </span>
      {isOpen ? `مفتوح دلوقتي • لحد ${fmt(close)}` : `مقفول دلوقتي • بنفتح ${fmt(open)}`}
    </span>
  );
}
