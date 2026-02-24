// objects/sections/project-section.ts
import { defineType, defineField } from "sanity";

export const reviewsSection = defineType({
  name: "reviewsSection",
  title: "Reviews Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
  ],
});