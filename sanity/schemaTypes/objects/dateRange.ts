import { defineType, defineField } from "sanity";

export const dateRange = defineType({
  name: "dateRange",
  title: "Date Range",
  type: "object",

  fields: [
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: { dateFormat: "MMM YYYY" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      options: { dateFormat: "MMM YYYY" },
    }),

    defineField({
      name: "isCurrent",
      title: "Currently Ongoing",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      startDate: "startDate",
      endDate: "endDate",
      isCurrent: "isCurrent",
    },
    prepare({ startDate, endDate, isCurrent }) {
      const start = startDate
        ? new Date(startDate).getFullYear()
        : "";
      const end = isCurrent
        ? "Present"
        : endDate
          ? new Date(endDate).getFullYear()
          : "";

      return {
        title: `${start} – ${end}`,
      };
    },
  },
});
