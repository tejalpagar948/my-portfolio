"use client";
import Image from "next/image";
import { useState } from "react";
import Banner from "@/components/sections/banner-section";
import AboutUs from "@/components/sections/about-us-section";
import KeySkillsSection from "@/components/sections/key-skills-section";
import SkillsSection from "@/components/sections/skills-section";
import ResumeSection from "@/components/sections/resume-section";
import ReviewSection from "@/components/sections/review-section";
import ProjectSection from "@/components/sections/project-section";
import ContactSection from "@/components/sections/contactSection";
import FeedbackForm from "@/components/feedback";
import Link from "next/link";
import FeedbackDisplay from "@/components/feedbackDisplay";

export default function Home() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

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
    {/* <FeedbackForm/> */}

    </>
  );
}
