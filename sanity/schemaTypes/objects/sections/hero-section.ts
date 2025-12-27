import { defineType } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "heroContent",
      title: "Hero Content",
      description: "Add the hero text content",
      type: "array",
      of: [
        {
          type: "block",

          // BLOCK-LEVEL STYLES (whole line only)
          styles: [
            { title: "Heading", value: "h2" },
          ],

          lists: [],

          // INLINE STYLES (span with classes)
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Yellow Span", value: "yellowSpan" },
              { title: "Gray Span", value: "graySpan" },
            ],
            annotations: [],
          },
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },

    {
      name: "cta",
      title: "CTA",
      type: "ctaObject",
    },
  ],

  preview: {
    select: { media: "image" },
    prepare({ media }: { media: any }) {
      return {
        title: "Hero Section",
        media,
      };
    },
  },
});
