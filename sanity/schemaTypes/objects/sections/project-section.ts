// objects/sections/project-section.ts
import { defineType, defineField } from "sanity";

export const projectSection = defineType({
  name: "projectSection",
  title: "Project Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    }),
  ],
});
