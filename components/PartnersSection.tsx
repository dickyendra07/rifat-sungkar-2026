import {
  formatPartnerTier,
  getCMSMediaUrl,
  getHomepagePartners,
} from "@/lib/cms";

const fallbackPartners = [
  {
    name: "Inside RS",
    tier: "official-partner",
    description: "Official campaign platform for Rifat Sungkar 2026.",
    logo: "/images/rs-logo.png",
    websiteUrl: "/",
  },
];

export default async function PartnersSection() {
  const cmsPartners = await getHomepagePartners();

  const partners =
    cmsPartners.length > 0
      ? cmsPartners.map((partner) => ({
          name: partner.name || "Partner",
          tier: partner.tier,
          description: partner.description || "Official partner of Inside RS.",
          logo: getCMSMediaUrl(partner.logo) || "/images/rs-logo.png",
          websiteUrl: partner.websiteUrl || "#",
        }))
      : fallbackPartners;

  return (
    <section className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
              Official Partners
            </p>

            <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
              Official
              <br />
              Partners
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 tracking-[0.02em] text-white/62 lg:justify-self-end">
            Partner, sponsor, media, dan komunitas yang membantu mewujudkan kegiatan Inside RS.
          </p>
        </div>

        <div className="rs-mobile-slider -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="group relative min-w-[84%] snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 md:min-w-0"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#62d9db]/25 via-white/5 to-[#f19ac2]/25 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative z-10 m-px h-full rounded-2xl bg-[#111820] p-6">
                <div className="flex min-h-[110px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
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

                  <p className="mt-4 text-sm leading-7 tracking-[0.02em] text-white/62">
                    {partner.description}
                  </p>

                  {partner.websiteUrl && partner.websiteUrl !== "#" ? (
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
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
          {partners.map((partner) => (
            <span
              key={partner.name}
              className="h-1.5 w-8 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] opacity-55"
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              →
            </span>
            Be Our Partner Now!
          </a>
        </div>
      </div>
    </section>
  );
}
