import {
  formatMediaGalleryCategory,
  getCMSMediaUrl,
  getHomepageMediaGallery,
} from "@/lib/cms";

const fallbackItems = [
  {
    title: "Legacy Campaign Visual",
    category: "campaign",
    caption: "A visual representation of the Inside RS legacy campaign.",
    image: "/images/rs-legacy.png",
  },
  {
    title: "Motorsport Energy",
    category: "motorsport",
    caption: "Motorsport energy, speed, and the spirit of competition.",
    image: "/images/rs-motorsport.png",
  },
  {
    title: "Lifestyle Riding Story",
    category: "lifestyle",
    caption: "The lifestyle side of Inside RS, built around freedom and the open road.",
    image: "/images/rs-lifestyle.png",
  },
];

export default async function MediaGallerySection() {
  const cmsItems = await getHomepageMediaGallery();

  const items =
    cmsItems.length > 0
      ? cmsItems
          .filter((item) => item.mediaType === "image")
          .map((item) => {
            const slidesFromCMS =
              item.slides
                ?.map((slide) => ({
                  image: getCMSMediaUrl(slide.image),
                  caption: slide.caption || item.caption || "",
                }))
                .filter((slide) => slide.image) || [];

            const coverImage = getCMSMediaUrl(item.image);

            const slides =
              slidesFromCMS.length > 0
                ? slidesFromCMS
                : coverImage
                  ? [
                      {
                        image: coverImage,
                        caption: item.caption || "",
                      },
                    ]
                  : [];

            return {
              title: item.title || "Campaign Media",
              category: item.category,
              caption: item.caption || "",
              slides,
            };
          })
          .filter((item) => item.slides.length > 0)
      : fallbackItems.map((item) => ({
          title: item.title,
          category: item.category,
          caption: item.caption,
          slides: [
            {
              image: item.image,
              caption: item.caption,
            },
          ],
        }));

  return (
    <section className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
              Media Gallery
            </p>

            <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
              Campaign
              <br />
              Moments
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 tracking-[0.02em] text-white/62 lg:justify-self-end">
            A curated visual collection from Inside RS campaign moments, events, lifestyle stories,
            and behind-the-scenes content.
          </p>
        </div>

        <div className="rs-mobile-slider -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative min-w-[86%] snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 md:min-w-0"
            >
              <div className="relative overflow-hidden">
                <div className="rs-mobile-slider flex h-[280px] snap-x snap-mandatory overflow-x-auto md:h-[380px]">
                  {item.slides.map((slide, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="relative h-full min-w-full snap-center overflow-hidden"
                    >
                      <img
                        src={slide.image || "/images/hero-rifat.png"}
                        alt={slide.caption || `${item.title} slide ${index + 1}`}
                        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />

                      <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                        {formatMediaGalleryCategory(item.category)}
                      </div>

                      {item.slides.length > 1 ? (
                        <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                          {index + 1}/{item.slides.length}
                        </div>
                      ) : null}

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-tungsten text-4xl font-black leading-none tracking-normal text-white">
                          {item.title}
                        </h3>

                        {(slide.caption || item.caption) ? (
                          <p className="mt-3 text-sm leading-6 tracking-[0.02em] text-white/70">
                            {slide.caption || item.caption}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>

                {item.slides.length > 1 ? (
                  <div className="absolute bottom-5 right-5 flex gap-1.5">
                    {item.slides.map((_, index) => (
                      <span
                        key={index}
                        className="h-1.5 w-6 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] opacity-70"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
          {items.map((item) => (
            <span
              key={item.title}
              className="h-1.5 w-8 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] opacity-55"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
