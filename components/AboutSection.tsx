import { achievementHighlights } from "@/data/homepage";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#07090d] px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative min-h-[520px] md:min-h-[620px]">
          <div className="absolute left-0 top-0 h-[230px] w-[58%] overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/25 md:h-[285px] md:w-[48%]">
            <img
              src="/images/rs-about-back.png"
              alt="Rifat Sungkar rally car detail"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/12" />
            <div className="absolute bottom-0 left-6 h-1 w-[70%] bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />
          </div>

          <div className="absolute bottom-0 right-0 z-10 w-[86%] overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/40 md:w-[82%]">
            <img
              src="/images/rs-about-front.png"
              alt="Rifat Sungkar and El Mayka"
              className="h-auto w-full object-contain"
            />
            <div className="absolute inset-0 bg-black/8" />
            <div className="absolute bottom-0 left-6 h-1.5 w-[88%] bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />
          </div>
        </div>

        <div>
          <p className="text-base font-bold tracking-[0.16em] text-[#f2b0a3]">
            About Rifat Sungkar
          </p>

          <h2 className="font-tungsten mt-6 max-w-[680px] text-5xl font-black uppercase leading-[0.95] tracking-normal text-white md:text-7xl">
            A Champion Whose Journey Goes Beyond the Finish Line
          </h2>

          <div className="mt-8 max-w-[760px] space-y-5 text-base leading-8 tracking-[0.02em] text-white/78 md:text-xl md:leading-9">
            <p>
              Rifat Sungkar has built a legacy through discipline, courage, and passion for
              motorsport. Known as an 8-time national champion with experience on the world rally
              stage, Rifat continues to inspire the next generation of drivers and automotive
              enthusiasts across Indonesia.
            </p>

            <p>
              In 2026, his story continues through a campaign that brings together achievement,
              family, and the future of motorsport.
            </p>
          </div>

          <div className="mt-9">
            <h3 className="font-tungsten text-4xl font-black leading-none tracking-normal text-white md:text-5xl">
              Achievement Highlights
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3 md:max-w-xl md:gap-4">
              {achievementHighlights.map((achievement) => {
                const [number, label] = achievement.split(" - ");

                return (
                  <div
                    key={achievement}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-lg shadow-black/10"
                  >
                    <p className="font-tungsten text-3xl font-black leading-none text-[#f2a0b8] md:text-4xl">
                      {number}
                    </p>
                    <p className="mt-2 text-xs font-bold leading-5 tracking-[0.04em] text-white/72 md:text-sm">
                      {label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
