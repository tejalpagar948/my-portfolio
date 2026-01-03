import { defineType, defineField } from "sanity";

export const link = defineType({
  name: "link",
  title: "Link",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "Link Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "External Link", value: "external" },
          { title: "Internal Page", value: "internal" },
          { title: "Section Link (One-page)", value: "section" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    // 🌐 External
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "external",
    }),

    // 📄 Internal Page
    defineField({
      name: "internalPage",
      title: "Internal Page",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => parent?.linkType !== "internal",
    }),

    // 🔗 Section (Anchor)
    defineField({
      name: "sectionId",
      title: "Section ID",
      description: "Example: about, resume, projects (no #)",
      type: "string",
      hidden: ({ parent }) => parent?.linkType !== "section",
    }),

    defineField({
      name: "openInNewTab",
      title: "Open in new tab",
      type: "boolean",
      hidden: ({ parent }) => parent?.linkType !== "external",
    }),
  ],

  validation: (Rule) =>
    Rule.custom((fields) => {
      if (fields?.linkType === "external" && !fields?.externalUrl)
        return "External URL required";
      if (fields?.linkType === "internal" && !fields?.internalPage)
        return "Internal page required";
      if (fields?.linkType === "section" && !fields?.sectionId)
        return "Section ID required";
      return true;
    }),
});
