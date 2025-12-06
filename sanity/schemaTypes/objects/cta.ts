import { defineType } from "sanity";

export default defineType({
  name: "ctaObject",
  title: "CTA Button",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Button Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "Button URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
});
