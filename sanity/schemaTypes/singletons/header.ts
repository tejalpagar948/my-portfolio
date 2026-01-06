import { defineType, defineField } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "nav",
      title: "Navigation Links",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "linkObject",
              title: "Link Object",
              type: "linkObject",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "link.title",
              url: "link.externalUrl",
              internalUrl: "link.internalLink.slug.current",
            },
            prepare({ title, url, internalUrl }) {
              return {
                title: title || "Navigation Link",
                subtitle: url || internalUrl || "No URL set",
              };
            },
          },
        },
      ],
    }),

    defineField({
      name: "cta",
      title: "CTAs",
      type: "array",
      of: [
        {
          type: "ctaWithIcon",
        },
      ],
      validation: (Rule) => Rule.max(2),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Top Navigation" };
    },
  },
});
