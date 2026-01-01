// schemas/contactInfo.ts
import { defineType, defineField } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Contact Information",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Contact Info",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "content",
      title: "Content",
      description: "Add the text content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h4" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "contactItems",
      title: "Contact Items",
      type: "array",
      of: [
        defineField({
          name: "contactItem",
          title: "Contact Item",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "Example: Email, Phone, Address",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "valuePrimary",
              title: "Primary Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "valueSecondary",
              title: "Secondary Value",
              type: "string",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
              description: "Upload an icon image for this contact item",
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "valuePrimary",
              media: "icon",
            },
          },
        }),
      ],
    }),

    defineField({
      name: "socialTitle",
      title: "Social Section Text",
      type: "string",
      initialValue: "Visit my social profile and get connected",
    }),

    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        defineField({
          name: "social",
          title: "Social Link",
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ["http", "https"],
                }),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
              description: "Upload an icon image for this social platform (e.g., LinkedIn, GitHub)",
            }),
          ],
          preview: {
            select: {
              title: "platform",
              subtitle: "url",
              media: "icon",
            },
          },
        }),
      ],
    }),
  ],
});
