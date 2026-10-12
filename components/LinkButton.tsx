import { ArrowIcon } from "./Icons";

type Props = {
  href: string;
  label: string;
  sub?: string;
  icon: React.ReactNode;
  primary?: boolean;
  delay?: number;
  download?: boolean;
};

export default function LinkButton({ href, label, sub, icon, primary, delay = 0, download }: Props) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download || undefined}
      style={{ animationDelay: `${delay}ms` }}
      className={`rise group relative flex items-center gap-4 overflow-hidden rounded-2xl border px-4 py-3.5 transition duration-200 hover:-translate-y-0.5 active:scale-[0.98] ${
        primary
          ? "shine border-gold bg-gold text-black shadow-[0_10px_30px_-10px_rgba(201,162,74,0.6)] hover:bg-gold-light"
          : "border-white/10 bg-white/[0.04] text-white hover:border-gold/70 hover:bg-white/[0.07]"
      }`}
    >
      <span
        className={`relative grid size-11 shrink-0 place-items-center rounded-xl ${
          primary ? "bg-black/15" : "bg-gold/15 text-gold group-hover:bg-gold group-hover:text-black"
        } transition`}
      >
        {primary && <span className="pulse-ring absolute inset-0 rounded-xl" />}
        <span className="relative">{icon}</span>
      </span>
      <span className="relative flex-1 text-right">
        <span className="block text-[15px] font-bold leading-tight">{label}</span>
        {sub && (
          <span dir="auto" className={`mt-0.5 block text-right text-xs ${primary ? "text-black/70" : "text-white/50"}`}>
            {sub}
          </span>
        )}
      </span>
      <ArrowIcon className="relative size-5 opacity-50 transition group-hover:-translate-x-1 group-hover:opacity-100" />
    </a>
  );
}
