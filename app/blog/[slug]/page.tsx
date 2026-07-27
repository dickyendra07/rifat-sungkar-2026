import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  formatArticleCategory,
  formatDate,
  getArticleBySlug,
  getCMSMediaUrl,
} from "@/lib/cms";
import { notFound } from "next/navigation";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Inside RS",
    };
  }

  return {
    title: article.seo?.title || `${article.title} | Inside RS`,
    description: article.seo?.description || article.excerpt || "Read the latest story from Inside RS.",
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const heroImage =
    getCMSMediaUrl(article.heroImage) ||
    getCMSMediaUrl(article.thumbnailImage) ||
    "/images/revisi-rs/rs-home-hero.webp";

  const paragraphs = article.content
    ? article.content
        .split("\\n")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[#07090d] pt-[88px]">
        <div
          className="relative min-h-[700px] bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          <div className="absolute inset-0 bg-black/52" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/45 to-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07090d] to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[700px] max-w-[1440px] items-center px-6 py-20 md:px-10 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#f2a0b8]">
                {formatArticleCategory(article.category)}
              </p>

              <h1 className="font-tungsten mt-5 max-w-5xl text-7xl font-black uppercase leading-[0.86] tracking-normal text-white md:text-8xl lg:text-9xl">
                {article.title}
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 tracking-[0.02em] text-white/80">
                {article.excerpt}
              </p>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                {article.author || "Inside RS Team"} · {formatDate(article.publishedDate)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <article className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1fr]">
          <aside>
            <div className="sticky top-28 rounded-[2rem] border border-white/10 bg-[#111820] p-7 shadow-2xl shadow-black/20">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#62d9db]">
                Story Info
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/36">
                    Category
                  </p>
                  <p className="mt-2 font-semibold tracking-[0.02em] text-white/80">
                    {formatArticleCategory(article.category)}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/36">
                    Author
                  </p>
                  <p className="mt-2 font-semibold tracking-[0.02em] text-white/80">
                    {article.author || "Inside RS Team"}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/36">
                    Published
                  </p>
                  <p className="mt-2 font-semibold tracking-[0.02em] text-white/80">
                    {formatDate(article.publishedDate)}
                  </p>
                </div>
              </div>

              <a
                href="/blog"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-white/70 transition hover:border-white hover:bg-white hover:text-black"
              >
                Back to Stories
              </a>
            </div>
          </aside>

          <div>
            <div className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />

            <div className="space-y-7 text-lg leading-9 tracking-[0.02em] text-white/72">
              {paragraphs.length > 0 ? (
                paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
              ) : (
                <p>This story content will be available soon.</p>
              )}
            </div>
          </div>
        </article>
      </section>

      <section className="px-6 pb-24 pt-10 md:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111820]">
          <div className="absolute inset-0 bg-[url('/images/rs-cta-homepage.png')] bg-cover bg-center opacity-65" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />

          <div className="relative z-10 grid gap-10 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                Continue Reading
              </p>

              <h2 className="font-tungsten mt-4 max-w-xl text-6xl font-black uppercase leading-[0.9] tracking-normal text-white md:text-7xl">
                Explore More
                <br />
                Stories
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 tracking-[0.02em] text-white/72">
                Discover more stories from the Inside RS campaign, from motorsport culture to
                lifestyle riding and family legacy.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Back to Blog
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

      <Footer />
    </main>
  );
}
