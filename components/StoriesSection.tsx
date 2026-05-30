import { stories } from "@/data/homepage";

export default function StoriesSection() {
  return (
    <section id="blog" className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-3xl md:mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
            Stories & Updates
          </p>

          <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.04em] text-white md:text-5xl">
            Follow the Journey Behind the Campaign
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            Explore stories from the track, behind-the-scenes moments, motorsport insights, and
            lifestyle updates from Rifat Sungkar 2026.
          </p>
        </div>

        <div className="rs-mobile-slider -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {stories.map((story) => (
            <article
              key={story.title}
              className="group relative min-w-[86%] snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 hover:shadow-[0_0_42px_rgba(98,217,219,0.12)] md:min-w-0"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#62d9db]/35 via-white/5 to-[#f19ac2]/35 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative z-10 m-px rounded-2xl bg-[#111820] p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />

                  <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#f2a0b8]">
                    {story.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-white md:text-3xl">
                  {story.title}
                </h3>

                <p className="mt-5 text-sm leading-7 tracking-[0.02em] text-white/62">
                  {story.description}
                </p>

                <div className="mt-8 overflow-hidden rounded-xl border border-white/20 bg-gradient-to-r from-[#f2d8d2]/95 via-[#b9eee8]/95 to-[#62d9db]/95 shadow-[0_0_32px_rgba(98,217,219,0.14)]">
                  <div className="flex items-center justify-between gap-4 px-5 py-4">
                    <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#07090d]">
                      Read Stories
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07090d] text-sm text-white">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
          {stories.map((story) => (
            <span
              key={story.title}
              className="h-1.5 w-8 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] opacity-50"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
