export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#07090d] pt-16">
      <div className="relative min-h-[560px] rs-kenburns-bg bg-[url('/images/hero-rifat.png')] rs-kenburns-bg bg-cover bg-center md:min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/45" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07090d] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1600px] items-center px-6 md:min-h-[600px] md:px-16 lg:px-28">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#f2a0b8]">
              Rifat Sungkar 2026
            </p>

            <h1 className="font-tungsten max-w-4xl text-7xl font-black uppercase leading-[0.82] tracking-normal sm:text-8xl lg:text-[128px] text-white">
              The Legend
              <br />
              Continues
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 md:text-lg">
              A new chapter of speed, legacy, and family begins. From the circuit to the open road,
              Rifat Sungkar returns with a story that connects generations, passion, and the spirit
              of Indonesian motorsport.
            </p>

            <a
              href="/about"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-3 text-[11px] font-black uppercase tracking-[0.25em] text-white shadow-lg shadow-pink-500/20"
            >
              Explore The Journey
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-24 overflow-hidden border-y border-white/5 bg-[#07090d]">
        <div className="absolute inset-0 rs-kenburns-bg bg-[url('/images/rs-pattern-strip.png')] rs-kenburns-bg bg-cover bg-center opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090d] via-transparent to-[#07090d]" />
      </div>
    </section>
  );
}
