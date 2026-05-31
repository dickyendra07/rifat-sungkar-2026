import { getGlobalSettings, getSocialLinks } from "@/lib/cms";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default async function Footer() {
  const settings = await getGlobalSettings();

  const description =
    settings?.footer?.description ||
    "Inside RS is the official campaign platform for Rifat Sungkar 2026, bringing together motorsport legacy, family stories, events, lifestyle, and campaign updates.";

  const copyright =
    settings?.footer?.copyright || "© 2026 Inside RS. All rights reserved.";

  const email = settings?.contact?.email || "hello@inside-rs.com";

  const socialLinks = getSocialLinks(settings);

  return (
    <footer className="bg-[#07090d] px-6 pb-10 pt-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative mb-10 h-24 overflow-hidden rounded-2xl border border-white/5 bg-[#111820]">
          <div className="absolute inset-0 bg-[url('/images/rs-pattern-strip.png')] bg-cover bg-center opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090d] via-transparent to-[#07090d]" />
        </div>

        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <img src="/images/rs-logo.png" alt="Inside RS" className="h-auto w-28" />

            <p className="mt-6 max-w-md text-sm leading-7 tracking-[0.02em] text-white/58">
              {description}
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-7 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white/72 transition hover:border-[#f19ac2]/40 hover:text-white"
            >
              {email}
            </a>
          </div>

          <div>
            <h3 className="font-tungsten text-4xl font-black leading-none tracking-normal text-white">
              Navigation
            </h3>

            <div className="mt-6 grid gap-3">
              {footerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-bold text-white/58 transition hover:text-[#f2a0b8]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-tungsten text-4xl font-black leading-none tracking-normal text-white">
              Continue The Journey
            </h3>

            <div className="mt-6 grid gap-3">
              {socialLinks.length > 0 ? (
                socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-white/58 transition hover:text-[#62d9db]"
                  >
                    {item.label}
                  </a>
                ))
              ) : (
                <p className="text-sm leading-7 text-white/45">
                  Social media links will be available soon.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs font-bold uppercase tracking-[0.18em] text-white/36 md:flex-row md:items-center md:justify-between">
          <p>{copyright}</p>
          <p>Designed for The Legend Continues</p>
        </div>
      </div>
    </footer>
  );
}
