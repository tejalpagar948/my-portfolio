import { defineType, defineField } from "sanity";
import { heroSection } from "../objects/sections/hero-section";
import { aboutSection } from "../objects/sections/about-section";
import { skillSection } from "../objects/sections/skill-section";
import { resumeSection } from "../objects/sections/resume-section";
import { reviewsSection } from "../objects/sections/reviews-section";
import { ComposeIcon, DocumentIcon, SearchIcon } from "@sanity/icons";
import { skillProficiencySection } from "../objects/sections/skill-proficiency-section";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
      icon: ComposeIcon,
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "aboutSection" },
        { type: "skillSection" },
        { type: "skillProficiencySection" },
        { type: "resumeSection" },
        { type: "reviewsSection" },
        { type: "projectSection" },
        { type: "contactSection" },
      ],
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
  ],
});
