import Image from "next/image";
import Banner from "@/components/sections/banner-section";
import AboutUs from "@/components/sections/about-us-section";
import KeySkillsSection from "@/components/sections/key-skills-section";
import SkillsSection from "@/components/sections/skills-section";
import ResumeSection from "@/components/sections/resume-section";
import ReviewSection from "@/components/sections/review-section";
import ProjectSection from "@/components/sections/project-section";
import ContactSection from "@/components/sections/contactSection";

export default function Home() {
  return (
    <>
    <Banner/>
    <AboutUs/>
    <KeySkillsSection/>
    <SkillsSection/>
    <ResumeSection/>
    <ReviewSection/>
    <ProjectSection/>
    <ContactSection/>
    </>
  );
}
