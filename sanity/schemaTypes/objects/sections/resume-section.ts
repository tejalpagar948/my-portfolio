// objects/sections/resume-section.ts
import { defineType, defineField } from "sanity";

export const resumeSection = defineType({
  name: "resumeSection",
  title: "Resume Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "resumeItems" }], // ✅ correct name
    }),
  ],
});
