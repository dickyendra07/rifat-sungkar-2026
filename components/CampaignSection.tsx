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
          <h2 className="font-tungsten mt-2 text-5xl font-black leading-none tracking-[-0.04em] text-white md:text-5xl">
            More Than a Race. A Legacy in Motion.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-white/75">
            <p>
              Rifat Sungkar 2026: The Legend Continues is a campaign built around speed, family,
              and legacy. It brings together two powerful stories: a cross-generation race between
              Rifat Sungkar and El Mayka, and an exclusive riding journey with Sissy Priscillia.
            </p>
            <p>
              This is not only about motorsport. It is about passing down passion, celebrating
              togetherness, and continuing a legacy that has shaped Indonesian racing culture.
            </p>
          </div>

          <a href="/events" className="mt-7 inline-flex rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white">
            Discover The Story
          </a>
        </div>
      </div>
    </section>
  );
}
