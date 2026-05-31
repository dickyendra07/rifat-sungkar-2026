import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import {
  formatPartnerTier,
  getCMSMediaUrl,
  getContactPagePartners,
} from "@/lib/cms";

const inquiryTypes = [
  {
    title: "Partnership",
    icon: "partner",
    description:
      "For brands and partners who want to collaborate with Rifat Sungkar 2026 campaign activations.",
  },
  {
    title: "Media Request",
    icon: "media",
    description:
      "For interviews, press coverage, editorial features, media invitations, and campaign publications.",
  },
  {
    title: "Event Collaboration",
    icon: "event",
    description:
      "For motorsport events, community programs, lifestyle riding activities, and special appearances.",
  },
];


function InquiryIcon({ type }: { type: string }) {
  if (type === "partner") {
    return (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" aria-hidden="true">
        <path
          d="M7.5 12.5 10 15c.9.9 2.1.9 3 0l1.5-1.5m-7-1 2.2-2.2c.8-.8 2.1-.8 2.9 0l.4.4c.6.6 1.6.6 2.2 0l.8-.8M5.8 16.2l-2.1-2.1a2.4 2.4 0 0 1 0-3.4l3-3a2.4 2.4 0 0 1 3.4 0l.6.6m7.5 7.9 2.1-2.1a2.4 2.4 0 0 0 0-3.4l-3-3a2.4 2.4 0 0 0-3.4 0l-.6.6"
          stroke="url(#partnerGradient)"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="partnerGradient" x1="3" y1="6" x2="21" y2="18">
            <stop stopColor="#62D9DB" />
            <stop offset="1" stopColor="#F19AC2" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "media") {
    return (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" aria-hidden="true">
        <path
          d="M4.5 8.5A2.5 2.5 0 0 1 7 6h1.4l1.1-1.5h5L15.6 6H17a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 17 19H7a2.5 2.5 0 0 1-2.5-2.5v-8Z"
          stroke="url(#mediaGradient)"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M12 15.8a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z"
          stroke="url(#mediaGradient)"
          strokeWidth="1.7"
        />
        <path d="M17 9h.01" stroke="url(#mediaGradient)" strokeWidth="2.2" strokeLinecap="round" />
        <defs>
          <linearGradient id="mediaGradient" x1="4" y1="4" x2="20" y2="20">
            <stop stopColor="#62D9DB" />
            <stop offset="1" stopColor="#F19AC2" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" aria-hidden="true">
      <path
        d="M7 4v3M17 4v3M5 9h14M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2M6.5 21h11A2.5 2.5 0 0 0 20 18.5v-11A2.5 2.5 0 0 0 17.5 5h-11A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21Z"
        stroke="url(#eventGradient)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="eventGradient" x1="4" y1="4" x2="20" y2="21">
          <stop stopColor="#62D9DB" />
          <stop offset="1" stopColor="#F19AC2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const contactDetails = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    label: "WhatsApp",
    value: "+62 812 0000 0000",
    href: "https://wa.me/6281200000000",
  },
  {
    label: "Location",
    value: "Jakarta, Indonesia",
    href: "#",
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export const metadata = {
  title: "Contact Rifat Sungkar 2026 | Partnership Inquiry",
  description:
    "Contact the Rifat Sungkar 2026 team for partnership, sponsorship, media requests, event collaboration, and campaign inquiries.",
};

export default async function ContactPage() {
  const contactPartners = await getContactPagePartners();

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Navbar />

      <section className="rs-reveal relative overflow-hidden bg-[#07090d] pt-[88px]">
        <div className="relative min-h-[640px] rs-kenburns-bg bg-[url('/images/rs-cta-homepage.png')] rs-kenburns-bg bg-cover bg-center">
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/40 to-black/35" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07090d] to-transparent" />

          <div className="relative z-10 mx-auto grid min-h-[640px] max-w-[1440px] gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-center lg:px-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#f2a0b8]">
                Contact
              </p>

              <h1 className="font-tungsten mt-5 max-w-3xl text-7xl font-black uppercase leading-[0.88] tracking-normal md:text-8xl lg:text-9xl text-white">
                Let&apos;s Continue
                <br />
                The Journey
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 tracking-[0.02em] text-white/78">
                For partnership, media, sponsorship, event collaboration, and campaign inquiries,
                connect with the Rifat Sungkar 2026 team.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Send Inquiry
                </a>

                <a
                  href="#direct-contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
                >
                  Contact Info
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/35 p-7 shadow-2xl shadow-black/35 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#62d9db]">
                Inquiry Access
              </p>

              <h2 className="font-tungsten mt-4 text-5xl font-black uppercase leading-none tracking-normal text-white md:text-6xl">
                Partnership,
                <br />
                Media & Event
              </h2>

              <p className="mt-5 text-base leading-7 tracking-[0.02em] text-white/62">
                Share your inquiry and we will route it to the right campaign contact.
              </p>

              <div className="mt-8 space-y-4">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#f19ac2]/50 hover:bg-white/[0.07]"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/36">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-semibold tracking-[0.02em] text-white/80">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-reveal px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="rs-mobile-slider -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {inquiryTypes.map((item) => (
              <article
                key={item.title}
                className="group min-w-[84%] snap-center rounded-2xl border border-white/10 bg-[#111820] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 hover:bg-[#121d27] md:min-w-0 md:p-7"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 transition duration-300 group-hover:border-[#f19ac2]/40 group-hover:bg-white/[0.04]">
                    <InquiryIcon type={item.icon} />
                  </div>

                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />
                </div>

                <h2 className="font-tungsten text-4xl font-black leading-none tracking-normal text-white md:text-5xl">
                  {item.title}
                </h2>
                <p className="mt-5 text-base leading-7 tracking-[0.02em] text-white/62">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
              Inquiry Form
            </p>

            <h2 className="font-tungsten mt-5 max-w-xl text-6xl font-black uppercase leading-[0.92] tracking-normal text-white md:text-7xl">
              Start the Conversation
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 tracking-[0.02em] text-white/62">
              Share your inquiry details and the team will get back to you with the next step.
            </p>

            <div id="direct-contact" className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-xl shadow-black/10 md:mt-10">
              <div className="h-12 bg-[url('/images/rs-pattern-strip.png')] bg-cover bg-center opacity-85" />

              <div className="p-6">
                <h3 className="font-tungsten text-4xl font-black leading-none tracking-normal text-white">
                  Direct Contact
                </h3>

                <div className="mt-6 space-y-5">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/36">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-semibold tracking-[0.02em] text-white/78 transition hover:text-[#f2a0b8]">
                      {item.value}
                    </p>
                  </a>
                ))}
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="rs-reveal px-6 pb-24 md:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111820]">
          <div className="absolute inset-0 rs-kenburns-bg bg-[url('/images/rs-cta-homepage.png')] rs-kenburns-bg bg-cover bg-center opacity-65" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />

          <div className="relative z-10 grid gap-8 p-6 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                Follow the Campaign
              </p>

              <h2 className="font-tungsten mt-4 max-w-xl text-5xl font-black uppercase leading-[0.9] tracking-normal text-white md:text-7xl">
                Stay Connected
                <br />
                With The Journey
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 tracking-[0.02em] text-white/72">
                Follow every announcement, campaign update, motorsport moment, and lifestyle story from Rifat Sungkar 2026.
              </p>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3 md:gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-black/25 px-6 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-white/78 backdrop-blur-sm transition hover:border-transparent hover:bg-gradient-to-r hover:from-[#62d9db] hover:to-[#f19ac2] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <a
                href="#contact-form"
                className="mt-6 inline-flex w-full items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.01] sm:w-auto"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  →
                </span>
                Send Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {contactPartners.length > 0 ? (
        <section className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                  Partnership Network
                </p>

                <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
                  Connected
                  <br />
                  Partners
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 tracking-[0.02em] text-white/62 lg:justify-self-end">
                Selected partners and collaborators connected to the Inside RS campaign ecosystem.
              </p>
            </div>

            <div className="rs-mobile-slider -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
              {contactPartners.map((partner) => {
                const logo = getCMSMediaUrl(partner.logo) || "/images/rs-logo.png";

                return (
                  <article
                    key={partner.id || partner.name}
                    className="group relative min-w-[84%] snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 md:min-w-0"
                  >
                    <div className="relative z-10 m-px h-full rounded-2xl bg-[#111820] p-6">
                      <div className="flex min-h-[110px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                        <img
                          src={logo}
                          alt={partner.name || "Partner"}
                          className="max-h-16 max-w-[190px] object-contain brightness-0 invert"
                        />
                      </div>

                      <div className="mt-6">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f2a0b8]">
                          {formatPartnerTier(partner.tier)}
                        </p>

                        <h3 className="font-tungsten mt-3 text-4xl font-black leading-none tracking-normal text-white">
                          {partner.name}
                        </h3>

                        {partner.description ? (
                          <p className="mt-4 text-sm leading-7 tracking-[0.02em] text-white/62">
                            {partner.description}
                          </p>
                        ) : null}

                        {partner.websiteUrl ? (
                          <a
                            href={partner.websiteUrl}
                            target={partner.websiteUrl.startsWith("http") ? "_blank" : undefined}
                            rel={partner.websiteUrl.startsWith("http") ? "noreferrer" : undefined}
                            className="mt-7 inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/72 transition hover:border-[#f19ac2]/40 hover:text-white"
                          >
                            Visit Partner
                            <span>→</span>
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
              {contactPartners.map((partner) => (
                <span
                  key={partner.id || partner.name}
                  className="h-1.5 w-8 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] opacity-55"
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  );
}
