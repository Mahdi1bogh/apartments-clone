import CallToActionSection from "./cta-section";
import DiscoverSection from "./discover-section";
import ExploreRentals from "./explore-rentals";
import FeaturesSection from "./features-section";
import FooterSection from "./footer-section";
import HeroSection from "./hero-section";
import HeroSectionn from "./hero-section2";

export default function Page() {
  return (
    <div>
      <HeroSectionn />
      <ExploreRentals />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}
