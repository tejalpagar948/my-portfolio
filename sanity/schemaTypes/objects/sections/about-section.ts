import { defineType } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Section Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "aboutContent",
      title: "About Content",
      description: "Add the about text content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h4" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Yellow Small Span", value: "yellowSmallSpan" },
            ],
            annotations: [],
          },
        },
        {
          type: "keyValueItem",
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    {
      name: "image",
      title: "About Section Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },

    {
      name: "cta",
      title: "CTA",
      type: "cta",
    },
  ],

  preview: {
    select: { media: "image" }, // must exist on the object
    prepare(selection) {
      return {
        title: "About Section",
        media: selection.media,
      };
    },
  },

});
