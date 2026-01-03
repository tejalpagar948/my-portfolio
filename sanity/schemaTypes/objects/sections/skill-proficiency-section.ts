// schemas/skillProficiencySection.ts
import { defineType, defineField } from "sanity";

export const skillProficiencySection = defineType({
  name: "skillProficiencySection",
  title: "Skill Proficiency Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "content",
      title: "Content",
      description: "Add the hero text content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Heading", value: "h4" }],
          lists: [],
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
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        defineField({
          name: "skill",
          title: "Skill",
          type: "object",
          fields: [
            defineField({
              name: "skillName",
              title: "Skill Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "proficiencyPercentage",
              title: "Proficiency Percentage",
              type: "number",
              validation: (Rule) =>
                Rule.required().min(0).max(100),
            }),
          ],
        }),
      ],
    }),
  ],
});
