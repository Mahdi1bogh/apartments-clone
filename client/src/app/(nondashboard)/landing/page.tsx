import CallToActionSection from "./cta-section";
import DiscoverSection from "./discover-section";
import FeaturesSection from "./features-section";
import FooterSection from "./footer-section";
import HeroSection from "./hero-section";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}
