import { defineType, defineField } from "sanity";

export const review = defineType({
  name: "review",
  title: "Reviews",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",          // ✅ Add this field
      title: "Email",
      type: "string",
      readOnly: true,         // optional: prevent manual editing
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
      description: "Job title or position of the reviewer",
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "message",
      title: "Review Message",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn Profile",
      type: "url",
      description: "Optional LinkedIn profile link",
    }),
    defineField({
      name: "createdAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "message",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `${subtitle.slice(0, 50)}...` : "",
        media,
      };
    },
  },
});