import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  formatEventCategory,
  formatEventStatus,
  getCMSMediaUrl,
  getEvents,
} from "@/lib/cms";

const timeline = [
  {
    number: "01",
    title: "Pengenalan Pertama",
    description:
      "Pengumuman resmi campaign Rifat Sungkar: The Legend Continues dengan dua cerita sebagai event utamanya.",
  },
  {
    number: "02",
    title: "Persiapan Mendalam",
    description:
      "Mulai dari behind the scenes, set up mobil, konten, momen latihan dan keluarga yang tak pernah tersorot kamera sebelumnya.",
  },
  {
    number: "03",
    title: "Momen Kunci",
    description:
      "Berbagai momen yang tidak boleh dilewatkan selama balapan berlangsung bersama El Mayka atau cerita riding bersama Sissy Priscillia.",
  },
  {
    number: "04",
    title: "Recap",
    description:
      "Post-event highlights, media coverage, koleksi foto, hingga berbagai cerita menarik yang bisa dinikmati bahkan setelah kegiatan sudah selesai.",
  },
];

const categories = [
  {
    title: "Motorsport",
    description:
      "Kegiatan yang menampilkan performa, kecepatan, disiplin, kompetisi, dan energi balapan dari kultur motorsport.",
  },
  {
    title: "Riding",
    description:
      "Perjalanan eksklusif yang membawakan cerita road trip, eksplorasi, lifestyle otomotif, dan petualangan keluarga Sungkar.",
  },
  {
    title: "Legacy",
    description:
      "Cerita tentang warisan, nilai keluarga, mentorship, dan semangat balapan yang diteruskan dari satu generasi ke generasi berikutnya.",
  },
  {
    title: "Media & Community",
    description:
      "Liputan media, update campaign, konten behind the scenes, serta aktivitas komunitas yang membantu menghidupkan cerita Inside RS.",
  },
];

const fallbackEvents = [
  {
    title: "Rifat Sungkar x El Mayka",
    slug: "the-legend-continues",
    eyebrow: "The Legend Continues",
    category: "family-legacy",
    status: "coming-soon",
    location: "TBA",
    shortDescription:
      "Balapan lintas generasi antara ayah dan anak dengan bakat dan semangat yang diteruskan turun temurun di track balap dari Rifat Sungkar ke El Mayka.",
    thumbnailUrl: "/images/rs-about-front.png",
  },
  {
    title: "Rifat Sungkar x Sissy Priscillia",
    slug: "secret-riding",
    eyebrow: "Secret Riding",
    category: "lifestyle-riding",
    status: "coming-soon",
    location: "TBA",
    shortDescription:
      "Road trip eksklusif, penuh tantangan dan petualangan oleh Rifat Sungkar dan Sissy Priscillia menjelajahi berbagai spot rahasia di Indonesia yang belum pernah dikunjungi sebelumnya.",
    thumbnailUrl: "/images/rs-lifestyle.png",
  },
];

export const metadata = {
  title: "Events Rifat Sungkar 2026 | Inside RS",
  description:
    "Cari tahu berbagai kegiatan Rifat Sungkar 2026, mulai dari balapan lintas generasi bersama El Mayka hingga Secret Riding bersama Sissy Priscillia.",
};

export default async function EventsPage() {
  const cmsEvents = await getEvents();

  const events =
    cmsEvents.length > 0
      ? cmsEvents.map((event) => ({
          title: event.title || "Untitled Event",
          slug: event.slug || "#",
          eyebrow: event.eyebrow || "Campaign Event",
          category: event.category,
          status: event.status,
          location: event.location || "TBA",
          shortDescription: event.shortDescription || "",
          thumbnailUrl:
            getCMSMediaUrl(event.thumbnailImage) ||
            getCMSMediaUrl(event.heroImage) ||
            "/images/hero-rifat.png",
        }))
      : fallbackEvents;

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[#07090d] pt-[88px]">
        <div className="relative min-h-[680px] bg-[url('/images/hero-rifat.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/38 to-black/35" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07090d] to-transparent" />

          <div className="relative z-10 mx-auto grid min-h-[680px] max-w-[1440px] gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-center lg:px-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#f2a0b8]">
                Events
              </p>

              <h1 className="font-tungsten mt-5 max-w-4xl text-7xl font-black uppercase leading-[0.86] tracking-normal text-white md:text-8xl lg:text-9xl">
                Dua Cerita,
                <br />
                Satu Keluarga.
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 tracking-[0.02em] text-white/78">
                Cari tahu lebih lanjut berbagai kegiatan Rifat Sungkar di tahun 2026, mulai dari
                balapan lintas generasi bersama El Mayka dan road trip eksklusif keliling
                Indonesia bersama Sissy Priscillia.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#featured-events"
                  className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Find The Event
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/35 p-7 shadow-2xl shadow-black/35 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#62d9db]">
                Inside RS Events
              </p>

              <h2 className="font-tungsten mt-4 text-5xl font-black uppercase leading-none tracking-normal text-white md:text-6xl">
                Segala Hal
                <br />
                Tentang Balapan dan Riding
              </h2>

              <p className="mt-5 text-base leading-7 tracking-[0.02em] text-white/62">
                Seluruh kegiatan, termasuk balapan hingga Secret Riding, di-handle langsung oleh
                tim Inside RS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-events" className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                Featured Events
              </p>
              <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
                Kegiatan di 2026
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 tracking-[0.02em] text-white/62">
              Menampilkan sudut pandang yang berbeda dari balapan, family, hingga lifestyle dari
              kacamata keluarga Rifat Sungkar.
            </p>
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
                      src={event.thumbnailUrl}
                      alt={event.title}
                      className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-black/20 to-transparent" />
                    <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
                      {formatEventStatus(event.status)}
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

                    <div className="mt-5 grid gap-3 text-sm text-white/55 sm:grid-cols-2">
                      <p>
                        <span className="text-white/35">Category:</span>{" "}
                        {formatEventCategory(event.category)}
                      </p>
                      <p>
                        <span className="text-white/35">Location:</span> {event.location}
                      </p>
                    </div>

                    <p className="mt-5 text-sm leading-7 tracking-[0.02em] text-white/66">
                      {event.shortDescription}
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

      <section className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
              Campaign Journey
            </p>
            <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
              Timeline Event
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {timeline.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-white/10 bg-[#111820] p-4 shadow-2xl shadow-black/20 md:p-7"
              >
                <p className="font-tungsten text-3xl font-black leading-none text-[#f2a0b8] md:text-6xl">
                  {item.number}
                </p>
                <h3 className="mt-5 text-sm font-black leading-5 tracking-[-0.02em] text-white md:mt-7 md:text-xl md:leading-7">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-5 tracking-[0.02em] text-white/62 md:mt-4 md:text-sm md:leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
              Event Categories
            </p>
            <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-[0.9] tracking-normal text-white md:text-7xl">
              Ada Kegiatan Apa Saja?
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {categories.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#f19ac2]/40 hover:bg-white/[0.05] md:p-6"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] md:mb-5 md:w-14" />
                <h3 className="font-tungsten text-3xl font-black leading-none tracking-normal text-white md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-5 tracking-[0.02em] text-white/62 md:mt-4 md:text-sm md:leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
