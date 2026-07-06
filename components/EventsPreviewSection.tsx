import {
  formatEventCategory,
  getCMSMediaUrl,
  getFeaturedEvents,
} from "@/lib/cms";

const fallbackEvents = [
  {
    title: "Rifat Sungkar x El Mayka",
    slug: "the-legend-continues",
    eyebrow: "The Legend Continues",
    category: "family-legacy",
    description:
      "Balapan lintas generasi antara ayah dan anak dengan bakat dan semangat yang diteruskan turun temurun di track balap dari Rifat Sungkar ke El Mayka.",
    image: "/images/rs-about-front.png",
  },
  {
    title: "Rifat Sungkar x Sissy Priscillia",
    slug: "secret-riding",
    eyebrow: "Secret Riding",
    category: "lifestyle-riding",
    description:
      "Road trip eksklusif, penuh tantangan dan petualangan oleh Rifat Sungkar dan Sissy Priscillia menjelajahi berbagai spot rahasia di Indonesia yang belum pernah dikunjungi sebelumnya.",
    image: "/images/rs-lifestyle.png",
  },
];

export default async function EventsPreviewSection() {
  const cmsEvents = await getFeaturedEvents();

  const events =
    cmsEvents.length > 0
      ? cmsEvents.map((event) => ({
          title: event.title || "Untitled Event",
          slug: event.slug || "#",
          eyebrow: event.eyebrow || "Campaign Event",
          category: event.category,
          description: event.shortDescription || "",
          image:
            getCMSMediaUrl(event.thumbnailImage) ||
            getCMSMediaUrl(event.heroImage) ||
            "/images/hero-rifat.png",
        }))
      : fallbackEvents;

  return (
    <section id="events" className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
            Events Preview
          </p>

          <h2 className="font-tungsten mt-4 text-center text-5xl font-black uppercase tracking-normal text-white md:text-6xl">
            The Legend Continues
          </h2>
        </div>

        <div className="rs-mobile-slider -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
          {events.map((event) => (
            <article
              key={event.slug}
              className="group relative min-w-[88%] snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 hover:shadow-[0_0_46px_rgba(98,217,219,0.12)] md:min-w-0"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#62d9db]/35 via-white/5 to-[#f19ac2]/35 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative z-10 m-px overflow-hidden rounded-2xl bg-[#111820]">
                <div className="relative h-[230px] overflow-hidden md:h-[330px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-black/20 to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
                    {formatEventCategory(event.category)}
                  </div>
                </div>

                <div className="p-7">
                  <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />

                  <p className="text-base font-bold tracking-[0.08em] text-[#f2a0b8]">
                    {event.eyebrow}
                  </p>

                  <h3 className="font-tungsten mt-2 text-5xl font-black leading-none tracking-normal text-white md:text-6xl">
                    {event.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 tracking-[0.02em] text-white/66">
                    {event.description}
                  </p>

                  <a
                    href={`/events/${event.slug}`}
                    className="mt-8 block overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-[#f2d8d2]/95 via-[#b9eee8]/95 to-[#62d9db]/95 shadow-[0_0_32px_rgba(98,217,219,0.14)] transition hover:scale-[1.01]"
                  >
                    <div className="flex items-center justify-between gap-4 px-5 py-4">
                      <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#07090d]">
                        See What's Next
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07090d] text-sm text-white">
                        →
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
          {events.map((event) => (
            <span
              key={event.slug}
              className="h-1.5 w-10 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] opacity-55"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
