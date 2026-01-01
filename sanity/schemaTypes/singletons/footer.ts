import { defineType, defineField } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "Content",
      title: "Content",
      description: "Add the text content",
      type: "array",
      of: [
        {
          type: "block",
          lists: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Normal Span", value: "normalSpan" },
            ],
            annotations: [],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Footer Copyright" };
    },
  },
});
