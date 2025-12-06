import { defineType } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "heroContent",
      title: "Hero Content",
      description: "Add the heading and description for the hero section",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Heading", value: "h2" }], // Only normal and h1 text
          lists: [], // No lists
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Highlight", value: "highlight" }, // Custom highlight decorator
            ],
            annotations: [], // No link annotations etc.
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload a hero image for the section aspect ratio 16:9",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          description:
            "Enter the alt text for the image for accessibility and SEO",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "cta",
      title: "CTA",
      description: "Add a CTA button to the section (optional)",
      type: "ctaObject",
    },
  ],
  preview: {
    select: {
      media: "image",
    },
    prepare({ media }) {
      return {
        title: "Hero section",
        media,
      };
    },
  },
});
