import { defineType } from "sanity";

export const keyValueItem = defineType(
  {
    name: "keyValueItem",
    title: "Key Value Item",
    type: "object",
    fields: [
      {
        name: "key",
        title: "Key",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "value",
        title: "Value",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        key: "key",
        value: "value",
      },
      prepare({ key, value }) {
        return {
          title: `${key}: ${value}`,
        };
      },
    },
  }
)
