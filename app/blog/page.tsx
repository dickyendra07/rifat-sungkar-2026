import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const featuredArticle = {
  category: "Legacy",
  title: "Why Legacy Matters in Motorsport",
  description:
    "Motorsport is built on more than speed. It is shaped by discipline, values, mentorship, and the courage to pass passion from one generation to another.",
  image: "/images/rs-legacy.png",
  date: "Campaign Story",
};

const articles = [
  {
    category: "Motorsport",
    title: "Inside The Legend Continues",
    description:
      "A closer look at the preparation, energy, and emotional story behind the upcoming cross-generation race between Rifat and El Mayka.",
    image: "/images/rs-motorsport.png",
    date: "Event Update",
  },
  {
    category: "Lifestyle",
    title: "Secret Riding and the Freedom of the Open Road",
    description:
      "A journey that blends adventure, family bonding, and the cinematic lifestyle side of automotive culture.",
    image: "/images/rs-lifestyle.png",
    date: "Lifestyle Story",
  },
  {
    category: "Family",
    title: "A Story Shared Across Generations",
    description:
      "The 2026 campaign brings together family, passion, and the emotional connection between motorsport and personal legacy.",
    image: "/images/rs-family.png",
    date: "Behind The Scenes",
  },
  {
    category: "Campaign",
    title: "Building the 2026 Campaign Journey",
    description:
      "From visual direction to event activation, the campaign is designed as a cinematic experience for motorsport and lifestyle audiences.",
    image: "/images/hero-rifat.png",
    date: "Campaign Update",
  },
];

const categories = ["Legacy", "Motorsport", "Lifestyle", "Family", "Campaign Updates"];

export const metadata = {
  title: "Rifat Sungkar Stories | Motorsport & Lifestyle",
  description:
    "Read campaign stories, motorsport insights, lifestyle riding updates, and behind-the-scenes moments from Rifat Sungkar 2026.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Navbar />

      <section className="rs-reveal relative overflow-hidden bg-[#07090d] pt-[88px]">
        <div className="relative min-h-[620px] rs-kenburns-bg bg-[url('/images/rs-motorsport.png')] rs-kenburns-bg bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/48 to-black/30" />

          <div className="absolute right-[8%] top-1/2 hidden h-[430px] w-[310px] -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/12 bg-black/24 shadow-2xl shadow-black/30 backdrop-blur-[1px] lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-[#62d9db]/10" />
            <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-[#62d9db] via-white to-[#f19ac2]" />
            <div className="absolute inset-x-7 top-8 h-[310px] rs-kenburns-bg bg-[url('/images/rs-ornament-badge.png')] bg-contain bg-top bg-no-repeat opacity-[0.86]" />
            <div className="absolute bottom-7 left-7 right-7 h-14 overflow-hidden rounded-xl border border-white/10">
              <div className="absolute inset-0 rs-kenburns-bg bg-[url('/images/rs-pattern-strip.png')] rs-kenburns-bg bg-cover bg-center opacity-95" />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07090d] to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1440px] items-center px-6 py-20 md:px-10 lg:px-12 lg:pr-[420px]">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#f2a0b8]">
                Stories & Updates
              </p>

              <h1 className="font-tungsten mt-5 max-w-4xl text-7xl font-black uppercase leading-[0.86] tracking-normal md:text-8xl lg:text-9xl text-white">
                Stories Behind
                <br />
                The Journey
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 tracking-[0.02em] text-white/78">
                Explore campaign updates, motorsport insights, behind-the-scenes moments, and
                lifestyle stories from Rifat Sungkar 2026: The Legend Continues.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#articles"
                  className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Read Stories
                </a>

                <a
                  href="/events"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
                >
                  Explore Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-reveal bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                Featured Story
              </p>
              <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
                Latest Highlight
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 tracking-[0.02em] text-white/62">
              A selected editorial story that introduces the emotional core of the campaign.
            </p>
          </div>

          <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111820] shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 hover:shadow-[0_0_46px_rgba(98,217,219,0.12)]">
            <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-r from-[#62d9db]/35 via-white/5 to-[#f19ac2]/35 opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative z-10 m-px grid overflow-hidden rounded-[2rem] bg-[#111820] lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[240px] overflow-hidden md:min-h-[360px]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-black/10 to-transparent lg:bg-gradient-to-r" />
              </div>

              <div className="flex flex-col justify-center p-6 md:p-10">
                <div className="mb-7 flex items-center gap-4">
                  <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#f2a0b8]">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/35">
                    {featuredArticle.date}
                  </span>
                </div>

                <h3 className="font-tungsten text-5xl font-black uppercase leading-[0.9] tracking-normal text-white md:text-7xl">
                  {featuredArticle.title}
                </h3>

                <p className="mt-6 text-base leading-8 tracking-[0.02em] text-white/66">
                  {featuredArticle.description}
                </p>

                <a
                  href="/blog"
                  className="mt-8 inline-flex w-fit items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Read Article
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="articles" className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                Articles
              </p>
              <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
                Campaign Journal
              </h2>
            </div>

            <div className="rs-mobile-slider -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0">
              {categories.map((category) => (
                <span
                  key={category}
                  className="shrink-0 snap-start rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/58"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="rs-mobile-slider -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group relative min-w-[84%] snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 hover:shadow-[0_0_42px_rgba(98,217,219,0.12)] md:min-w-0"
              >
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#62d9db]/35 via-white/5 to-[#f19ac2]/35 opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative z-10 m-px overflow-hidden rounded-2xl bg-[#111820]">
                  <div className="relative h-[190px] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-black/10 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#f2a0b8]">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-white">
                      {article.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 tracking-[0.02em] text-white/62">
                      {article.description}
                    </p>

                    <div className="mt-7 overflow-hidden rounded-xl border border-white/20 bg-gradient-to-r from-[#f2d8d2]/95 via-[#b9eee8]/95 to-[#62d9db]/95 shadow-[0_0_32px_rgba(98,217,219,0.14)]">
                      <div className="flex items-center justify-between gap-4 px-5 py-4">
                        <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#07090d]">
                          Read Story
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07090d] text-sm text-white">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
            {articles.map((article) => (
              <span
                key={article.title}
                className="h-1.5 w-8 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] opacity-55"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="rs-reveal px-6 pb-24 pt-10 md:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111820]">
          <div className="absolute inset-0 rs-kenburns-bg bg-[url('/images/rs-cta-homepage.png')] rs-kenburns-bg bg-cover bg-center opacity-65" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />

          <div className="relative z-10 grid gap-10 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                Stay Updated
              </p>

              <h2 className="font-tungsten mt-4 max-w-xl text-6xl font-black uppercase leading-[0.9] tracking-normal md:text-7xl text-white">
                Follow Every
                <br />
                Campaign Story
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 tracking-[0.02em] text-white/72">
                Discover every announcement, behind-the-scenes update, and story from Rifat Sungkar
                2026: The Legend Continues.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/events"
                  className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Explore Events
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
                >
                  Contact Team
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
