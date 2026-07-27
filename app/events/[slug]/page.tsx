import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  formatEventCategory,
  formatEventStatus,
  getCMSMediaUrl,
  getEventBySlug,
} from "@/lib/cms";
import { notFound } from "next/navigation";

type EventDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const fallbackEvents = [
  {
    slug: "the-legend-continues",
    eyebrow: "The Legend Continues",
    title: "Rifat Sungkar x El Mayka",
    category: "family-legacy",
    status: "coming-soon",
    location: "TBA",
    image: "/images/rs-about-front.png",
    intro:
      "A cross-generation racing moment between father and son, celebrating legacy, competition, and the passion passed from one generation to the next.",
    overview:
      "The Legend Continues captures a powerful father-and-son racing story between Rifat Sungkar and El Mayka. This event is not only about competition, but about legacy, mentorship, discipline, and the emotional journey of passing passion forward.",
    highlights: [
      "Cross-generation racing story",
      "Motorsport performance moment",
      "Behind-the-scenes preparation",
      "Family legacy narrative",
      "Media and community activation",
    ],
    storyTitle: "A Racing Legacy Passed Forward",
    storyCopy:
      "For Rifat Sungkar, motorsport has always been more than speed. It is a discipline, a culture, and a way to build character. Through this campaign, the story continues with El Mayka, bringing a new generation into the same racing spirit.",
  },
  {
    slug: "secret-riding",
    eyebrow: "Secret Riding",
    title: "Rifat Sungkar x Sissy Priscillia",
    category: "lifestyle-riding",
    status: "coming-soon",
    location: "TBA",
    image: "/images/rs-lifestyle.png",
    intro:
      "An exclusive riding journey that captures the lifestyle side of the Sungkar family through adventure, freedom, and togetherness.",
    overview:
      "Secret Riding brings a more personal and cinematic side of the campaign. Built around open-road exploration, family bonding, and automotive lifestyle, this event highlights the relationship between Rifat Sungkar and Sissy Priscillia beyond the circuit.",
    highlights: [
      "Exclusive riding journey",
      "Open-road lifestyle story",
      "Family bonding experience",
      "Cinematic travel content",
      "Lifestyle and community activation",
    ],
    storyTitle: "Freedom, Family, and the Open Road",
    storyCopy:
      "Secret Riding is designed to show another side of automotive culture: the freedom of the road, the joy of shared journeys, and the personal stories that happen beyond racing circuits.",
  },
];

export async function generateMetadata({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const cmsEvent = await getEventBySlug(slug);
  const fallbackEvent = fallbackEvents.find((item) => item.slug === slug);
  const event = cmsEvent || fallbackEvent;

  if (!event) {
    return {
      title: "Event Not Found | Inside RS",
    };
  }

  return {
    title:
      cmsEvent?.seo?.title ||
      (event.slug === "the-legend-continues"
        ? "Rifat Sungkar x El Mayka | Event 2026"
        : "Secret Riding with Sissy | Event 2026"),
    description:
      cmsEvent?.seo?.description ||
      cmsEvent?.shortDescription ||
      fallbackEvent?.intro ||
      "Explore official Inside RS campaign events.",
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const cmsEvent = await getEventBySlug(slug);
  const fallbackEvent = fallbackEvents.find((item) => item.slug === slug);

  if (!cmsEvent && !fallbackEvent) {
    notFound();
  }

  const event = {
    slug,
    eyebrow: cmsEvent?.eyebrow || fallbackEvent?.eyebrow || "Campaign Event",
    title: cmsEvent?.title || fallbackEvent?.title || "Untitled Event",
    category: cmsEvent?.category || fallbackEvent?.category,
    status: cmsEvent?.status || fallbackEvent?.status,
    location: cmsEvent?.location || fallbackEvent?.location || "TBA",
    image:
      getCMSMediaUrl(cmsEvent?.heroImage) ||
      getCMSMediaUrl(cmsEvent?.thumbnailImage) ||
      fallbackEvent?.image ||
      "/images/revisi-rs/rs-home-hero.webp",
    intro: cmsEvent?.shortDescription || fallbackEvent?.intro || "",
    overview: cmsEvent?.overview || fallbackEvent?.overview || "",
    storyTitle: cmsEvent?.storyTitle || fallbackEvent?.storyTitle || "Event Story",
    storyCopy: cmsEvent?.storyCopy || fallbackEvent?.storyCopy || "",
    highlights:
      cmsEvent?.highlights?.map((item) => item.item || "").filter(Boolean) ||
      fallbackEvent?.highlights ||
      [],
    gallery:
      cmsEvent?.gallery
        ?.map((item) => ({
          image: getCMSMediaUrl(item.image),
          caption: item.caption || "",
        }))
        .filter((item) => item.image) || [],
  };

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[#07090d] pt-[88px]">
        <div
          className="relative min-h-[700px] bg-cover bg-center"
          style={{ backgroundImage: `url('${event.image}')` }}
        >
          <div className="absolute inset-0 bg-black/52" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/45 to-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07090d] to-transparent" />

          <div className="relative z-10 mx-auto grid min-h-[700px] max-w-[1440px] gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#f2a0b8]">
                {event.eyebrow}
              </p>

              <h1 className="font-tungsten mt-5 max-w-4xl text-7xl font-black uppercase leading-[0.86] tracking-normal text-white md:text-8xl lg:text-9xl">
                {event.title}
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 tracking-[0.02em] text-white/80">
                {event.intro}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Explore Event
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
                >
                  Contact Team
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/35 p-7 shadow-2xl shadow-black/35 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#62d9db]">
                Event Info
              </p>

              <div className="mt-7 space-y-4">
                {[
                  ["Status", formatEventStatus(event.status)],
                  ["Category", formatEventCategory(event.category)],
                  ["Location", event.location],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/36">
                      {label}
                    </p>
                    <p className="mt-2 font-semibold tracking-[0.02em] text-white/80">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
              Event Overview
            </p>

            <h2 className="font-tungsten mt-4 max-w-xl text-6xl font-black uppercase leading-[0.9] tracking-normal text-white md:text-7xl">
              {event.storyTitle}
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 tracking-[0.02em] text-white/72">
              {event.overview}
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-[#f2d8d2]/95 via-[#b9eee8]/95 to-[#62d9db]/95 shadow-[0_0_32px_rgba(98,217,219,0.14)]">
              <div className="p-7">
                <p className="font-tungsten text-4xl font-black leading-none tracking-normal text-[#07090d]">
                  {event.storyCopy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
              What to Expect
            </p>

            <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
              Event Highlights
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-5">
            {event.highlights.map((item, index) => (
              <article
                key={item}
                className="rounded-2xl border border-white/10 bg-[#111820] p-4 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#f19ac2]/40 md:p-6"
              >
                <p className="font-tungsten text-3xl font-black leading-none text-[#f2a0b8] md:text-5xl">
                  0{index + 1}
                </p>

                <p className="mt-5 text-sm font-bold leading-6 tracking-[0.01em] text-white/82 md:mt-6 md:text-base">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {event.gallery.length > 0 ? (
        <section className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                  Event Gallery
                </p>

                <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
                  Captured Moments
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 tracking-[0.02em] text-white/62">
                Selected visual moments from this campaign event, managed directly from the Inside RS CMS.
              </p>
            </div>

            <div className="rs-mobile-slider -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
              {event.gallery.map((item, index) => (
                <article
                  key={`${item.image}-${index}`}
                  className="group relative min-w-[86%] snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 md:min-w-0"
                >
                  <div className="relative h-[260px] overflow-hidden md:h-[320px]">
                    <img
                      src={item.image || ""}
                      alt={item.caption || `${event.title} gallery image ${index + 1}`}
                      className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {item.caption ? (
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-sm font-bold leading-6 tracking-[0.02em] text-white/86">
                          {item.caption}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
              {event.gallery.map((item, index) => (
                <span
                  key={`${item.image}-dot-${index}`}
                  className="h-1.5 w-8 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] opacity-55"
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 pb-24 pt-10 md:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111820]">
          <div className="absolute inset-0 bg-[url('/images/rs-cta-homepage.png')] bg-cover bg-center opacity-65" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />

          <div className="relative z-10 grid gap-10 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                Event Inquiry
              </p>

              <h2 className="font-tungsten mt-4 max-w-xl text-6xl font-black uppercase leading-[0.9] tracking-normal text-white md:text-7xl">
                Interested in
                <br />
                This Event?
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 tracking-[0.02em] text-white/72">
                Contact the team for media, sponsorship, partnership, and collaboration opportunities
                related to this campaign event.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Contact Team
                </a>

                <a
                  href="/events"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
                >
                  Back to Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
