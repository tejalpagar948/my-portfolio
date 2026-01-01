import { client } from "./client";
import type { Page } from "../../sanity.types";

/* ----------------------------------
   CTA QUERY FRAGMENT
----------------------------------- */
const CTA_FRAGMENT = `
  label,
  ctaType,
  urlType,
  externalUrl,
  internalPage->{
    slug
  },
  sectionId,
  file{
    asset->{
      url,
      originalFilename
    }
  }
`;

/* ----------------------------------
   HOME PAGE QUERY
----------------------------------- */
export async function getHomePage(): Promise<Page> {
  const query = `
  *[_type == "page" && slug.current == "home"][0]{
    title,
    slug,
    content[]{
      ...,

      _type == "heroSection" => {
        heroContent,
        image{
          alt,
          asset->{ url }
        },
        cta{
          ${CTA_FRAGMENT}
        }
      },

      _type == "aboutSection" => {
        sectionTitle,
        slug,
        aboutContent,
        image{
          alt,
          asset->{ url }
        },
        cta{
          ${CTA_FRAGMENT}
        }
      },

      _type == "skillSection" => {
        sectionTitle,
        skills[]->{
          _id,
          title,
          description,
          icon{
            alt,
            asset->{ url }
          }
        }
      },

      _type == "skillProficiencySection" => {
        sectionTitle,
        content,
        skills[]{
          skillName,
          proficiencyPercentage
        }
      },

      _type == "resumeSection" => {
        sectionTitle,
        items[]{
          title,
          iconImage{
            alt,
            asset->{ url }
          },
          items[]->{
            title,
            content
          }
        }
      },

      _type == "reviewsSection" => {
        sectionTitle,
        reviews[]->{
          name,
          message,
          linkedin,
        }
     },

      _type == "projectSection" => {
        title,
        projects[]->{
          projectThumbnail{
            alt,
            asset->{ url }
          },
          title,
          description,
          cta{
            ${CTA_FRAGMENT}
          }
        }
      },

      _type == "contactSection" => {
        sectiontitle,
        contacts[]->{
            _id,
            title,
            content,

            contactItems[]{
              label,
              valuePrimary,
              valueSecondary,
              icon {
                asset->{ url }
              }
            },

            socialTitle,
            socialLinks[]{
              platform,
              url,
              icon {
                asset->{ url }
              }
            }
          }
       }
    }
  }
  `;

  return client.fetch<Page>(query);
}
