import { client } from "./client";
import type { Page } from "../../sanity.types";

export async function getHomePage(): Promise<Page> {
  const query = `*[_type == "page" && slug.current == "home"][0]{
    title,
    slug,
    content[]{
      ...,
      _type == "heroSection" => {
        heroContent,
        image{
          alt,
          asset->{
            url
          }
        },
        cta->{  
          label,
          url
        }
      }
    }
  }
  `;
  return client.fetch<Page>(query);
}
