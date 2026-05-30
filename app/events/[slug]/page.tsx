import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";

const events = [
  {
    slug: "the-legend-continues",
    title: "Rifat Sungkar x El Mayka",
    eyebrow: "The Legend Continues",
    description:
      "A cross-generation racing moment between father and son, celebrating legacy, competition, and the passion passed from one generation to the next.",
  },
  {
    slug: "secret-riding",
    title: "Rifat Sungkar x Sissy Priscillia",
    eyebrow: "Secret Riding",
    description:
      "An exclusive riding journey that captures the lifestyle side of the Sungkar family through adventure, freedom, and togetherness.",
  },
];

type EventDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Navbar />

      <section className="rs-reveal px-6 pb-24 pt-40 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#f2a0b8]">
            {event.eyebrow}
          </p>

          <h1 className="font-tungsten mt-5 max-w-4xl text-7xl font-black uppercase leading-[0.86] tracking-normal md:text-8xl lg:text-9xl text-white">
            {event.title}
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-white/75">
            {event.description}
          </p>

          <a
            href="/events"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white"
          >
            Back to Events
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
