import { page } from "./documents/page";
import { heroSection } from "./objects/sections/hero-section";
import { aboutSection } from "./objects/sections/about-section";
import { skillSection } from "./objects/sections/skill-section";
import { skillProficiencySection } from "./objects/sections/skill-proficiency-section";
import { resumeSection } from "./objects/sections/resume-section";
import { reviewsSection } from "./objects/sections/reviews-section";
import { projectSection } from "./objects/sections/project-section";
import { contactSection } from "./objects/sections/contact-section";
import { resumeItems } from "./objects/resume-items";
import { contactInfo } from "./documents/contactInfo";
import { review } from "./documents/review";
import { skill } from "./documents/skill";
import { project } from "./documents/project";
import { experience } from "./documents/experience";
import { education } from "./documents/education";
import { keyValueItem } from "./objects/keyValueItem";
import { cta } from "./objects/cta";
import { dateRange } from "./objects/dateRange";
import { header } from "./singletons/header";
import { footer } from "./singletons/footer";
import { siteConfig } from "./singletons/siteConfig";
import { link } from "./objects/link";
import { ctaWithIcon } from "./objects/ctaWithIcon";

export const schemaTypes = [
  page, skill, project, experience, education, review, contactInfo, heroSection, aboutSection, skillSection, skillProficiencySection, resumeSection, reviewsSection, projectSection, contactSection, resumeItems, cta, ctaWithIcon, keyValueItem, dateRange, link, header, footer, siteConfig
]

