<<<<<<< HEAD
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
=======
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-us-section';
import SkillsSection from '@/components/sections/skills-section';
import KeySkillsSection from '@/components/sections/key-skills-section';
import ResumeSection from '@/components/sections/resume-section';
import ReviewSection from '@/components/sections/review-section';
import ProjectSection from '@/components/sections/project-section';
import ContactSection from '@/components/sections/contactSection';

import { getFooter, getHomePage } from '@/sanity/lib/queries';

export default async function Home() {
  const data = await getHomePage();

  if (!data?.content) return null;

  return (
    <>
      {data.content.map((section: any) => {
        switch (section._type) {
          case 'heroSection':
            return <HeroSection key={section._key} value={section} />;

          case 'aboutSection':
            return <AboutSection key={section._key} value={section} />;

          case 'skillSection':
            return <KeySkillsSection key={section._key} value={section} />;

          case 'skillProficiencySection':
            return <SkillsSection key={section._key} value={section} />;

          case 'resumeSection':
            return <ResumeSection key={section._key} value={section} />;

          // case 'reviewsSection':
          //   return <ReviewSection key={section._key} value={section} />;

          case 'projectSection':
            return <ProjectSection key={section._key} value={section} />;

          case 'contactSection':
            return <ContactSection key={section._key} value={section} />;

          default:
            return null;
        }
      })}
>>>>>>> 8c5257b627f2e18cf7d28436007025e415a44ec9
    </>
  );
}
