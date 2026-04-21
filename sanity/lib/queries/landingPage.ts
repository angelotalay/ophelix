import { defineQuery } from "next-sanity";
import marketingPageContentFragment from "@/sanity/lib/queries/fragments/marketingPageContentFragment";

export const landingPageQuery = defineQuery(`
*[_type == "siteSettings"][0]{
  "pageSections": landingPage->pageSections[]${marketingPageContentFragment}
  }
`);
