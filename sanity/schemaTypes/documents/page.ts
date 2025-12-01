import { defineType, defineField } from "sanity";
import heroSection from "../objects/sections/hero-section";
import { ComposeIcon, DocumentIcon, SearchIcon } from "@sanity/icons";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
      icon: ComposeIcon,
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: heroSection.name }, // ✅ works because heroSection is default export
      ],
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
  ],
});
