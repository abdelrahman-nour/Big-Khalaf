import { profile } from "@/data/profile";
import LinkButton from "@/components/LinkButton";
import OpenStatus from "@/components/OpenStatus";
import StickyWhatsapp from "@/components/StickyWhatsapp";
import Faq from "@/components/Faq";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
  PhoneIcon,
  PinIcon,
  ContactIcon,
} from "@/components/Icons";

export default function Home() {
  const {
    name,
    tagline,
    bio,
    phone,
    phoneDisplay,
    whatsappMessage,
    location,
    socials,
    logo,
    offer,
    badges,
    products,
    faq,
    hours,
  } = profile;
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
  const ic = "size-5";

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#0A0A0A] text-white">
      {/* خلفية: توهج دهبي + خطوط مائلة */}
      <div className="glow pointer-events-none absolute -top-40 left-1/2 h-120 w-120 -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]" />
      <div className="stripes pointer-events-none absolute inset-0 opacity-[0.06]" />

      {/* بانر العرض */}
      {offer && (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 block bg-gold py-2 text-center text-xs font-bold text-black"
        >
          🔥 {offer} —{" "}
          <span className="underline underline-offset-2">اطلبه دلوقتي</span>
        </a>
      )}

      <div className="relative mx-auto flex w-full max-w-md flex-col px-5 pb-24 pt-10">
        {/* الهيدر */}
        <header className="rise flex flex-col items-center text-center">
          <div className="float relative">
            <div className="spin-slow absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,var(--color-gold-light),var(--color-gold-dark),var(--color-gold-light),var(--color-gold-dark),var(--color-gold-light))]" />
            <div className="relative grid size-36 place-items-center overflow-hidden rounded-full border-4 border-[#0A0A0A] bg-[#141414]">
              {logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo}
                  alt={`${name} - مكملات غذائية ${location.city}`}
                  className="size-full object-cover object-top"
                />
              ) : (
                <span className="font-display text-5xl tracking-wide text-gold">
                  BK
                </span>
              )}
            </div>
          </div>

          <div className="mt-5">
            <OpenStatus open={hours.open} close={hours.close} />
          </div>

          <h1 className="font-display mt-3 text-5xl uppercase leading-none tracking-wide">
            Big <span className="text-gold">Khalaf</span>
            <span className="sr-only"> - مكملات غذائية في {location.city}</span>
          </h1>
          <p className="font-display mt-2 text-lg uppercase tracking-[0.35em] text-white/70">
            {tagline}
          </p>
          <p className="mt-3 text-sm text-white/55">{bio}</p>

          {/* أيقونات السوشيال */}
          <div className="mt-5 flex gap-3">
            {[
              {
                href: socials.facebook,
                icon: <FacebookIcon className={ic} />,
                label: "Facebook",
              },
              {
                href: socials.instagram,
                icon: <InstagramIcon className={ic} />,
                label: "Instagram",
              },
              {
                href: socials.tiktok,
                icon: <TiktokIcon className={ic} />,
                label: "TikTok",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-black"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </header>

        {/* شريط المنتجات المتحرك */}
        <div
          className="rise relative -mx-5 mt-7 overflow-hidden border-y border-white/10 py-2.5 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]"
          style={{ animationDelay: "60ms" }}
        >
          <div dir="ltr" className="marquee flex w-max gap-6">
            {[...products, ...products].map((p, i) => (
              <span
                key={i}
                className="font-display flex items-center gap-6 text-lg tracking-wider text-white/70"
              >
                {p} <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* الأزرار */}
        <section className="mt-7 flex flex-col gap-3" aria-label="تواصل معانا">
          <LinkButton
            primary
            href={wa}
            label="اطلب على واتساب"
            sub="للتدريب الأونلاين والاستفسار وطلب المكملات"
            icon={<WhatsappIcon className="size-6" />}
            delay={80}
          />
          <LinkButton
            href={`tel:+${phone}`}
            label="اتصل بينا"
            sub={phoneDisplay}
            icon={<PhoneIcon className={ic} />}
            delay={140}
          />
          <LinkButton
            href={socials.instagram}
            label="Instagram"
            sub="العروض والمنتجات الجديدة"
            icon={<InstagramIcon className={ic} />}
            delay={200}
          />
          <LinkButton
            href={socials.tiktok}
            label="TikTok"
            sub="أقوي لايف مع أقوي العروض علي كل المكملات"
            icon={<TiktokIcon className={ic} />}
            delay={260}
          />
          <LinkButton
            href={socials.facebook}
            label="Facebook"
            sub="تابع الصفحة للعروض والمنتجات الجديدة"
            icon={<FacebookIcon className={ic} />}
            delay={320}
          />
          <LinkButton
            href={"#"}
            label="موقعنا"
            sub={location.label}
            icon={<PinIcon className={ic} />}
            delay={380}
          />
        </section>

        {/* نقاط الثقة */}
        <ul className="mt-8 grid grid-cols-3 gap-2 text-center">
          {badges.map((b) => (
            <li
              key={b}
              className="rounded-xl border border-gold/20 bg-gold/6 px-2 py-3 text-[11px] font-bold leading-snug text-white/85"
            >
              <span className="mb-1 block text-base text-gold">✓</span>
              {b}
            </li>
          ))}
        </ul>

        {/* نص للـ SEO + الزبون */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/3 p-5 text-center">
          <h2 className="text-base font-extrabold">
            محل مكملات غذائية في{" "}
            <span className="text-gold">{location.city}</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            {name} بيوفرلك كل اللي محتاجه في الجيم:{" "}
            {products.slice(0, 5).join("، ")} وأكتر. سواء هدفك تضخيم أو تنشيف أو
            لياقة، كلمنا ونرشحلك المناسب ليك.
          </p>
        </section>

        <Faq items={faq} />

        <footer
          dir="ltr"
          className="mt-10 text-center text-[11px] uppercase tracking-[0.3em] text-white/30"
        >
          © {new Date().getFullYear()} {name}
        </footer>
      </div>

      <StickyWhatsapp href={wa} />
    </main>
  );
}
