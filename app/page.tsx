import AboutSection from "@/components/AboutSection";
import CampaignSection from "@/components/CampaignSection";
import EventsPreviewSection from "@/components/EventsPreviewSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import KeyHighlightsSection from "@/components/KeyHighlightsSection";
import Navbar from "@/components/Navbar";
import PartnersSection from "@/components/PartnersSection";
import MediaGallerySection from "@/components/MediaGallerySection";
import StoriesSection from "@/components/StoriesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Navbar />
      <HeroSection />
      <CampaignSection />
      <KeyHighlightsSection />
      <AboutSection />
      <EventsPreviewSection />
      <StoriesSection />
      <MediaGallerySection />
      <PartnersSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
