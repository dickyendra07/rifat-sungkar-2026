import {
  formatArticleCategory,
  getCMSMediaUrl,
  getFeaturedArticles,
} from "@/lib/cms";

const fallbackStories = [
  {
    title: "Cerita di Balik Warisan Balap",
    slug: "cerita-di-balik-warisan-balap",
    category: "family-legacy",
    excerpt:
      "Kisah dari lintasan balap, nilai keluarga, mentorship, dan semangat motorsport yang terus diwariskan dari generasi ke generasi.",
  },
  {
    title: "Behind The Legend Continues",
    slug: "behind-the-legend-continues",
    category: "motorsport",
    excerpt:
      "Persiapan, energi, dan momen emosional di balik cerita balapan lintas generasi antara Rifat Sungkar dan El Mayka.",
  },
  {
    title: "Secret Riding dan Cerita Perjalanan",
    slug: "secret-riding-dan-cerita-perjalanan",
    category: "lifestyle",
    excerpt:
      "Road trip eksklusif yang memadukan petualangan, family bonding, dan visual sinematik dari sisi lifestyle keluarga Sungkar.",
  },
];

export default async function StoriesSection() {
  const cmsArticles = await getFeaturedArticles();

  const stories =
    cmsArticles.length > 0
      ? cmsArticles.slice(0, 3).map((article) => ({
          title: article.title || "Untitled Story",
          slug: article.slug || "#",
          category: article.category,
          excerpt: article.excerpt || "",
          image:
            getCMSMediaUrl(article.thumbnailImage) ||
            getCMSMediaUrl(article.heroImage) ||
            "/images/hero-rifat.png",
          featured: article.featuredArticle,
        }))
      : fallbackStories.map((story) => ({
          ...story,
          image: "/images/rs-legacy.png",
          featured: false,
        }));

  return (
    <section id="blog" className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
              Stories & Updates
            </p>

            <h2 className="max-w-3xl text-5xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">
              Cerita di Belakang Layar
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 tracking-[0.02em] text-white/62 lg:justify-self-end">
            Semua kisah dari lintasan balap, behind the scenes, edukasi dan insights motorsport,
            serta update lifestyle dari Inside RS.
          </p>
        </div>

        <div className="rs-mobile-slider -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {stories.map((story) => (
            <article
              key={story.slug}
              className="group relative min-w-[84%] snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 md:min-w-0"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#62d9db]/25 via-white/5 to-[#f19ac2]/25 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative z-10 m-px grid h-full overflow-hidden rounded-2xl bg-[#111820] md:grid-cols-[0.42fr_1fr]">
                <div className="relative min-h-[190px] overflow-hidden md:min-h-full">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-black/15 to-transparent md:bg-gradient-to-r" />

                  {story.featured ? (
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                      Featured
                    </span>
                  ) : null}
                </div>

                <div className="p-6">
                  <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />

                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f2a0b8]">
                    {formatArticleCategory(story.category)}
                  </p>

                  <h3 className="font-tungsten mt-3 text-4xl font-black leading-none tracking-normal text-white">
                    {story.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 tracking-[0.02em] text-white/62">
                    {story.excerpt}
                  </p>

                  <a
                    href={`/blog/${story.slug}`}
                    className="mt-7 inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/72 transition hover:border-[#f19ac2]/40 hover:text-white"
                  >
                    Read More
                    <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/blog"
            className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              →
            </span>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
