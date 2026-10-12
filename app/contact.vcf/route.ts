import { profile } from "@/data/profile";

export const dynamic = "force-static";

// بيولد كارت كونتاكت عشان العميل يحفظ الرقم بضغطة
export function GET() {
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${profile.name} - ${profile.tagline}`,
    `ORG:${profile.tagline}`,
    `TEL;TYPE=CELL:+${profile.phone}`,
    `ADR;TYPE=WORK:;;${profile.location.label};;;;`,
    `URL:${profile.socials.instagram}`,
    "END:VCARD",
  ].join("\r\n");

  return new Response(vcf, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="big-khalaf.vcf"',
    },
  });
}
