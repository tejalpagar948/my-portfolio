// objects/resumeItems.ts
import {
  defineType,
  defineField,
  defineArrayMember,
} from "sanity";

export const resumeItems = defineType({
  name: "resumeItems",
  title: "Resume Items",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // 🔹 Icon Image Field
    defineField({
      name: "iconImage",
      title: "Icon Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for accessibility",
        },
      ],
    }),

    // 🔹 Resume Items (Education / Experience)
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          name: "educationItem",
          type: "reference",
          to: [{ type: "education" }],
        }),
        defineArrayMember({
          name: "experienceItem",
          type: "reference",
          to: [{ type: "experience" }],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "icon",
    },
    prepare({ title, media }) {
      return {
        title: title || "Resume Items",
        media,
      };
    },
  },
});
