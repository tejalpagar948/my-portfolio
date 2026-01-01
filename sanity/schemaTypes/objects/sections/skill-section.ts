// objects/sections/skill-section.ts
import { defineType, defineField } from "sanity";

export const skillSection = defineType({
  name: "skillSection",
  title: "Skill Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    }),
  ],
});
