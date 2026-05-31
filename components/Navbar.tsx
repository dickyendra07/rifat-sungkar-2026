"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const fallbackSocialLinks = {
  instagramUrl: "https://www.instagram.com/inside__rs/",
  facebookUrl: "https://www.facebook.com/",
  linkedinUrl: "https://www.linkedin.com/",
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M14.2 8.1V6.7c0-.7.5-.9 1-.9h1.6V3.1L14.5 3c-2.6 0-4 1.6-4 4v1.1H8v3h2.5V21h3.1v-9.9h2.6l.4-3h-3.4Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.8H3.6V21h2.9V8.8ZM5.1 3C4.1 3 3.4 3.7 3.4 4.6s.7 1.7 1.7 1.7 1.7-.7 1.7-1.7S6.1 3 5.1 3Zm6.5 5.8H8.8V21h2.9v-6.4c0-1.7.8-2.8 2.2-2.8 1.3 0 1.9.9 1.9 2.7V21h2.9v-7c0-3.4-1.8-5.4-4.6-5.4-1.5 0-2.5.7-3.1 1.6h-.1l-.2-1.4Z" />
    </svg>
  );
}

type CMSGlobalSettings = {
  socialMedia?: {
    instagramUrl?: string;
    facebookUrl?: string;
    linkedinUrl?: string;
  };
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [socialMedia, setSocialMedia] = useState(fallbackSocialLinks);

  useEffect(() => {
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";

    async function loadGlobalSettings() {
      try {
        const res = await fetch(`${cmsUrl}/api/globals/global-settings?depth=2`);

        if (!res.ok) return;

        const data = (await res.json()) as CMSGlobalSettings;

        setSocialMedia({
          instagramUrl: data.socialMedia?.instagramUrl?.trim() || fallbackSocialLinks.instagramUrl,
          facebookUrl: data.socialMedia?.facebookUrl?.trim() || fallbackSocialLinks.facebookUrl,
          linkedinUrl: data.socialMedia?.linkedinUrl?.trim() || fallbackSocialLinks.linkedinUrl,
        });
      } catch {
        setSocialMedia(fallbackSocialLinks);
      }
    }

    loadGlobalSettings();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const socialLinks = [
    {
      label: "Instagram",
      href: socialMedia.instagramUrl,
      icon: <InstagramIcon />,
    },
    {
      label: "Facebook",
      href: socialMedia.facebookUrl,
      icon: <FacebookIcon />,
    },
    {
      label: "LinkedIn",
      href: socialMedia.linkedinUrl,
      icon: <LinkedinIcon />,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#07090d]/84 backdrop-blur-xl">
      <nav className="mx-auto flex h-[92px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-12">
        <a href="/" aria-label="Inside RS Home" className="shrink-0">
          <img src="/images/rs-logo.png" alt="Inside RS" className="h-auto w-28 md:w-32" />
        </a>

        <div className="hidden rounded-full border border-white/10 bg-white/[0.035] p-1 shadow-2xl shadow-black/20 md:flex">
          {navLinks.map((item) => {
            const active = isActive(item.href);

            return (
              <a
                key={item.label}
                href={item.href}
                className={[
                  "rounded-full px-6 py-3 text-xs font-black transition-all duration-300",
                  active
                    ? "bg-gradient-to-r from-[#62d9db] to-[#f19ac2] text-white shadow-lg shadow-pink-500/20"
                    : "text-white/68 hover:bg-white/[0.06] hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center justify-end gap-3 md:flex">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/75 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#62d9db] hover:to-[#f19ac2] hover:text-white hover:shadow-lg hover:shadow-pink-500/15"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/12 text-white md:hidden"
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-7 bg-white" />
            <span className="block h-0.5 w-7 bg-white" />
            <span className="block h-0.5 w-7 bg-white" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#07090d]/96 px-4 pb-5 pt-3 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden">
          <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-[#111820]">
            <div className="h-10 bg-[url('/images/rs-pattern-strip.png')] bg-cover bg-center opacity-80" />
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const active = isActive(item.href);

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={[
                    "rounded-2xl px-5 py-4 text-sm font-bold tracking-[0.04em] transition",
                    active
                      ? "bg-gradient-to-r from-[#62d9db] to-[#f19ac2] text-white shadow-lg shadow-pink-500/10"
                      : "border border-white/10 bg-white/[0.035] text-white/70 hover:border-white/20 hover:bg-white/[0.06]",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex h-11 flex-1 items-center justify-center rounded-xl border border-white/10 text-white/78 transition hover:border-[#f19ac2]/40 hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
