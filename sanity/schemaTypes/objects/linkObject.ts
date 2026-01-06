import { defineType, defineField } from "sanity";

type CTAFields = {
  label?: string;
  urlType?: "external" | "internal" | "section";
  externalUrl?: string;
  internalPage?: { _ref?: string };
  sectionId?: string;
};

export const linkObject = defineType({
  name: "linkObject",
  title: "Link Object",
  type: "object",

  fields: [
    defineField({
      name: "label",
      title: "Button Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "urlType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "External URL", value: "external" },
          { title: "Internal Page", value: "internal" },
          { title: "Section ID (One-page)", value: "section" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => parent?.urlType !== "external",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),

    defineField({
      name: "internalPage",
      title: "Internal Page",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => parent?.urlType !== "internal",
    }),

    defineField({
      name: "sectionId",
      title: "Section ID",
      description: "Example: about, resume, contact (no #)",
      type: "string",
      hidden: ({ parent }) => parent?.urlType !== "section",
      validation: (Rule) =>
        Rule.regex(/^[a-z0-9-]+$/, { name: "section id" }),
    }),
  ],

  validation: (Rule) =>
    Rule.custom((fields?: CTAFields) => {
      if (!fields) return true;
      if (fields.urlType === "external" && !fields.externalUrl)
        return "External URL is required";
      if (fields.urlType === "internal" && !fields.internalPage)
        return "Internal page is required";
      if (fields.urlType === "section" && !fields.sectionId)
        return "Section ID is required";
      return true;
    }),

  // ✅ LABEL ONLY PREVIEW
  preview: {
    select: {
      title: "label",
    },
    prepare({ title }) {
      return {
        title: title || "Link",
      };
    },
  },
});
