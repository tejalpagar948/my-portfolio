import HeroSection from './component/sections/hero-section';
import ExploreGrid from './component/sections/explore-grid';
import ExperienceAdventure from './component/sections/experience-adventure';
import DiscoverSection from './component/sections/discover-section.tsx';
import TravelHeroSection from './component/sections/travel-hero-section';
import TravelSection from './component/sections/travel-section';
import ExperienceSection from './component/sections/experience-section';
import PromoHeroSection from './component/sections/promo-section';
import BlogSection from './component/sections/blog-section';
import SiteFooter from './component/site-footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExploreGrid />
      <ExperienceAdventure />
      <DiscoverSection />
      <TravelHeroSection />
      <TravelSection />
      <ExperienceSection />
      <BlogSection />
      <PromoHeroSection />
      <SiteFooter />
    </>
  );
}
