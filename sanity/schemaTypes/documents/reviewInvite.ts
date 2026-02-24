import { defineType, defineField } from "sanity";
import type { StringInputProps } from "sanity";
import { InviteLinkInput } from "@/components/invite-link-input";

const FRONTEND_URL = "https://yourwebsite.com/review";

export const reviewInvite = defineType({
  name: "reviewInvite",
  title: "Review Invite",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "string",
    }),

    defineField({
      name: "token",
      title: "Token",
      type: "string",
      readOnly: true,
      initialValue: () =>
        Math.random().toString(36).substring(2, 10),
    }),

    defineField({
      name: "inviteLink",
      title: "Invite Link",
      type: "string",
      readOnly: true,
      components: {
        input: InviteLinkInput,
      },
    }),

    defineField({
      name: "used",
      title: "Used",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
