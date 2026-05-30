import { keyHighlights } from "@/data/homepage";

export default function KeyHighlightsSection() {
  return (
    <section className="bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col items-center text-center md:mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
            Campaign Essence
          </p>

          <h2 className="font-tungsten mt-4 text-center text-5xl font-black tracking-normal text-white md:text-6xl">
            Key Highlights
          </h2>
        </div>

        <div className="rs-mobile-slider -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {keyHighlights.map((item) => (
            <article
              key={item.title}
              className="group relative min-w-[82%] snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 hover:shadow-[0_0_42px_rgba(98,217,219,0.12)] md:min-w-0"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#62d9db]/35 via-white/5 to-[#f19ac2]/35 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative z-10 m-px overflow-hidden rounded-2xl bg-[#111820]">
                <div className="relative h-[190px] overflow-hidden md:h-[180px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover brightness-95 transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-black/5 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />

                  <h3 className="font-tungsten text-4xl font-black leading-none tracking-normal text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 tracking-[0.02em] text-white/66">
                    {item.description}
                  </p>
                </div>

                <div className="mx-6 mb-6 overflow-hidden rounded-xl border border-white/20 bg-gradient-to-r from-[#62d9db]/90 to-[#f19ac2]/90 shadow-[0_0_28px_rgba(241,154,194,0.12)]">
                  <div className="h-1 w-full bg-white/20" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
          {keyHighlights.map((item) => (
            <span
              key={item.title}
              className="h-1.5 w-8 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] opacity-50"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
