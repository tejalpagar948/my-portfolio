// objects/sections/contact-section.ts
import { defineType, defineField } from "sanity";

export const contactSection = defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "object",
  fields: [
    defineField({
      name: "sectiontitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "contacts",
      title: "Contacts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "contactInfo" }] }],
    }),
  ],
});
