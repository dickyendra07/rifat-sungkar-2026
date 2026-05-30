import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const achievements = [
  {
    number: "8x",
    label: "National Champion",
    description: "A proven record built through years of discipline, competition, and consistency.",
  },
  {
    number: "WRC",
    label: "World Rally Experience",
    description: "Experience on the world rally stage, representing Indonesian motorsport beyond borders.",
  },
  {
    number: "2026",
    label: "The Next Chapter",
    description: "A new campaign era that connects motorsport, family, legacy, and lifestyle.",
  },
  {
    number: "RS",
    label: "Family Legacy",
    description: "A personal story that connects racing culture, family values, and the next generation.",
  },
];

const timeline = [
  {
    year: "Legacy",
    title: "Built Through Motorsport",
    description:
      "Rifat Sungkar has built his name through speed, precision, discipline, and a deep passion for motorsport.",
  },
  {
    year: "Champion",
    title: "A Proven Competitive Journey",
    description:
      "Known as an 8-time national champion, Rifat continues to be one of Indonesia's respected motorsport figures.",
  },
  {
    year: "Family",
    title: "A Story Beyond the Track",
    description:
      "His journey is not only about racing, but also about family, values, mentorship, and passing passion forward.",
  },
  {
    year: "2026",
    title: "The Legend Continues",
    description:
      "The 2026 campaign introduces a new chapter through Rifat, El Mayka, and Sissy Priscillia.",
  },
];

const values = [
  {
    title: "Discipline",
    description:
      "Motorsport requires focus, preparation, consistency, and the courage to perform under pressure.",
  },
  {
    title: "Legacy",
    description:
      "A story that continues through values, mentorship, family, and the next generation of racing culture.",
  },
  {
    title: "Family",
    description:
      "The campaign highlights a personal side of Rifat through El Mayka and Sissy Priscillia.",
  },
  {
    title: "Passion",
    description:
      "A lifelong connection to automotive culture, competition, exploration, and the open road.",
  },
];

export const metadata = {
  title: "About Rifat Sungkar | Motorsport Legacy",
  description:
    "Discover Rifat Sungkar's motorsport journey, achievements, family legacy, and the story behind The Legend Continues campaign.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Navbar />

      <section className="rs-reveal relative overflow-hidden bg-[#07090d] pt-[88px]">
        <div className="relative min-h-[700px] rs-kenburns-bg bg-[url('/images/rs-about-front.png')] rs-kenburns-bg bg-cover bg-center">
          <div className="absolute inset-0 bg-black/48" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/48 to-black/25" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07090d] to-transparent" />

          <div className="relative z-10 mx-auto grid min-h-[700px] max-w-[1440px] gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#f2a0b8]">
                About Rifat Sungkar
              </p>

              <h1 className="font-tungsten mt-5 max-w-4xl text-7xl font-black uppercase leading-[0.86] tracking-normal md:text-8xl lg:text-9xl text-white">
                A Champion
                <br />
                Beyond the Finish Line
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 tracking-[0.02em] text-white/80">
                Rifat Sungkar is a name built through discipline, courage, and a lifelong passion
                for motorsport. His journey continues through a new campaign that connects
                achievement, family, and the future of Indonesian racing culture.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#legacy"
                  className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Discover His Legacy
                </a>

                <a
                  href="/events"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
                >
                  Explore Events
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/35 p-7 shadow-2xl shadow-black/35 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#62d9db]">
                Profile Essence
              </p>

              <h2 className="font-tungsten mt-4 text-5xl font-black uppercase leading-none tracking-normal text-white md:text-6xl">
                Speed,
                <br />
                Family & Legacy
              </h2>

              <p className="mt-5 text-base leading-7 tracking-[0.02em] text-white/62">
                The 2026 campaign presents Rifat as a champion, family man, mentor, and figure
                who continues to inspire the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="legacy" className="bg-[#07090d] px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[560px]">
            <div className="absolute left-0 top-0 h-[285px] w-[48%] overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/25">
              <img
                src="/images/rs-about-back.png"
                alt="Rifat Sungkar rally car detail"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/12" />
              <div className="absolute bottom-0 left-8 h-1 w-[70%] bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />
            </div>

            <div className="absolute bottom-0 right-0 z-10 w-[82%] overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/40">
              <img
                src="/images/rs-about-front.png"
                alt="Rifat Sungkar and El Mayka"
                className="h-auto w-full object-contain"
              />
              <div className="absolute inset-0 bg-black/8" />
              <div className="absolute bottom-0 left-8 h-1.5 w-[88%] bg-gradient-to-r from-[#62d9db] to-[#f19ac2]" />
            </div>
          </div>

          <div>
            <p className="text-base font-bold tracking-[0.16em] text-[#f2b0a3]">
              The Legacy
            </p>

            <h2 className="font-tungsten mt-6 max-w-[680px] text-6xl font-black uppercase leading-[0.95] tracking-normal md:text-7xl text-white">
              A Journey That Goes Beyond Racing
            </h2>

            <div className="mt-8 max-w-[760px] space-y-6 text-xl leading-9 tracking-[0.02em] text-white/78">
              <p>
                Rifat Sungkar has built a legacy through discipline, courage, and passion for
                motorsport. Known as an 8-time national champion with experience on the world
                rally stage, Rifat continues to inspire the next generation of drivers and
                automotive enthusiasts across Indonesia.
              </p>

              <p>
                In 2026, his story continues through a campaign that brings together achievement,
                family, lifestyle, and the future of motorsport.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-reveal relative overflow-hidden bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute right-8 top-24 hidden h-[320px] w-[320px] bg-[url('/images/rs-ornament-badge.png')] bg-contain bg-center bg-no-repeat opacity-[0.08] lg:block" />

        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                Achievement Highlights
              </p>
              <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
                Built by Results
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 tracking-[0.02em] text-white/62 lg:justify-self-end">
              Key achievements that shape the credibility and emotional strength behind the 2026
              campaign.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
            {achievements.map((item) => (
              <article
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111820] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#f19ac2]/45 hover:shadow-[0_0_42px_rgba(98,217,219,0.12)]"
              >
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#62d9db]/35 via-white/5 to-[#f19ac2]/35 opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative z-10 m-px min-h-[210px] rounded-2xl bg-[#111820] p-5 md:min-h-[230px] md:p-6 lg:min-h-[250px]">
                  <p className="font-tungsten text-4xl font-black leading-none text-[#f2a0b8] md:text-5xl lg:text-6xl">
                    {item.number}
                  </p>

                  <h3 className="mt-4 font-tungsten text-3xl font-black leading-none tracking-normal text-white md:text-4xl lg:text-[42px]">
                    {item.label}
                  </h3>

                  <p className="mt-4 text-xs leading-6 tracking-[0.02em] text-white/62 md:text-sm md:leading-7">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-reveal bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
              Career Journey
            </p>
            <h2 className="font-tungsten mt-4 max-w-3xl text-6xl font-black uppercase leading-[0.9] tracking-normal md:text-7xl text-white">
              From Champion to the Next Chapter
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {timeline.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#111820] p-4 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#f19ac2]/40 md:p-7"
              >
                <p className="font-tungsten text-3xl font-black leading-none text-[#f2a0b8] md:text-5xl">
                  {item.year}
                </p>
                <h3 className="mt-5 text-sm font-black leading-5 tracking-[-0.02em] text-white md:mt-7 md:text-xl md:leading-7">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-5 tracking-[0.02em] text-white/62 md:mt-4 md:text-sm md:leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-reveal bg-[#07090d] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
              Campaign Values
            </p>
            <h2 className="font-tungsten mt-4 text-6xl font-black uppercase leading-[0.9] tracking-normal text-white md:text-7xl">
              The Values Behind the Story
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#f19ac2]/40 hover:bg-white/[0.05] md:p-6"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] md:mb-5 md:w-14" />
                <h3 className="font-tungsten text-3xl font-black leading-none tracking-normal text-white md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-5 tracking-[0.02em] text-white/62 md:mt-4 md:text-sm md:leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-reveal px-6 pb-24 pt-10 md:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111820]">
          <div className="absolute inset-0 rs-kenburns-bg bg-[url('/images/rs-cta-homepage.png')] rs-kenburns-bg bg-cover bg-center opacity-65" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />

          <div className="relative z-10 grid gap-10 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f2a0b8]">
                Continue the Story
              </p>

              <h2 className="font-tungsten mt-4 max-w-xl text-6xl font-black uppercase leading-[0.9] tracking-normal md:text-7xl text-white">
                Discover the 2026
                <br />
                Campaign Events
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 tracking-[0.02em] text-white/72">
                Explore the two main campaign stories: a cross-generation racing moment with El
                Mayka and a cinematic riding journey with Sissy Priscillia.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/events"
                  className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  Explore Events
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
                >
                  Contact Team
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
