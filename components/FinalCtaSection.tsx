export default function FinalCtaSection() {
  return (
    <section className="rs-reveal bg-[#07090d] px-6 pb-24 pt-10 md:px-10 lg:px-12">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111820] shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-r from-[#62d9db]/35 via-white/8 to-[#f19ac2]/35 opacity-95" />

        <div className="relative m-px overflow-hidden rounded-[2rem] bg-[#111820]">
          <div className="relative min-h-[600px] rs-kenburns-bg bg-[url('/images/rs-cta-homepage.png')] rs-kenburns-bg bg-cover bg-center">
            <div className="absolute inset-0 bg-black/42" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/38 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/55 to-transparent" />

            <div className="absolute right-0 top-0 hidden h-full w-[310px] border-l border-white/12 bg-black/28 backdrop-blur-[1px] lg:block">
              <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-[#62d9db]/10" />
              <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-[#62d9db] via-white to-[#f19ac2]" />
              <div className="absolute inset-x-8 top-10 h-[470px] rs-kenburns-bg bg-[url('/images/rs-ornament-badge.png')] bg-contain bg-top bg-no-repeat opacity-[0.95]" />
              <div className="absolute bottom-8 left-8 right-8 h-16 overflow-hidden rounded-xl border border-white/10">
                <div className="absolute inset-0 rs-kenburns-bg bg-[url('/images/rs-pattern-strip.png')] rs-kenburns-bg bg-cover bg-center opacity-95" />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

            <div className="relative z-10 flex min-h-[600px] flex-col justify-end px-6 pb-8 pt-20 md:px-8 lg:px-10 lg:pr-[350px]">
              <div className="mb-8 max-w-[760px]">
                <h2 className="font-tungsten max-w-3xl text-6xl font-black uppercase leading-[0.9] tracking-normal text-white md:text-8xl">
                  Ready To Continue
                  <br />
                  The Journey?
                </h2>

                <p className="mt-5 max-w-[540px] text-lg leading-7 tracking-[0.02em] text-white/88">
                  A campaign built around speed, legacy,
                  <br className="hidden md:block" />
                  family, and the spirit of Indonesian motorsport.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/35 bg-gradient-to-r from-[#f2d8d2]/95 via-[#b9eee8]/95 to-[#62d9db]/95 shadow-[0_0_48px_rgba(98,217,219,0.28)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/45 via-transparent to-white/10" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30" />

                <div className="relative z-10 flex w-full flex-col md:flex-row md:items-center md:justify-between">
                  <p className="px-8 py-7 font-tungsten text-4xl font-black leading-none tracking-normal text-[#07090d] drop-shadow-sm md:px-10 md:text-5xl">
                    Ready to experience the next
                    <br />
                    chapter?
                  </p>

                  <a
                    href="/events"
                    className="mx-8 mb-7 inline-flex items-center justify-center gap-4 rounded-full border border-white/10 bg-[#07090d] px-8 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-black/30 transition hover:scale-[1.02] hover:bg-black md:mx-10 md:mb-0"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      →
                    </span>
                    Discover Events
                  </a>
                </div>
              </div>

              <div className="mt-6 h-12 overflow-hidden rounded-xl border border-white/5 bg-[#07090d] lg:hidden">
                <div className="h-full rs-kenburns-bg bg-[url('/images/rs-pattern-strip.png')] rs-kenburns-bg bg-cover bg-center opacity-95" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
