import { defineType, defineField } from "sanity";

type CTAFields = {
  label?: string;
  ctaType?: "url" | "file";
  urlType?: "external" | "internal" | "section";
  externalUrl?: string;
  internalPage?: { _ref?: string };
  sectionId?: string;
  file?: unknown;
};

export const cta = defineType({
  name: "cta",
  title: "CTA",
  type: "object",

  fields: [
    // 🔤 Button Label
    defineField({
      name: "label",
      title: "Button Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // 🔘 CTA TYPE
    defineField({
      name: "ctaType",
      title: "CTA Type",
      type: "string",
      options: {
        list: [
          { title: "Link", value: "url" },
          { title: "PDF File", value: "file" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    // 🔘 URL TYPE
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
      hidden: ({ parent }) => parent?.ctaType !== "url",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as CTAFields; // ✅ cast to your type
          if (parent?.ctaType === "url" && !value) {
            return "Link type is required";
          }
          return true;
        }),
    }),

    // 🌐 External URL
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) =>
        parent?.ctaType !== "url" || parent?.urlType !== "external",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),

    // 📄 Internal Page
    defineField({
      name: "internalPage",
      title: "Internal Page",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) =>
        parent?.ctaType !== "url" || parent?.urlType !== "internal",
    }),

    // 🔗 Section ID
    defineField({
      name: "sectionId",
      title: "Section ID",
      description: "Example: about, resume, contact (no #)",
      type: "string",
      hidden: ({ parent }) =>
        parent?.ctaType !== "url" || parent?.urlType !== "section",
      validation: (Rule) =>
        Rule.regex(/^[a-z0-9-]+$/, {
          name: "section id",
        }),
    }),

    // 📄 PDF FILE
    defineField({
      name: "file",
      title: "PDF File",
      type: "file",
      options: {
        accept: ".pdf",
      },
      hidden: ({ parent }) => parent?.ctaType !== "file",
    }),
  ],

  // ✅ CROSS FIELD VALIDATION (TS SAFE)
  validation: (Rule) =>
    Rule.custom((fields?: CTAFields) => {
      if (!fields) return true;

      if (fields.ctaType === "url") {
        if (fields.urlType === "external" && !fields.externalUrl) {
          return "External URL is required";
        }
        if (fields.urlType === "internal" && !fields.internalPage) {
          return "Internal page is required";
        }
        if (fields.urlType === "section" && !fields.sectionId) {
          return "Section ID is required";
        }
      }

      if (fields.ctaType === "file" && !fields.file) {
        return "PDF file is required";
      }

      return true;
    }),

  preview: {
    select: {
      title: "label",
      urlType: "urlType",
      external: "externalUrl",
      section: "sectionId",
      internal: "internalPage.slug.current",
      file: "file.asset.originalFilename",
      ctaType: "ctaType",
    },
    prepare({ title, ctaType, urlType, external, section, internal, file }) {
      return {
        title: title || "CTA",
        subtitle:
          ctaType === "file"
            ? `PDF: ${file || "No file"}`
            : urlType === "external"
              ? external
              : urlType === "internal"
                ? `/${internal}`
                : urlType === "section"
                  ? `/#${section}`
                  : "Link",
      };
    },
  },
});
