"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#07090d]/82 backdrop-blur-md">
      <nav className="mx-auto grid h-[88px] max-w-[1440px] grid-cols-[1fr_auto] items-center px-6 md:grid-cols-[180px_1fr_180px] md:px-10 lg:px-12">
        <a href="/" className="flex w-fit items-center">
          <Image
            src="/images/rs-logo.png"
            alt="Rifat Sungkar"
            width={104}
            height={32}
            priority
            className="h-auto w-[88px] object-contain md:w-[104px]"
          />
        </a>

        <div className="hidden justify-self-center rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex">
          {navItems.map((item) => {
            const isActive = isItemActive(item.href);

            return (
              <a
                key={item.label}
                href={item.href}
                className={[
                  "rounded-full px-5 py-2.5 text-[11px] font-semibold transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-r from-[#62d9db] to-[#f19ac2] text-white shadow-lg shadow-pink-500/15"
                    : "text-white/68 hover:bg-gradient-to-r hover:from-[#62d9db] hover:to-[#f19ac2] hover:text-white hover:shadow-lg hover:shadow-pink-500/15",
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
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white md:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={[
                "absolute left-0 top-0 h-0.5 w-5 bg-white transition",
                isOpen ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[7px] h-0.5 w-5 bg-white transition",
                isOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[14px] h-0.5 w-5 bg-white transition",
                isOpen ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#07090d]/96 px-4 pb-5 pt-3 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden">
          <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-[#111820]">
            <div className="h-10 bg-[url('/images/rs-pattern-strip.png')] bg-cover bg-center opacity-80" />
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = isItemActive(item.href);

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={[
                    "rounded-2xl px-5 py-4 text-sm font-bold tracking-[0.04em] transition",
                    isActive
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/75"
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
