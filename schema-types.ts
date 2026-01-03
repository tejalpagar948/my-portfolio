import { contactInfo } from "./sanity/schemaTypes/documents/contactInfo";
import { education } from "./sanity/schemaTypes/documents/education";
import { experience } from "./sanity/schemaTypes/documents/experience";
import { page } from "./sanity/schemaTypes/documents/page";
import { project } from "./sanity/schemaTypes/documents/project";
import { review } from "./sanity/schemaTypes/documents/review";
import { skill } from "./sanity/schemaTypes/documents/skill";
import { cta } from "./sanity/schemaTypes/objects/cta";
import { ctaWithIcon } from "./sanity/schemaTypes/objects/ctaWithIcon";
import { dateRange } from "./sanity/schemaTypes/objects/dateRange";
import { keyValueItem } from "./sanity/schemaTypes/objects/keyValueItem";
import { link } from "./sanity/schemaTypes/objects/link";
import { resumeItems } from "./sanity/schemaTypes/objects/resume-items";
import { aboutSection } from "./sanity/schemaTypes/objects/sections/about-section";
import { contactSection } from "./sanity/schemaTypes/objects/sections/contact-section";
import { heroSection } from "./sanity/schemaTypes/objects/sections/hero-section";
import { projectSection } from "./sanity/schemaTypes/objects/sections/project-section";
import { resumeSection } from "./sanity/schemaTypes/objects/sections/resume-section";
import { reviewsSection } from "./sanity/schemaTypes/objects/sections/reviews-section";
import { skillProficiencySection } from "./sanity/schemaTypes/objects/sections/skill-proficiency-section";
import { skillSection } from "./sanity/schemaTypes/objects/sections/skill-section";

export const schemaTypes = [
  contactInfo,
  education,
  experience,
  page,
  project,
  review,
  skill,
  cta,
  ctaWithIcon,
  dateRange,
  keyValueItem,
  link,
  resumeItems,
  aboutSection,
  contactSection,
  heroSection,
  projectSection,
  resumeSection,
  reviewsSection,
  skillProficiencySection,
  skillSection
];