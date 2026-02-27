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
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),

    // ✅ NEW IMAGE FIELD ADDED
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true, // allows image cropping
      },
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
      name: "approved",
      title: "Approved",
      type: "boolean",
      initialValue: false,
      description: "Only approved reviews will be shown on the website",
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
      media: "image", // ✅ show image in preview
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