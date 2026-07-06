export default function CampaignSection() {
  return (
    <section className="rs-reveal bg-[#07090d] px-6 py-12 md:px-16 lg:px-28">
      <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-xl bg-[#111820] shadow-2xl shadow-black/40">
          <img
            src="/images/about-rifat.png"
            alt="Rifat Sungkar campaign"
            className="h-auto w-full object-contain"
          />
        </div>

        <div>
          <p className="text-sm font-bold text-[#f2a0b8]">The Campaign</p>

          <h2 className="font-tungsten mt-2 text-5xl font-black uppercase leading-none tracking-normal text-white md:text-6xl">
            Bukan Sekadar Kecepatan, Balapan Jadi Warisan Tanpa Batasan
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-white/75">
            <p>
              Terinspirasi dari prestasi turun temurun keluarga Sungkar, Rifat Sungkar 2026:
              The Legend Continues merupakan cerita yang kini digarap bersama El Mayka dan
              Secret Riding bersama Sissy Priscillia lewat pengalaman balapan dan riding yang
              jarang terekspos kamera sebelumnya.
            </p>

            <p>
              Ini bukan sekadar kecepatan di lintasan, namun cara melestarikan cita-cita,
              merayakan kebersamaan, serta mengatasi kegagalan yang membuktikan bahwa warisan
              keluarga dan kemenangan tidak terhenti pada satu generasi.
            </p>
          </div>

          <a
            href="/about"
            className="mt-7 inline-flex rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white"
          >
            Discover The Story Now
          </a>
        </div>
      </div>
    </section>
  );
}
