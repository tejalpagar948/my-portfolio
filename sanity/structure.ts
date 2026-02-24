import type { StructureResolver } from 'sanity/structure'
import { DocumentIcon, BulbOutlineIcon, EditIcon, DocumentsIcon, EnvelopeIcon } from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .icon(DocumentIcon)
        .child(S.documentTypeList("page")),
      S.listItem()
        .title("Skills")
        .schemaType("skill")
        .icon(BulbOutlineIcon)
        .child(S.documentTypeList("skill").title("Skills")),
      S.listItem()
        .title("Projects")
        .schemaType("project")
        .child(S.documentTypeList("project").title("Projects")),
      S.listItem()
        .title("Reviews")
        .schemaType("review")
        .icon(EditIcon)
        .child(S.documentTypeList("review").title("Reviews")),
      S.listItem()
        .title("Review Invite")
        .schemaType("reviewInvite")
        .icon(EnvelopeIcon)
        .child(S.documentTypeList("reviewInvite").title("Review Invite")),
      S.listItem()
        .title("Professional Info")
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title("Professional Info")
            .items([
              S.listItem()
                .title("Experience")
                .schemaType("experience")
                .child(S.documentTypeList("experience")),
              S.listItem()
                .title("Education")
                .schemaType("education")
                .child(S.documentTypeList("education")),
            ]),
        ),
      S.listItem()
        .title("Contact Info")
        .schemaType("contactInfo")
        .icon(EnvelopeIcon)
        .child(S.documentTypeList("contactInfo").title("Contact Info")),
      S.listItem()
        .title("Configuration")
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title("Configuration")
            .items([
              S.listItem()
                .title("SiteConfig")
                .schemaType("siteConfig")
                .child(S.documentTypeList("siteConfig")),
              S.listItem()
                .title("Header")
                .schemaType("header")
                .child(S.documentTypeList("header")),
              S.listItem()
                .title("Footer")
                .schemaType("footer")
                .child(S.documentTypeList("footer")),
            ]),
        ),
    ]);
