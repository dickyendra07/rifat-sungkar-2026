import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  formatArticleCategory,
  formatDate,
  getArticles,
  getCMSMediaUrl,
  getFeaturedArticle,
} from "@/lib/cms";

const fallbackArticles = [
  {
    title: "Why Legacy Matters in Motorsport",
    slug: "why-legacy-matters-in-motorsport",
    category: "family-legacy",
    excerpt:
      "Motorsport is built on more than speed. It is shaped by discipline, values, mentorship, and the courage to pass passion from one generation to another.",
    image: "/images/rs-legacy.png",
    author: "Inside RS Team",
    date: "Inside RS",
  },
  {
    title: "Inside The Legend Continues",
    slug: "inside-the-legend-continues",
    category: "motorsport",
    excerpt:
      "A closer look at the preparation, energy, and emotional story behind the upcoming cross-generation race between Rifat Sungkar and El Mayka.",
    image: "/images/rs-motorsport.png",
    author: "Inside RS Team",
    date: "Inside RS",
  },
  {
    title: "Secret Riding and the Freedom of the Open Road",
    slug: "secret-riding-and-the-freedom-of-the-open-road",
    category: "lifestyle",
    excerpt:
      "A journey that blends adventure, family bonding, and the cinematic lifestyle side of automotive culture.",
    image: "/images/rs-lifestyle.png",
    author: "Inside RS Team",
    date: "Inside RS",
  },
];

const categories = [
  "All Stories",
  "Campaign Updates",
  "Motorsport",
  "Lifestyle",
  "Family Legacy",
  "Behind The Scenes",
];

export const metadata = {
  title: "Rifat Sungkar Stories | Motorsport & Lifestyle",
  description:
    "Read campaign stories, motorsport insights, lifestyle riding updates, and behind-the-scenes moments from Rifat Sungkar 2026.",
};

export default async function BlogPage() {
  const cmsArticles = await getArticles();
  const cmsFeaturedArticle = await getFeaturedArticle();

  const articles =
    cmsArticles.length > 0
      ? cmsArticles.map((article) => ({
          title: article.title || "Untitled Article",
          slug: article.slug || "#",
          category: article.category,
          excerpt: article.excerpt || "",
          image:
            getCMSMediaUrl(article.thumbnailImage) ||
            getCMSMediaUrl(article.heroImage) ||
            "/images/hero-rifat.png",
          author: article.author || "Inside RS Team",
          date: formatDate(article.publishedDate),
        }))
      : fallbackArticles;

  const featuredSource = cmsFeaturedArticle || cmsArticles[0];

  const featuredArticle = featuredSource
    ? {
        title: featuredSource.title || "Latest Highlight",
        slug: featuredSource.slug || "#",
        category: featuredSource.category,
        excerpt: featuredSource.excerpt || "",
        image:
          getCMSMediaUrl(featuredSource.heroImage) ||
          getCMSMediaUrl(featuredSource.thumbnailImage) ||
          "/images/hero-rifat.png",
        author: featuredSource.author || "Inside RS Team",
        date: formatDate(featuredSource.publishedDate),
      }
    : articles[0];

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[#07090d] pt-[88px]">
        <div className="relative min-h-[680px] bg-[url('/images/rs-motorsport.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/48" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/42 to-black/25" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07090d] to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1440px] items-center px-6 py-20 md:px-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#f2a0b8]">
                Stories & Updates
              </p>

              <h1 className="font-tungsten mt-5 max-w-4xl text-7xl font-black uppercase leading-[0.86] tracking-normal text-white md:text-8xl lg:text-9xl">
                Stories Behind
                <br />
                The Journey
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 tracking-[0.02em] text-white/78">
                Explore campaign updates, motorsport insights, behind-the-scenes moments, and
                lifestyle stories from Inside RS.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#featured-story"
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

      {featuredArticle ? (
        <section id="featured-story" className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                  Featured Story
                </p>

                <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
                  Latest Highlight
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 tracking-[0.02em] text-white/62 lg:justify-self-end">
                A selected editorial story that introduces the emotional core of the campaign.
              </p>
            </div>

            <article className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#111820] shadow-2xl shadow-black/25 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[240px] overflow-hidden md:min-h-[360px]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-black/10 to-transparent lg:bg-gradient-to-r" />
              </div>

              <div className="flex flex-col justify-center p-6 md:p-10">
                <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />

                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2a0b8]">
                  {formatArticleCategory(featuredArticle.category)}
                </p>

                <h3 className="font-tungsten mt-4 text-5xl font-black uppercase leading-[0.9] tracking-normal text-white md:text-7xl">
                  {featuredArticle.title}
                </h3>

                <p className="mt-5 text-sm leading-7 tracking-[0.02em] text-white/62">
                  {featuredArticle.excerpt}
                </p>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/38">
                  {featuredArticle.author} · {featuredArticle.date}
                </p>

                <a
                  href={`/blog/${featuredArticle.slug}`}
                  className="mt-8 inline-flex w-full items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.01] sm:w-fit"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Read Full Story
                </a>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      <section className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                Campaign Journal
              </p>

              <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
                Latest Stories
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
                key={article.slug}
                className="group relative min-w-[84%] snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 hover:shadow-[0_0_42px_rgba(98,217,219,0.12)] md:min-w-0"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-black/15 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/78 backdrop-blur-sm">
                    {formatArticleCategory(article.category)}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />

                  <h3 className="font-tungsten text-4xl font-black leading-none tracking-normal text-white">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 tracking-[0.02em] text-white/62">
                    {article.excerpt}
                  </p>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                    {article.author} · {article.date}
                  </p>

                  <a
                    href={`/blog/${article.slug}`}
                    className="mt-7 block overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-[#f2d8d2]/95 via-[#b9eee8]/95 to-[#62d9db]/95 shadow-[0_0_28px_rgba(98,217,219,0.12)] transition hover:scale-[1.01]"
                  >
                    <div className="flex items-center justify-between gap-4 px-5 py-4">
                      <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#07090d]">
                        Read Story
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07090d] text-sm text-white">
                        →
                      </span>
                    </div>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
            {articles.map((article) => (
              <span
                key={article.slug}
                className="h-1.5 w-8 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] opacity-55"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
