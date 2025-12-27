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
    },

    // 🔘 CTA TYPE SELECTOR
    {
      name: "ctaType",
      title: "CTA Type",
      type: "string",
      options: {
        list: [
          { title: "External / Internal URL", value: "url" },
          { title: "PDF File", value: "file" },
        ],
        layout: "radio",
      },
    },

    // 🌐 URL FIELD
    {
      name: "url",
      title: "Button URL",
      type: "url",
      hidden: ({ parent }: any) => parent?.ctaType !== "url",
      validation: (Rule) =>
        Rule.custom((value, context: any) => {
          if (context.parent?.ctaType === "url" && !value) {
            return "URL is required";
          }
          return true;
        }),
    },

    // 📄 PDF FILE FIELD
    {
      name: "file",
      title: "PDF File",
      type: "file",
      options: {
        accept: ".pdf",
      },
      hidden: ({ parent }: any) => parent?.ctaType !== "file",
      validation: (Rule) =>
        Rule.custom((value, context: any) => {
          if (context.parent?.ctaType === "file" && !value) {
            return "PDF file is required";
          }
          return true;
        }),
    },
  ],

  preview: {
    select: {
      title: "label",
      ctaType: "ctaType",
    },
    prepare({ title, ctaType }) {
      return {
        title,
        subtitle: ctaType === "file" ? "PDF Download" : "Link",
      };
    },
  },
});
