import HeroSection from '@/components/sections/hero-section';
import AboutUs from '@/components/sections/about-us-section';
import KeySkillsSection from '@/components/sections/key-skills-section';
import SkillsSection from '@/components/sections/skills-section';
import ResumeSection from '@/components/sections/resume-section';
import ReviewSection from '@/components/sections/review-section';
import ProjectSection from '@/components/sections/project-section';
import ContactSection from '@/components/sections/contactSection';
import { getHomePage } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import type { Page } from '@/sanity.types';

export default async function Home() {
  const data = await client.fetch<Page>(`*[_type == "page"][0]`);
  const hero = data?.content?.find((item) => item._type === 'heroSection');
  console.log('page data', data);
  return (
    <>
      {hero && <HeroSection value={hero} />}
      <AboutUs />
      <KeySkillsSection />
      <SkillsSection />
      <ResumeSection />
      <ReviewSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
