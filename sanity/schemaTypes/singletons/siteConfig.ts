import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteConfig = defineType({
  name: "siteConfig",
  title: "Site Configuration",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description:
        "This logo will be used as the site logo. Recommended size: 180x60px with transparent background.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Configuration",
      };
    },
  },
});
