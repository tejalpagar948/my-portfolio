import { defineType, defineField } from "sanity";
import { InviteLinkInput } from "../../../components/invite-link-input";

export const reviewInvite = defineType({
  name: "reviewInvite",
  title: "Review Invite",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "inviteLink",
      title: "Invite Link",
      type: "string",
      readOnly: true,
      components: { input: InviteLinkInput },
      // ✅ hidden internal token generation (handled in input)
      initialValue: () => "", // leave empty, the component will generate dynamically
    }),
    defineField({
      name: "used",
      title: "Used",
      type: "boolean",
      initialValue: false,
    }),
  ],
});