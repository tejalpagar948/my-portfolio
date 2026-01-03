import { defineType, defineField } from "sanity";

export const ctaWithIcon = defineType({
  name: "ctaWithIcon",
  title: "CTA With Icon",
  type: "object",

  fields: [
    defineField({
      name: "cta",
      title: "CTA",
      type: "cta",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: { hotspot: true },
    }),
  ],

  preview: {
    select: {
      label: "label",
      external: "link.externalUrl",
      internal: "link.internalPage.slug.current",
    },
    prepare({ label, external, internal }) {
      return {
        title: label || "CTA",
        subtitle: external || (internal ? `/${internal}` : "No link"),
      };
    },
  },
});
