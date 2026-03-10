import { client } from "./client";
import type { Page } from "../../sanity.types";
import type { Header } from "../../sanity.types";
import type { Footer } from "../../sanity.types";
import type { SiteConfig } from "../../sanity.types";

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
        "reviews": *[_type == "review"] | order(_createdAt desc){
          _id,
          name,
          message,
          linkedin,
          image{
        asset->{
          _id,
          url
        }
      },
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


export async function getHeader(): Promise<Header | null> {
  const query = `*[_type == "header"][0]{
    _id,
    _type,
    "nav": nav[] {
      "title": link.label,
      "url": select(
        link.urlType == "external" => link.externalUrl,
        link.urlType == "internal" => link.internalPage->slug.current,
        link.urlType == "section" => link.sectionId
      )
    },
  cta[]{
      "label": cta.label,
      "urlType": cta.urlType,
      "url": select(
        cta.urlType == "external" => cta.externalUrl,
        cta.urlType == "internal" => cta.internalPage->slug.current,
        cta.urlType == "section" => cta.sectionId
      ),
      "icon": {
        "url": icon.asset->url,
        "alt": icon.alt
      }
    } 
  }
  `
  return client.fetch<Header>(query);
};

export async function getFooter(): Promise<Footer | null> {
  const query = `*[_type == "footer"][0]{
  _id,
  content
}`
  return client.fetch<Footer>(query);
};

export async function getSiteConfig(): Promise<SiteConfig | null> {
  const query = `*[_type == "siteConfig"][0]{
    name,
    logo {
      asset->{
        _id,
        url,
        metadata
      }
    }
  }
`
  return client.fetch<SiteConfig>(query);
};