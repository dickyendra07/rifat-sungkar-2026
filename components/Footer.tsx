import Image from "next/image";
import { navItems } from "@/data/homepage";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.45a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M14 8.5V6.75c0-.72.28-1.08 1.16-1.08H17V2.2A24.6 24.6 0 0 0 14.32 2C11.65 2 9.82 3.63 9.82 6.63V8.5H6.8V12h3.02v10H14V12h2.87l.46-3.5H14Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M6.94 8.98H3.38V21h3.56V8.98ZM5.16 3A2.06 2.06 0 1 0 5.14 7.12 2.06 2.06 0 0 0 5.16 3ZM20.62 14.1c0-3.23-1.72-5.32-4.54-5.32a3.9 3.9 0 0 0-3.55 1.96h-.05V8.98H9.08V21h3.55v-5.95c0-1.57.3-3.08 2.24-3.08 1.9 0 1.92 1.78 1.92 3.18V21h3.56l.27-6.9Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#07090d] px-6 pb-10 pt-0 md:px-10 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative mb-10 h-24 overflow-hidden rounded-2xl border border-white/5 bg-[#111820]">
          <div className="absolute inset-0 bg-[url('/images/rs-pattern-strip.png')] bg-cover bg-center opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090d] via-transparent to-[#07090d]" />
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="grid gap-12 py-14 lg:grid-cols-[1.15fr_0.65fr_0.65fr_0.8fr]">
          <div>
            <Image
              src="/images/rs-logo.png"
              alt="Rifat Sungkar"
              width={128}
              height={40}
              className="h-auto w-[112px] object-contain"
            />

            <p className="mt-7 max-w-md text-base leading-8 tracking-[0.02em] text-white/62">
              The official digital campaign experience of Rifat Sungkar 2026.
              Built around speed, family, legacy, and the spirit of Indonesian motorsport.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/75 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#62d9db] hover:to-[#f19ac2] hover:text-white hover:shadow-lg hover:shadow-pink-500/15"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-tungsten text-4xl font-black leading-none tracking-normal text-white">
              Navigation
            </h3>

            <div className="mt-7 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm font-medium tracking-[0.04em] text-white/58 transition hover:text-[#f2a0b8]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-tungsten text-4xl font-black leading-none tracking-normal text-white">
              Campaign
            </h3>

            <div className="mt-7 flex flex-col gap-4 text-sm tracking-[0.04em] text-white/58">
              <a href="/about" className="w-fit transition hover:text-[#f2a0b8]">
                The Journey
              </a>
              <a href="/events" className="w-fit transition hover:text-[#f2a0b8]">
                Events Preview
              </a>
              <a href="/blog" className="w-fit transition hover:text-[#f2a0b8]">
                Stories & Updates
              </a>
              <a href="/contact" className="w-fit transition hover:text-[#f2a0b8]">
                Partnership
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-tungsten text-4xl font-black leading-none tracking-normal text-white">
              Continue The Journey
            </h3>

            <p className="mt-7 text-sm leading-7 tracking-[0.04em] text-white/58">
              For partnership, media, and campaign collaboration inquiries.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-7 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-pink-500/15 transition hover:scale-[1.02]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                →
              </span>
              Contact Team
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col justify-between gap-4 py-7 text-xs tracking-[0.08em] text-white/40 md:flex-row md:items-center">
          <p>© 2026 Rifat Sungkar. The Legend Continues.</p>
          <p>Designed & Developed by Kara Digital.</p>
        </div>
      </div>
    </footer>
  );
}
