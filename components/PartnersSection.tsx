import { partners } from "@/data/homepage";

export default function PartnersSection() {
  return (
    <section className="rs-reveal bg-[#07090d] px-6 py-12 md:px-16 lg:px-28">
      <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-bold text-[#f2a0b8]">Official Partners</p>
          <h2 className="mt-2 text-3xl font-black leading-none tracking-[-0.04em] text-white md:text-5xl">
            Powered by Partners Who Believe in the Journey
          </h2>
          <a href="/contact" className="mt-7 inline-flex rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white">
            Become a Partner
          </a>
        </div>

        <div>
          <p className="max-w-2xl text-base leading-7 text-white/70">
            This campaign is made possible through the support of partners who share the same
            values: performance, passion, innovation, family, and legacy.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner} className="flex h-20 items-center justify-center rounded-lg bg-white/5 px-4 text-center text-sm font-black uppercase text-white/75">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
